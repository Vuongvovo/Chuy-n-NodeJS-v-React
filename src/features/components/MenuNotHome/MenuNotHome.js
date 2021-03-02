import React from 'react'
import { Link } from 'react-router-dom'
import "../../scss/Menu.scss"
import "../Home/Menu/menujs"
export default function Menu() {
    const style = {
        background: "red"
    }
    return (
        <div className="menu" style={style}>
            <div className="menu__brand">JobIt</div>
            <div className="menu--right">
                <div className="bar menu__bar">
                    <div className="line--top"></div>
                    <div className="line--mid"></div>
                    <div className="line--bot"></div>
                </div>
                <nav className="menu--hident">
                    <div className="item active">
                        <Link to="" >Trang chủ</Link>
                    </div>
                    <div className="item">
                        <Link to="">Hướng dẫn</Link>
                    </div>
                    <div className="item">
                        <Link to="">Khoá học</Link>
                    </div>
                    <div className="item">
                        <Link to="">Việc làm</Link>
                    </div>
                    <div className="item">
                        <Link to="">Nhà tuyển dụng</Link>
                    </div>
                    <div className="item">
                        <Link to="">Tạo cv</Link>
                    </div>
                </nav>
            </div>
        </div>
    )
}
