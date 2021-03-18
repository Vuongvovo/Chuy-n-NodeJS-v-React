import React from 'react'
import Footer from '../Home/Footer/Footer'
import Menu from '../MenuNotHome/MenuNotHome'
import Breadcrumb from './Breadcrumb/Breadcrumb'
import ListCandidates from './ListCandidates/ListCandidates'

export default function Candidates() {
    return (
        <div>
            <Menu />
            <Breadcrumb />
            <ListCandidates />
            <Footer />
        </div>
    )
}
