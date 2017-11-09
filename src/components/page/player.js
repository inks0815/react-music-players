/**
 * 作者：吴盛
 * 创建日期：2017-11-3.
 * 文件说明：播放组件
 */

import React from 'react'
import ProgressN from '../progress'
import { Row, Col, Slider,Icon } from 'antd';
import styles from './player.less';
import {  Link } from 'dva/router';
import Pubsub from 'pubsub-js'

let duration = null;
let Player=React.createClass({

  getInitialState(){
     return{
       progress: 0,
       volume:0,
       isPlay:true,
       leftTime:''
     }
  },

  componentWillReceiveProps(){
    this.setState({
      //progress: Math.round(e.jPlayer.status.currentPercentAbsolute),
      progress:this.props.progress,
    });
    //console.log(this.props.progress);
 },
  componentDidMount(){

     $('#player').bind($.jPlayer.event.timeupdate,(e)=>{
       duration=e.jPlayer.status.duration;
       this.setState({
         volume:e.jPlayer.options.volume*100,
         progress:Math.round(e.jPlayer.status.currentPercentAbsolute),
         leftTime:this.formatTime(duration*(1-e.jPlayer.status.currentPercentAbsolute/100))
       });
       //console.log(this.state.volume);
     });
  },

  componentWillUnMount(){
    $('#player').unbind($.jPlayer.event.timeupdate)
  },

  progressChangeHandler(progress){
  //  console.log("-----------"+duration);
    $('#player').jPlayer('play',duration*progress/100);
    //console.log("-----------"+progress);
  //  this.setState({
    //  progress:progress
   //});
 },

  changeVolumeHandler(progress){
      $('#player').jPlayer('volume',progress/100);
      //console.log("-----------volume"+progress);
        this.setState({
          volume:progress
       });
  },

  play(){
    if(this.state.isPlay){
      $('#player').jPlayer('pause');
    } else {
        $('#player').jPlayer('play');
    }
    this.setState({
      isPlay:!this.state.isPlay
    })
  },

  playPrev(){
     Pubsub.publish('PLAY_PREV');
  },

  playNext(){
    Pubsub.publish('PLAY_NEXT');
  },
  formatTime(time){
    time = Math.floor(time);
    let miniutes = Math.floor(time/60);
    let seconds = Math.floor(time%60);
    seconds= (seconds<10)?`0${seconds}`:seconds;
    return `${miniutes}:${seconds}`;

  },

   render(){
       return (
         <div className={styles.playerall}>

           <Row >
             <Col span={4}></Col>
             <Col span={6}  offset={2}>
                   <div className={styles.playertxt1}><Link to="/list">我的私人音乐坊 &gt;</Link></div>
                   <div className={styles.playertitle}>{this.props.currentMusicItem.title}</div>
                   <div className={styles.playerartist}>{this.props.currentMusicItem.artist}</div>
                   <div className={styles.playertime}>
                     <Row>
                       <Col span={4}>-{this.state.leftTime} </Col>
                       <Col span={2}><Icon type="sound" />  </Col>
                       <Col span={4}>
                           <ProgressN progress={this.state.volume} onProgressChange={this.changeVolumeHandler}></ProgressN>
                       </Col>
                     </Row>



                   </div>
                   <div className={styles.playerprogress}><ProgressN progress={this.state.progress} onProgressChange={this.progressChangeHandler}></ProgressN></div>
                   <div className={styles.playerbutton}>
                     <Row>
                       <Col span={4}>
                         <Icon type="left" style={{ fontSize: 28 }} onClick={this.playPrev}/></Col>
                       <Col span={4}>
                         <Icon type={`${this.state.isPlay?'caret-right':'pause-circle'}`} style={{ fontSize: 28 }}  onClick={this.play}/></Col>
                       <Col span={4}>
                         <Icon type="right" style={{ fontSize: 28}} onClick={this.playNext}/></Col>
                       <Col span={8} offset={3}>
                         <Icon type="retweet"  style={{ fontSize: 30}}/></Col>
                     </Row>





                   </div>
             </Col>

             <Col span={4} offset={2}>
                <div>
                  <img src={this.props.currentMusicItem.cover} />
                </div>
             </Col>
             <Col span={4}></Col>
             <Col span={4}></Col>
            </Row>
           {/*<ProgressN progress={this.state.progress} onProgressChange={this.progressChangeHandler}></ProgressN>*/}

         </div>
       );
     }
  });

export default Player;
