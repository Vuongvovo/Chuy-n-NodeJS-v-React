import React from 'react'
import Breadcrumb from './Breadcrumb/Breadcrumb'
import Footer from '../Home/Footer/Footer'
import Menu from '../MenuNotHome/MenuNotHome'
import BannerCandidate from './BannerCandidate/BannerCandidate'
import CandidateContent from './CandidateContent/CandidateContent'

export default function DetailCandidate() {
    return (
        <div>
            <Menu />
            <Breadcrumb />
            <BannerCandidate />
            <CandidateContent />
            <Footer />
        </div>
    )
}
