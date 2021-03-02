import React from 'react'
import "../../../scss/CvHome.scss"
export default function CvHome() {
    return (
        <div className="CvHome">
            <div className="CvHome__title">
                <h3>Tạo CV để bắt đầu ứng tuyển</h3>
            </div>
            <div className="CvHome__detail">
                <p>Có rất nhiều cơ hội làm việc cho bạn, hãy bắt đầu bằng việc tạo một cv thật đẹp.</p>
            </div>
            <div className="CvHome__button">
                <button className="btnCV createCv">Tạo CV</button>
                <button className="btnCV searchCv">Tìm việc ngay</button>
            </div>
        </div>
    )
}
