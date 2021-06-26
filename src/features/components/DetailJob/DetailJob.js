import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import workApi from '../../../api/workApi'
import Footer from '../Home/Footer/Footer'
import Search from '../Jobs/Search/Search'
import Menu from '../MenuNotHome/MenuNotHome'
import BannerJob from './BannerJob/BannerJob'
import Breadcrumb from './Breadcrumb/Breadcrumb'
import Jd from './Jd/Jd'

export default function DetailJob() {
    const { id } = useParams();
    const getApi = async () => {
        return await workApi.getOne(id).then(data => {
            return data;
        })
    }
    const [data, setData] = useState();
    useEffect(() => {
        Promise.all([getApi()])
            .then(function (data) {
                setData(data[0])
            });
    }, [])
    // console.log(data);
    return (
        <div>
            <Menu />
            <Breadcrumb name={data ? data.name : ""} />
            <Search />
            <BannerJob name={data ? data.Company.name : ""} avatar={data ? data.Company.avatar : ""} banner={data ? data.Company.banner : ""} />
            {data ? <Jd data={data} id={id} /> : ""}
            <Footer />
        </div>
    )
}
