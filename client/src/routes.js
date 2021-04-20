import Archive from "./pages/Archive"
import Auth from "./pages/Auth"
import Settings from "./pages/Settings"
import Streams from "./pages/Streams"
import { ARCHIVE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SETTINGS_ROUTE, STREAMS_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: STREAMS_ROUTE,
        component: Streams
    },
    {
        path: SETTINGS_ROUTE,
        component: Settings
    },
    {
        path: ARCHIVE_ROUTE,
        component: Archive
    },
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        component: Auth
    }
]