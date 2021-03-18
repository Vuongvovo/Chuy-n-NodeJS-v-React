import React from 'react'
import "../../../scss/ListNews/News.scss"
import anh from "../../../images/cup-of-coffee-1280537.jpg"
import anh1 from "../../../images/notebook-1971495.jpg"
import { Link } from 'react-router-dom'
import { Pagination } from 'antd'
export default function News() {
    return (
        <div className="News">
            <div className="heading">
                <div className="heading__title">
                    <h3>Tin tức</h3>
                </div>
                <div className="heading__hr"></div>
            </div>
            <div className="news__content">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="new__box">
                                <div className="new__box__img">
                                    <img src={anh} alt="" />
                                </div>
                                <div className="new__box__content">
                                    <Link to="/news/detailNew/1">
                                        <div className="new__box__content__title">
                                            Những công việc mà bạn không nên làm khi bắt đầu ra trường
                                        </div>
                                    </Link>
                                    <div className="new__box__content__date">
                                        October 7, 2019.
                                    </div>
                                    <div className="new__box__content__sumary">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, minus? Totam fuga eum omnis dolores! Doloremque error eveniet nam corporis in labore, magnam velit natus, commodi eius at itaque aspernatur.
                                        Quas aliquid dolores nisi, cumque quo repellendus sed itaque sapiente voluptas saepe dolorum esse repudiandae molestiae deserunt alias laudantium praesentium! Necessitatibus perferendis id hic dignissimos porro totam provident dolorem amet.
                                        Placeat, error ratione earum quidem obcaecati esse dignissimos voluptates soluta odit. Facere dolorum, ex tempore deleniti eius ipsum necessitatibus dolores nulla numquam totam, quasi laborum ea repellendus harum assumenda incidunt.
                                        Suscipit similique eius deserunt esse doloribus aliquid fuga, doloremque deleniti cum saepe tempore perspiciatis sapiente rerum explicabo dolor necessitatibus. Unde accusamus voluptatem labore officia adipisci architecto ullam, sed consectetur exercitationem!
                                        Debitis voluptates ad non aspernatur earum officia quidem cum nobis excepturi qui porro explicabo error impedit, quae quas voluptatum vitae mollitia labore quis atque harum? Obcaecati unde facilis corrupti in.
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="new__box">
                                <div className="new__box__img">
                                    <img src={anh1} alt="" />
                                </div>
                                <div className="new__box__content">
                                    <Link to="/news/detailNew/1">
                                        <div className="new__box__content__title">
                                            Những công việc mà bạn không nên làm khi bắt đầu ra trường
                                        </div>
                                    </Link>
                                    <div className="new__box__content__date">
                                        October 7, 2019.
                                    </div>
                                    <div className="new__box__content__sumary">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, minus? Totam fuga eum omnis dolores! Doloremque error eveniet nam corporis in labore, magnam velit natus, commodi eius at itaque aspernatur.
                                        Quas aliquid dolores nisi, cumque quo repellendus sed itaque sapiente voluptas saepe dolorum esse repudiandae molestiae deserunt alias laudantium praesentium! Necessitatibus perferendis id hic dignissimos porro totam provident dolorem amet.
                                        Placeat, error ratione earum quidem obcaecati esse dignissimos voluptates soluta odit. Facere dolorum, ex tempore deleniti eius ipsum necessitatibus dolores nulla numquam totam, quasi laborum ea repellendus harum assumenda incidunt.
                                        Suscipit similique eius deserunt esse doloribus aliquid fuga, doloremque deleniti cum saepe tempore perspiciatis sapiente rerum explicabo dolor necessitatibus. Unde accusamus voluptatem labore officia adipisci architecto ullam, sed consectetur exercitationem!
                                        Debitis voluptates ad non aspernatur earum officia quidem cum nobis excepturi qui porro explicabo error impedit, quae quas voluptatum vitae mollitia labore quis atque harum? Obcaecati unde facilis corrupti in.
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="new__box">
                                <div className="new__box__img">
                                    <img src={anh} alt="" />
                                </div>
                                <div className="new__box__content">
                                    <Link to="/news/detailNew/1">
                                        <div className="new__box__content__title">
                                            Những công việc mà bạn không nên làm khi bắt đầu ra trường
                                        </div>
                                    </Link>
                                    <div className="new__box__content__date">
                                        October 7, 2019.
                                    </div>
                                    <div className="new__box__content__sumary">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, minus? Totam fuga eum omnis dolores! Doloremque error eveniet nam corporis in labore, magnam velit natus, commodi eius at itaque aspernatur.
                                        Quas aliquid dolores nisi, cumque quo repellendus sed itaque sapiente voluptas saepe dolorum esse repudiandae molestiae deserunt alias laudantium praesentium! Necessitatibus perferendis id hic dignissimos porro totam provident dolorem amet.
                                        Placeat, error ratione earum quidem obcaecati esse dignissimos voluptates soluta odit. Facere dolorum, ex tempore deleniti eius ipsum necessitatibus dolores nulla numquam totam, quasi laborum ea repellendus harum assumenda incidunt.
                                        Suscipit similique eius deserunt esse doloribus aliquid fuga, doloremque deleniti cum saepe tempore perspiciatis sapiente rerum explicabo dolor necessitatibus. Unde accusamus voluptatem labore officia adipisci architecto ullam, sed consectetur exercitationem!
                                        Debitis voluptates ad non aspernatur earum officia quidem cum nobis excepturi qui porro explicabo error impedit, quae quas voluptatum vitae mollitia labore quis atque harum? Obcaecati unde facilis corrupti in.
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="new__box">
                                <div className="new__box__img">
                                    <img src={anh} alt="" />
                                </div>
                                <div className="new__box__content">
                                    <Link to="/news/detailNew/1">
                                        <div className="new__box__content__title">
                                            Những công việc mà bạn không nên làm khi bắt đầu ra trường
                                        </div>
                                    </Link>
                                    <div className="new__box__content__date">
                                        October 7, 2019.
                                    </div>
                                    <div className="new__box__content__sumary">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, minus? Totam fuga eum omnis dolores! Doloremque error eveniet nam corporis in labore, magnam velit natus, commodi eius at itaque aspernatur.
                                        Quas aliquid dolores nisi, cumque quo repellendus sed itaque sapiente voluptas saepe dolorum esse repudiandae molestiae deserunt alias laudantium praesentium! Necessitatibus perferendis id hic dignissimos porro totam provident dolorem amet.
                                        Placeat, error ratione earum quidem obcaecati esse dignissimos voluptates soluta odit. Facere dolorum, ex tempore deleniti eius ipsum necessitatibus dolores nulla numquam totam, quasi laborum ea repellendus harum assumenda incidunt.
                                        Suscipit similique eius deserunt esse doloribus aliquid fuga, doloremque deleniti cum saepe tempore perspiciatis sapiente rerum explicabo dolor necessitatibus. Unde accusamus voluptatem labore officia adipisci architecto ullam, sed consectetur exercitationem!
                                        Debitis voluptates ad non aspernatur earum officia quidem cum nobis excepturi qui porro explicabo error impedit, quae quas voluptatum vitae mollitia labore quis atque harum? Obcaecati unde facilis corrupti in.
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="new__box">
                                <div className="new__box__img">
                                    <img src={anh} alt="" />
                                </div>
                                <div className="new__box__content">
                                    <Link to="/news/detailNew/1">
                                        <div className="new__box__content__title">
                                            Những công việc mà bạn không nên làm khi bắt đầu ra trường
                                        </div>
                                    </Link>
                                    <div className="new__box__content__date">
                                        October 7, 2019.
                                    </div>
                                    <div className="new__box__content__sumary">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, minus? Totam fuga eum omnis dolores! Doloremque error eveniet nam corporis in labore, magnam velit natus, commodi eius at itaque aspernatur.
                                        Quas aliquid dolores nisi, cumque quo repellendus sed itaque sapiente voluptas saepe dolorum esse repudiandae molestiae deserunt alias laudantium praesentium! Necessitatibus perferendis id hic dignissimos porro totam provident dolorem amet.
                                        Placeat, error ratione earum quidem obcaecati esse dignissimos voluptates soluta odit. Facere dolorum, ex tempore deleniti eius ipsum necessitatibus dolores nulla numquam totam, quasi laborum ea repellendus harum assumenda incidunt.
                                        Suscipit similique eius deserunt esse doloribus aliquid fuga, doloremque deleniti cum saepe tempore perspiciatis sapiente rerum explicabo dolor necessitatibus. Unde accusamus voluptatem labore officia adipisci architecto ullam, sed consectetur exercitationem!
                                        Debitis voluptates ad non aspernatur earum officia quidem cum nobis excepturi qui porro explicabo error impedit, quae quas voluptatum vitae mollitia labore quis atque harum? Obcaecati unde facilis corrupti in.
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="new__box">
                                <div className="new__box__img">
                                    <img src={anh} alt="" />
                                </div>
                                <div className="new__box__content">
                                    <Link to="/news/detailNew/1">
                                        <div className="new__box__content__title">
                                            Những công việc mà bạn không nên làm khi bắt đầu ra trường
                                        </div>
                                    </Link>
                                    <div className="new__box__content__date">
                                        October 7, 2019.
                                    </div>
                                    <div className="new__box__content__sumary">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, minus? Totam fuga eum omnis dolores! Doloremque error eveniet nam corporis in labore, magnam velit natus, commodi eius at itaque aspernatur.
                                        Quas aliquid dolores nisi, cumque quo repellendus sed itaque sapiente voluptas saepe dolorum esse repudiandae molestiae deserunt alias laudantium praesentium! Necessitatibus perferendis id hic dignissimos porro totam provident dolorem amet.
                                        Placeat, error ratione earum quidem obcaecati esse dignissimos voluptates soluta odit. Facere dolorum, ex tempore deleniti eius ipsum necessitatibus dolores nulla numquam totam, quasi laborum ea repellendus harum assumenda incidunt.
                                        Suscipit similique eius deserunt esse doloribus aliquid fuga, doloremque deleniti cum saepe tempore perspiciatis sapiente rerum explicabo dolor necessitatibus. Unde accusamus voluptatem labore officia adipisci architecto ullam, sed consectetur exercitationem!
                                        Debitis voluptates ad non aspernatur earum officia quidem cum nobis excepturi qui porro explicabo error impedit, quae quas voluptatum vitae mollitia labore quis atque harum? Obcaecati unde facilis corrupti in.
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="new__box">
                                <div className="new__box__img">
                                    <img src={anh} alt="" />
                                </div>
                                <div className="new__box__content">
                                    <Link to="/news/detailNew/1">
                                        <div className="new__box__content__title">
                                            Những công việc mà bạn không nên làm khi bắt đầu ra trường
                                        </div>
                                    </Link>
                                    <div className="new__box__content__date">
                                        October 7, 2019.
                                    </div>
                                    <div className="new__box__content__sumary">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, minus? Totam fuga eum omnis dolores! Doloremque error eveniet nam corporis in labore, magnam velit natus, commodi eius at itaque aspernatur.
                                        Quas aliquid dolores nisi, cumque quo repellendus sed itaque sapiente voluptas saepe dolorum esse repudiandae molestiae deserunt alias laudantium praesentium! Necessitatibus perferendis id hic dignissimos porro totam provident dolorem amet.
                                        Placeat, error ratione earum quidem obcaecati esse dignissimos voluptates soluta odit. Facere dolorum, ex tempore deleniti eius ipsum necessitatibus dolores nulla numquam totam, quasi laborum ea repellendus harum assumenda incidunt.
                                        Suscipit similique eius deserunt esse doloribus aliquid fuga, doloremque deleniti cum saepe tempore perspiciatis sapiente rerum explicabo dolor necessitatibus. Unde accusamus voluptatem labore officia adipisci architecto ullam, sed consectetur exercitationem!
                                        Debitis voluptates ad non aspernatur earum officia quidem cum nobis excepturi qui porro explicabo error impedit, quae quas voluptatum vitae mollitia labore quis atque harum? Obcaecati unde facilis corrupti in.
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="new__box">
                                <div className="new__box__img">
                                    <img src={anh} alt="" />
                                </div>
                                <div className="new__box__content">
                                    <Link to="/news/detailNew/1">
                                        <div className="new__box__content__title">
                                            Những công việc mà bạn không nên làm khi bắt đầu ra trường
                                        </div>
                                    </Link>
                                    <div className="new__box__content__date">
                                        October 7, 2019.
                                    </div>
                                    <div className="new__box__content__sumary">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, minus? Totam fuga eum omnis dolores! Doloremque error eveniet nam corporis in labore, magnam velit natus, commodi eius at itaque aspernatur.
                                        Quas aliquid dolores nisi, cumque quo repellendus sed itaque sapiente voluptas saepe dolorum esse repudiandae molestiae deserunt alias laudantium praesentium! Necessitatibus perferendis id hic dignissimos porro totam provident dolorem amet.
                                        Placeat, error ratione earum quidem obcaecati esse dignissimos voluptates soluta odit. Facere dolorum, ex tempore deleniti eius ipsum necessitatibus dolores nulla numquam totam, quasi laborum ea repellendus harum assumenda incidunt.
                                        Suscipit similique eius deserunt esse doloribus aliquid fuga, doloremque deleniti cum saepe tempore perspiciatis sapiente rerum explicabo dolor necessitatibus. Unde accusamus voluptatem labore officia adipisci architecto ullam, sed consectetur exercitationem!
                                        Debitis voluptates ad non aspernatur earum officia quidem cum nobis excepturi qui porro explicabo error impedit, quae quas voluptatum vitae mollitia labore quis atque harum? Obcaecati unde facilis corrupti in.
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="new__box">
                                <div className="new__box__img">
                                    <img src={anh} alt="" />
                                </div>
                                <div className="new__box__content">
                                    <Link to="/news/detailNew/1">
                                        <div className="new__box__content__title">
                                            Những công việc mà bạn không nên làm khi bắt đầu ra trường
                                        </div>
                                    </Link>
                                    <div className="new__box__content__date">
                                        October 7, 2019.
                                    </div>
                                    <div className="new__box__content__sumary">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, minus? Totam fuga eum omnis dolores! Doloremque error eveniet nam corporis in labore, magnam velit natus, commodi eius at itaque aspernatur.
                                        Quas aliquid dolores nisi, cumque quo repellendus sed itaque sapiente voluptas saepe dolorum esse repudiandae molestiae deserunt alias laudantium praesentium! Necessitatibus perferendis id hic dignissimos porro totam provident dolorem amet.
                                        Placeat, error ratione earum quidem obcaecati esse dignissimos voluptates soluta odit. Facere dolorum, ex tempore deleniti eius ipsum necessitatibus dolores nulla numquam totam, quasi laborum ea repellendus harum assumenda incidunt.
                                        Suscipit similique eius deserunt esse doloribus aliquid fuga, doloremque deleniti cum saepe tempore perspiciatis sapiente rerum explicabo dolor necessitatibus. Unde accusamus voluptatem labore officia adipisci architecto ullam, sed consectetur exercitationem!
                                        Debitis voluptates ad non aspernatur earum officia quidem cum nobis excepturi qui porro explicabo error impedit, quae quas voluptatum vitae mollitia labore quis atque harum? Obcaecati unde facilis corrupti in.
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pagination">
                        <Pagination defaultCurrent={1} total={100} />
                    </div>
                </div>
            </div>
        </div>
    )
}
