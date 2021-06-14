import React, { useEffect, useState } from 'react'
import { Layout, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import News from '../News/News';
import "../../scss/Admin/Nav.scss"
import Tag from '../Tag/Tag';
import AddTag from '../Tag/AddTag';
import AddNew from '../News/AddNew';
import Revenue from '../Revenue/Revenue';
export default function Nav() {
    const match = useRouteMatch();
    // console.log(match);
    const { Header, Sider, Content } = Layout;
    const [state, setState] = useState({
        collapsed: true,
        visible: true
    })
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const toggle = () => {
        setState({
            collapsed: !state.collapsed,
        });
    };

    return (
        <div id="nav">
            <Layout>
                <Sider trigger={null} collapsible collapsed={state.collapsed}>
                    <div className="logo" >
                        <Link to="/">
                            <p className="text-center w-100">
                                {state.collapsed === true ? <i className="fas fa-user-shield"></i> : <strong>Administration</strong>}
                            </p>
                        </Link>
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={state.collapsed === true ? <span className="far fa-newspaper" ></span> : <span className="far fa-newspaper mr-2"></span>}>
                            <Link to="/admin">Doanh thu</Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={state.collapsed === true ? <span className="far fa-newspaper" ></span> : <span className="far fa-newspaper mr-2"></span>}>
                            <Link to={`${match.url}/new`}>Tin tức</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={state.collapsed === true ? <span className="fas fa-tags" ></span> : <span className="fas fa-tags mr-2"></span>}>
                            <Link to={`${match.url}/tag`}>Tag</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>

                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {/* <Headers /> */}
                        {React.createElement(state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: toggle,
                        })}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <Switch>
                            <Route exact path={match.path}>
                                <Revenue />
                            </Route>
                            <Route exact path={`${match.path}/new`}>
                                <News url={match.url} />
                            </Route>
                            <Route exact path={`${match.path}/tag`}  >
                                <Tag url={match.url} />
                            </Route>
                            <Route path={`${match.path}/tag/addTag`}  >
                                <AddTag url={match.url} />
                            </Route>
                            <Route path={`${match.path}/tag/editTag/:id`}  >
                                <AddTag url={match.url} />
                            </Route>
                            <Route path={`${match.path}/new/editNew/:id`}  >
                                <AddNew url={match.url} />
                            </Route>
                            <Route path={`${match.path}/new/addNew`}  >
                                <AddNew url={match.url} />
                            </Route>
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        </div >
    )
}