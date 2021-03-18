import React from 'react'
import Menu from '../MenuNotHome/MenuNotHome'
import Footer from "../Home/Footer/Footer"
import Breadcrumb from "./Breadcrumb/Breadcrumb"
import Companys from './Companys/Companys'
export default function Company() {
    return (
        <div>
            <Menu />
            <Breadcrumb />
            <Companys />
            <Footer />
        </div>
    )
}
