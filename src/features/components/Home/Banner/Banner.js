import React from 'react'
import "../../../scss/Home/Banner.scss"
export default function Banner() {

    return (
        <div className="banner">
            <div className="banner__search">
                <div className="banner__search--box">
                    <div className="banner__search--box--title">
                        <h4 className="text-center" >
                            Tìm kiếm công việc phù hợp với bản thân
                        </h4>
                    </div>
                    <div className="banner__search--box--content">
                        <input type="text"
                            className="form-control" name="" id="" aria-describedby="helpId" placeholder="Việc làm mong muốn ..." />
                        <input type="text"
                            className="form-control" name="" id="" aria-describedby="helpId" placeholder="Địa điểm" />
                        <button type="button" className="btn btn-primary">Search</button>
                    </div>
                    <div className="banner__search--suggestions">

                    </div>
                </div>
            </div>
        </div>
    )
}
