import React from 'react'
import bn1 from "../../../images/notebook-1971495.jpg"
import "../../../scss/Banner.scss"
export default function Banner() {

    return (
        <div className="banner">
            {/* <div className="banner__img">
                <img src={bn1} alt="" />
            </div> */}
            <div className="banner__search">
                <div className="banner__search--box">
                    <div className="banner__search--box--title">
                        <h4 className="text-center" >
                            Tìm kiếm công việc phù hợp với bản thân
                        </h4>
                    </div>
                    <div className="banner__search--box--content">
                        <input type="text"
                            class="form-control" name="" id="" aria-describedby="helpId" placeholder="Việc làm mong muốn ..." />
                        <input type="text"
                            class="form-control" name="" id="" aria-describedby="helpId" placeholder="Địa điểm" />
                        <button type="button" class="btn btn-primary">Search</button>
                    </div>
                    <div className="banner__search--suggestions">

                    </div>
                </div>
            </div>
        </div>
    )
}
