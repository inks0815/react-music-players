import React from 'react';

import Header from '../components/header';
import Player from '../components/page/player';
import {MUSIC_LIST} from '../config/musiclist'


let IndexPage=React.createClass({
  getInitialState(){
     return{
          currentMusicItem:MUSIC_LIST[0]
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
          <Header></Header>
          <Player currentMusicItem={this.state.currentMusicItem}></Player>

        </div>
      );
    }
}) ;

export default IndexPage;
