import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../../../scss/DetailJob/Jd.scss"
import qc from "../../../images/1227.gif"
import KeyTag from '../../Jobs/ListJobs/KeyTag'
import renderHTML from 'react-render-html';
import { checkDateDealtime, formatDateWork } from '../../../container/Functionjs'
import saveWorkApi from '../../../../api/saveWorkApi'
import checkLoginApi from '../../../../api/checkLogin'
import Modal from 'antd/lib/modal/Modal'
import { message } from 'antd'
import workApplyApi from '../../../../api/workApplyApi'
export default function Jd(props) {
    let { data, id } = props
    const [user, setUser] = useState()
    const [load, setLoad] = useState(false)
    const [deleteId, setDeleteId] = useState()
    const [notSave, setNotSave] = useState(true)
    const [messager, setMessager] = useState("")
    useEffect(() => {
        checkLoginApi.checkLogin().then(ok => {
            if (ok.data.user.type === "user") {
                setUser(ok.data.user.id)
            }
        })
        saveWorkApi.getAll({ userId: user, workId: id }).then(data => {
            var a = data.data;
            var b = []
            for (let i = 0; i < a.length; i++) {
                b.push({ id: a[i].id })
            }
            setDeleteId(b)
            console.log(data.data.length);
            if (data.data.length === 0) {
                setNotSave(true)
            } else {
                setNotSave(false)
            }
        })
    }, [user, load])
    const onSaveWork = async () => {
        if (user) {
            await saveWorkApi.postsaveWork([{ userId: user, workId: id }])
            setLoad(!load)
        } else {
            message.warning("Bạn chưa đăng nhập!")
        }
    }
    const onNotSaveWork = async () => {
        if (user) {
            for (let i = 0; i < deleteId.length; i++) {
                await saveWorkApi.deletesaveWork(deleteId[i].id)
            }
            setLoad(!load)
        } else {
            message.warning("Bạn chưa đăng nhập!")
        }
    }
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = (e) => {
        if (e === "Đã hết hạn") {
            message.warning("Công việc đã hết hạn ứng tuyển!")
        } else {
            if (user) {
                setIsModalVisible(true);
            } else {
                message.warning("Bạn chưa đăng nhập!")
            }
        }
    };

    const handleOk = async () => {
        if (messager === "") {
            message.warning("Bạn cần nhập lời nhắn!")
        } else {
            await workApplyApi.postworkApply([{ userId: user, workId: id, message: messager, status: 0 }])
            setIsModalVisible(false);
        }
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div className="Jd">
            <Modal title="Ứng tuyển" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <div className="form-group mb-3">
                    <textarea className="form-control" value={messager} onChange={(e) => setMessager(e.target.value)} name="" id="" cols="30" rows="4" placeholder="Lời nhắn"></textarea>
                </div>
                <label htmlFor="file" className="file">File của bạn</label>
                <input type="file" hidden name="" id="file" />
            </Modal>
            <div className="container">
                <div className="row">
                    <div className="col-md-9 ">
                        <div className="job__box">
                            <div className="job__box__title">
                                <h4>{data.name}</h4>
                            </div>
                            <div className="job__box__detail">
                                <div className="job__box__detail--address">
                                    <i className="fas fa-map-marker-alt"></i>
                                    {data.address}
                                </div>
                                <div className="job__box__detail--fulltime">
                                    <i className="fas fa-hourglass-half"></i>
                                    {data.nature}
                                </div>
                                <div className="job__box__detail--status">
                                    <i className="fas fa-unlock-alt"></i>
                                    {checkDateDealtime(data.dealtime)}
                                </div>
                                <div className="job__box--detail--salary">
                                    <i className="fas fa-dollar-sign"></i>
                                    {data.price1} - {data.price2} triệu
                                </div>
                            </div>
                            <div className="apply" onClick={() => showModal(checkDateDealtime(data.dealtime))}>
                                <Link>Ứng tuyển ngay</Link>
                            </div>
                        </div>
                        <div className="job__box">
                            <div>
                                <div className="job__box__title--jd">
                                    <p>Mô tả công việc</p>
                                </div>
                                <div className="job__box__content--jd">
                                    {renderHTML(data.description)}
                                </div>
                            </div>
                            <div>
                                <div className="job__box__title--jd">
                                    <p>Yêu cầu công việc</p>
                                </div>
                                <div className="job__box__content--jd">
                                    {renderHTML(data.form)}
                                </div>
                            </div>
                            <div>
                                <div className="job__box__title--jd">
                                    <p>Quyền lợi được hưởng</p>
                                </div>
                                <div className="job__box__content--jd">
                                    {renderHTML(data.interest)}
                                </div>
                            </div>
                            <div>
                                <div className="job__box__title--jd">
                                    <p>Địa điểm làm việc</p>
                                </div>
                                <div className="job__box__content--jd">
                                    {data.address}
                                </div>
                            </div>
                            <div>
                                <div className="job__box__title--jd">
                                    <p>Nghành nghề</p>
                                </div>
                                <div className="job__box__content--jd">
                                    javascript
                                </div>
                            </div>
                            <div>
                                <div className="job__box__title--jd">
                                    <p>Tính chất công việc</p>
                                </div>
                                <div className="job__box__content--jd">
                                    {renderHTML(data.nature)}
                                </div>
                            </div>
                            <div>
                                <div className="job__box__title--jd">
                                    <p>Yêu cầu bằng cấp(tối thiểu)</p>
                                </div>
                                <div className="job__box__content--jd">
                                    {renderHTML(data.request)}
                                </div>
                            </div>
                            <div>
                                <div className="job__box__title--jd">
                                    <p>Yêu cầu kinh nghiệm</p>
                                </div>
                                <div className="job__box__content--jd">
                                    {renderHTML(data.exprience)}
                                </div>
                            </div>
                            <div>
                                <div className="job__box__title--jd">
                                    <p>Vị trí công ty</p>
                                </div>
                                <div className="job__box__content--jd">
                                    <div id="map-container-google-1" className="z-depth-1-half map-container" style={{ width: "100%" }}>
                                        {renderHTML(data.addressGoogle)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="deadline__box">
                            <div className="deadline">
                                <div className="deadline__icon">
                                    <i className="far fa-clock"></i>
                                </div>
                                <div>
                                    <div className="deadline__title">Hạn chót</div>
                                    <div className="deadline__time">{formatDateWork(data.dealtime)}</div>
                                </div>
                            </div>
                            <div className="deadline__icon--bot">
                                <i className="far fa-clock"></i>
                            </div>
                        </div>
                        <div className="save__box" onClick={notSave ? onSaveWork : onNotSaveWork}>
                            <div className="save__box__title" >
                                {notSave ? "Lưu công việc" : "Huỷ lưu công việc"}
                            </div>
                        </div>
                        <div className="advertisement">
                            <img src={qc} alt="" />
                        </div>
                        <div className="box__keyTag">
                            <KeyTag />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
