import './Dashboard.css'

import ContentWrap from "./ContentWrap"
import MenuWrap from "./MenuWrap"
import SearchWrap from "./SearchWrap"

function Dashboard () {
    return (
        <div className="dashboard">
            <SearchWrap/>
            <MenuWrap/>
            <ContentWrap/>
        </div>
    )
}

export default Dashboard