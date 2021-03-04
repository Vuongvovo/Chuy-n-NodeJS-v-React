import React from 'react'
import Footer from '../Home/Footer/Footer'
import ListNew from '../Home/New/ListNew'
import MenuNotHome from "../MenuNotHome/MenuNotHome"
import Breadcrumbs from './Breadcrumb/Breadcrumb'
import Job from './ListJobs/Job'
import Search from './Search/Search'
export default function Jobs() {
    return (
        <div>
            <MenuNotHome />
            <Breadcrumbs />
            <Search />
            <Job />
            <ListNew />
            <Footer />
        </div>
    )
}
