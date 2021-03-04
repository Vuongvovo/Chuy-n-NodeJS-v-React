import React from 'react'
import Footer from '../Home/Footer/Footer'
import Menu from '../MenuNotHome/MenuNotHome'
import Breadcrumd from './Breadcrumd/Breadcrumd'
import News from './News/News'
export default function ListNews() {
    return (
        <div>
            <Menu />
            <Breadcrumd />
            <News />
            <Footer />
        </div>
    )
}
