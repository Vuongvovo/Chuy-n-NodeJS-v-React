import React from 'react'
import Footer from '../Home/Footer/Footer'
import Menu from '../MenuNotHome/MenuNotHome'
import BannerNew from './BannerNew/BannerNew'
import Breadcrumb from './Breadcrumb/Breadcrumb'
import New from './New/New'

export default function DetailNew() {
    return (
        <div>
            <Menu />
            <Breadcrumb />
            <BannerNew />
            <New />
            <Footer />
        </div>
    )
}
