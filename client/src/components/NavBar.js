import React, { useContext } from 'react'
import { Context } from '..'
import {Button, Container, Nav, Navbar} from 'react-bootstrap'
import { NavLink, useHistory } from 'react-router-dom'
import { ARCHIVE_ROUTE, LOGIN_ROUTE, SETTINGS_ROUTE, STREAMS_ROUTE } from '../utils/consts'
import {observer} from 'mobx-react-lite'

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="light" variant="light">
            <Container>
                <h3>Управление трансляциями 360</h3>
                {user.isAuth ?
                    <Nav className="ml-auto">
                        <NavLink
                            activeStyle={{color: 'lightblue'}}
                            className="mt-1 pr-3"
                            style={{color: 'black', fontSize: 16, textDecoration: 'none'}}
                            to={STREAMS_ROUTE}
                            exact>
                            Трансляции
                        </NavLink>
                        <NavLink
                            activeStyle={{color: 'lightblue'}}
                            className="mt-1 pr-3"
                            style={{color: 'black', fontSize: 16, textDecoration: 'none'}}
                            to={SETTINGS_ROUTE}
                            exact>
                            Настройки
                        </NavLink>
                        <NavLink
                            activeStyle={{color: 'lightblue'}}
                            className="mt-1 pr-3"
                            style={{color: 'black', fontSize: 16, textDecoration: 'none'}}
                            to={ARCHIVE_ROUTE}
                            exact>
                            Архив
                        </NavLink>
                        <Button variant={'outline-dark'} className="ml-4" onClick={() => logOut()}>Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button variant={'outline-dark'} onClick={() => history.push(LOGIN_ROUTE)}>Войти</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
})

export default NavBar