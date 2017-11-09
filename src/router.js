/**
 * 作者：吴盛
 * 创建日期：2017-11-9.
 * 文件说明：全局路由配置
 */


import React from 'react';
import {  Switch, Route, Redirect, routerRedux,Router,IndexRoute } from 'dva/router';
import IndexPage from './routes/IndexPage';
//import PageList from './routes/pagelist';
import Header from './components/header';
import Player from './components/page/player';
import MusicList from './components/page/musiclist';

function RouterConfig({ history }) {




  return (

     <Router history={history}>


                  <Switch>
                   <Route path="/" exact component={IndexPage} >
                        <IndexRoute component={Player}></IndexRoute>
                        <Route path="/" exact component={MusicList} ></Route>
                   </Route>
                  {/*
                   <Route path="/list" exact component={PageList}></Route>*/}


                 </Switch>

     </Router>



  );
}

export default RouterConfig;
