import MenuWrap from "../MenuWrap"
import SearchWrap from "../SearchWrap"
import { Outlet } from 'react-router-dom'

function Layout () {
    return (
        <div className="dashboard">
            <SearchWrap/>
            <MenuWrap/>
            <main className="content-wrap">
                <Outlet/>
            </main>
        </div>
    )
}

export default Layout