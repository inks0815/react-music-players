import React from 'react';

import Header from '../components/header';
import ProgressN from '../components/progress';

let IndexPage=React.createClass({
  getInitialState(){
     return{
       progress:0
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
    $('#player').bind($.jPlayer.event.timeupdate,(e)=>{
      this.setState({
        progress:Math.round(e.jPlayer.status.currentPercentAbsolute)
      });
    });
 },

 componentWillUnMount(){
   $('#jPlayer').unbind($.jPlayer.event.timeupdate)
 },
  render(){
      return (
        <div>
          <Header></Header>
          <ProgressN progress={this.state.progress}></ProgressN>

        </div>
      );
    }
}) ;

export default IndexPage;
