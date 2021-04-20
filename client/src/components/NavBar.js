import React, { useContext } from 'react'
import { Context } from '..'
import {Button, Container, Nav, Navbar} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { STREAMS_ROUTE } from '../utils/consts'
import {observer} from 'mobx-react-lite'

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <NavLink style={{color: 'black', fontSize: 18}} to={STREAMS_ROUTE}>Управление трансляциями 360</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto">
                        <Nav.Link href="/streams">Трансляции</Nav.Link>
                        <Nav.Link href="/settings">Настройки</Nav.Link>
                        <Nav.Link href="/archive">Архив</Nav.Link>
                        <Button variant={'outline-dark'} className="ml-4">Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button variant={'outline-dark'} onClick={() => user.setIsAuth(true)}>Войти</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
})

export default NavBar