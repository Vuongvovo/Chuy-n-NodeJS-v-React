import React from 'react'
import "../../../scss/SearchJobs/SearchJobs.scss";
export default function Search() {
    return (
        <div className="searchJobs">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="key">
                            <div className="key__title">Từ khoá</div>
                            <input type="text" placeholder="Việc làm, công ty, kỹ năng, nghành nghề, ..." />
                            <i className="fas fa-search text-silver"></i>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="address">
                            <div className="address__title">Địa điểm</div>
                            <input type="text" placeholder="Địa điểm" />
                            <i className="fas fa-map-marker-alt text-silver"></i>
                        </div>
                    </div>
                    <div className="col-md-3">

                        <div className="btn">
                            <button >Tìm việc làm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
