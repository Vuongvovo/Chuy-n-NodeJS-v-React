import Avatar from 'antd/lib/avatar/avatar'
import React from 'react'
import { Link } from 'react-router-dom'
import anh from "../../../images/xinviec.jpg"
import "../../../scss/DetailNew/BannerNew.scss"
export default function BannerNew() {
    const style = {
        background: `url(${anh}) repeat center`,
        backgroundSize: "cover"
    }
    return (
        <div className="bannerNew" style={style}>
            <div className="bannerNew__content">
                <div className="bannerNew__content__title">
                    <span>Cách trả lời các câu hỏi phỏng vấn xin việc part-time</span>
                </div>
                <div className="bannerNew__content__tag">
                    <div className="newTag"><Link to="">Reactjs</Link></div>
                    <div className="newTag"><Link to="">JavaScript</Link></div>
                    <div className="newTag"><Link to="">Phỏng vấn</Link></div>
                </div>
                <div className="bannerNew__content__date">
                    <Avatar size="large" src={anh} className="avatarNew" />
                    <span >Quỳnh Chi lúc 26 Tháng Hai, 2021</span>
                </div>
            </div>
        </div>
    )
}
