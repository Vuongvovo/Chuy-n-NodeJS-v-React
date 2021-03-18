import React from 'react'
import logo from "../../../images/logocty.png"
import banner from "../../../images/xinviec.jpg"
import "../../../scss/DetailCompany/BannerCompany.scss"
export default function BannerCompany() {
    const style = {
        background: `url(${banner}) repeat center`,
        backgroundSize: "cover"
    }
    return (
        <div className="bannerCompany" style={style}>
            <div className="bannerCompany__content">
                <div className="bannerCompany__content__img">
                    <img src={logo} alt="" />
                </div>
                <div className="company__margin">
                    <div className="bannerCompany__content__title">
                        Nhà đất mới
                    </div>
                    <div className="bannerCompany__content__address">
                        Thanh xuân, Hà nội
                    </div>
                </div>
            </div>
        </div>
    )
}
