import React from 'react'
import Footer from '../Home/Footer/Footer'
import Menu from '../MenuNotHome/MenuNotHome'
import BannerCompany from './BannerCompany/BannerCompany'
import Breadcrumb from "./Breadcrumb/Breadcrumb"
import ContentCompany from './Content/ContentCompany'

export default function DetailCompany() {
    return (
        <div>
            <Menu />
            <Breadcrumb />
            <BannerCompany />
            <ContentCompany />
            <Footer />
        </div>
    )
}
