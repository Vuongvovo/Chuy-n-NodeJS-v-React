import React from 'react'
import Footer from '../Home/Footer/Footer'
import Search from '../Jobs/Search/Search'
import Menu from '../MenuNotHome/MenuNotHome'
import BannerJob from './BannerJob/BannerJob'
import Breadcrumb from './Breadcrumb/Breadcrumb'
import Jd from './Jd/Jd'

export default function DetailJob() {
    return (
        <div>
            <Menu />
            <Breadcrumb />
            <Search />
            <BannerJob />
            <Jd />
            <Footer />
        </div>
    )
}
