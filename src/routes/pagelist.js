/**
 * 作者：吴盛
 * 创建日期：2017-11-9.
 * 文件说明：歌单列表route页
 */


import React from 'react';

import Header from '../components/header';
import Player from '../components/page/player';
import MusicList from '../components/page/musiclist';
import {MUSIC_LIST} from '../config/musiclist';
import Pubsub from 'pubsub-js'

let PageList=React.createClass({
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

 componentDidMount(){
   $('#player').jPlayer({
        //ready: function(){
          //$(this).jPlayer('setMedia',{mp3:'http://up.mcyt.net/md5/53/MTAyODU5NA_Qq4329912.mp3'}).jPlayer('play');
      //  },
        supplied:'mp3',
        wmode:'window'
   });
   this.playMusic(this.state.currentMusicItem);

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
 },

 componentWillUnMount(){
      Pubsub.unsubscribe('DELETE_MUSIC');
      Pubsub.unsubscribe('PLAY_MUSIC');
 },


  render(){

      return (

        <div>
          <MusicList currentMusicItem={this.state.currentMusicItem} musicList={this.state.musicList}></MusicList>

        {/*  {React.cloneElement(this.props.children,this.state)}
               <Player currentMusicItem={this.state.currentMusicItem}></Player>
          */}

        </div>
      );
    }
}) ;

export default PageList;
