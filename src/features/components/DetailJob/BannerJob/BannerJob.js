import React from 'react'
import logo from "../../../images/logoNew2.png"
import "../../../scss/DetailJob/BannerJob.scss"
import bannerImg from "../../../images/phong-lam-viec-day-du-anh-sang.jpg"
export default function BannerJob() {
    const style = {
        background: `url(${bannerImg}) repeat center`,
        backgroundSize: 'cover'
    }
    return (
        <div className="bannerJob">
            <div className="container" style={style}>
                <div className="bannerJob__content">
                    <div className="bannerJob__content__logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="bannerJob__content__title">
                        <div className="title--top">Mời bạn đến với công ty</div>
                        <div className="title--bot">Tên công ty</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
