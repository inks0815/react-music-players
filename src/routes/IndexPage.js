import React from 'react';

import Header from '../components/header';
import Player from '../components/page/player';
import MusicList from '../components/page/musiclist';
import {MUSIC_LIST} from '../config/musiclist'
import Pubsub from 'pubsub-js';
import {  Switch, Route, Redirect, routerRedux,Router,IndexRoute,hashHistory } from 'dva/router';

let IndexPage=React.createClass({
  getInitialState(){
     return{
          musicList:MUSIC_LIST,
          currentMusicItem:MUSIC_LIST[0]
     }
  },

  playMusic(musicItem){
    $('#player').jPlayer('setMedia',{
       mp3:musicItem.file
    }).jPlayer('play');
    this.setState({currentMusicItem:musicItem});
  },

   playNext(type="next"){
     let index = this.findMusicIndex(this.state.currentMusicItem);
     let newIndex = null;
     let musicListLength=this.state.musicList.length;
     if(type==="next"){
       newIndex=(index+1)%musicListLength;
     }else {
       newIndex=(index-1+musicListLength)%musicListLength;
     }
     this.playMusic(this.state.musicList[newIndex]);
   },

  findMusicIndex(musicItem){
    return this.state.musicList.indexOf(musicItem);
  },

 componentDidMount(){
   $('#player').jPlayer({
      //  ready: function(){
        //  $(this).jPlayer('setMedia',{mp3:'http://up.mcyt.net/md5/53/MTAyODU5NA_Qq4329912.mp3'}).jPlayer('play');
      //  },
        supplied:'mp3',
        wmode:'window'
   });
   this.playMusic(this.state.currentMusicItem);
    $('#player').bind($.jPlayer.event.ended,(e)=>{
      this.playNext();
    });
   Pubsub.subscribe('DELETE_MUSIC',(msg,musicItem)=>{
         this.setState({
           musicList:this.state.musicList.filter(item=>{
             return item !==musicItem;
           })
         });
   });

   Pubsub.subscribe('PLAY_MUSIC',(msg,musicItem)=>{
        this.playMusic(musicItem);
   });

   Pubsub.subscribe('PLAY_PREV',(msg,musicItem)=>{
        this.playNext("PREV");
   });

   Pubsub.subscribe('PLAY_NEXT',(msg,musicItem)=>{
      this.playNext();
   });

 },


 componentWillUnMount(){
   Pubsub.unsubscribe('DELETE_MUSIC');
   Pubsub.unsubscribe('PLAY_MUSIC');
   Pubsub.unsubscribe('PLAY_PREV');
   Pubsub.unsubscribe('PLAY_NEXT');
     $('#player').unbind($.jPlayer.event.ended)
 },


  render(){
      console.log(this.props.children);
      return (

        <div>
          <Header></Header>
          <Player currentMusicItem={this.state.currentMusicItem}></Player>
          <MusicList currentMusicItem={this.state.currentMusicItem} musicList={this.state.musicList}></MusicList>
          {/*{React.cloneElement(this.props.children,this.state)}

          */}

        </div>
      );
    }
}) ;


// let Root = React.createClass({
//     render(){
//
//       <Router history={hashHistory}>
//
//
//                    <Switch>
//                     <Route path="/" exact component={IndexPage} >
//                          <IndexRoute component={Player}></IndexRoute>
//                          <Route path="/" exact component={MusicList} ></Route>
//                     </Route>
//                    {/*
//                     <Route path="/list" exact component={PageList}></Route>*/}
//
//
//                   </Switch>
//
//       </Router>
//     }
//
// });

export default IndexPage;
