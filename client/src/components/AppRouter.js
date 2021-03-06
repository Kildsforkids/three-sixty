import React, { useContext } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import { STREAMS_ROUTE } from '../utils/consts'
import {Context} from '../index'

const AppRouter = () => {
    const {user} = useContext(Context)

    console.log(user)
    return (
        <Switch>
            {user.isAuth && authRoutes.map(({path, component}) =>
                <Route key={path} path={path} component={component} exact />
            )}
            {publicRoutes.map(({path, component}) =>
                <Route key={path} path={path} component={component} exact />
            )}
            <Redirect to={STREAMS_ROUTE} />
        </Switch>
    )
}

export default AppRouter