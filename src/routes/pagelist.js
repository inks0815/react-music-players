import React from 'react';

import Header from '../components/header';
import Player from '../components/page/player';
import MusicList from '../components/page/musiclist';
import {MUSIC_LIST} from '../config/musiclist'


let PageList=React.createClass({
  getInitialState(){
     return{
          musicList1:MUSIC_LIST,
          currentMusicItem1:MUSIC_LIST[0]
     }
  },
 componentDidMount(){
   $('#player').jPlayer({
        ready: function(){
          $(this).jPlayer('setMedia',{mp3:'http://up.mcyt.net/md5/53/MTAyODU5NA_Qq4329912.mp3'}).jPlayer('play');
        },
        supplied:'mp3',
        wmode:'window'
   });

 },

 componentWillUnMount(){

 },


  render(){

      return (

        <div>
          <MusicList currentMusicItem={this.state.currentMusicItem1} musicList={this.state.musicList1}></MusicList>

        {/*  {React.cloneElement(this.props.children,this.state)}
               <Player currentMusicItem={this.state.currentMusicItem}></Player>
          */}

        </div>
      );
    }
}) ;

export default PageList;
