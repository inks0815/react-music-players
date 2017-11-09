/**
 * 作者：吴盛
 * 创建日期：2017-11-9.
 * 文件说明：全局路由配置
 */


import React from 'react';
import {  Switch, Route, Redirect, routerRedux,Router } from 'dva/router';
import IndexPage from './routes/IndexPage';
import PageList from './routes/pagelist';
import Header from './components/header';

function RouterConfig({ history }) {




  return (

     <Router history={history}>
       <div>
         <Header></Header>
                  <Switch>
                   <Route path="/" exact component={IndexPage} ></Route>

                   <Route path="/list" exact component={PageList}></Route>


                 </Switch>
        </div>
     </Router>



  );
}

export default RouterConfig;
