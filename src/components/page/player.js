import React from 'react'
import ProgressN from '../progress'
import { Row, Col, Slider,Icon } from 'antd';
import styles from './player.less'

let duration = null;
class Player extends React.Component{



  state = {
    progress: 0,
  }
  componentDidMount(){

     $('#player').bind($.jPlayer.event.timeupdate,(e)=>{
       duration=e.jPlayer.status.duration;
       this.setState({
         progress:Math.round(e.jPlayer.status.currentPercentAbsolute)
       });
     });
  }

  componentWillUnMount(){
    $('#player').unbind($.jPlayer.event.timeupdate)
  }

  progressChangeHandler(progress){
    //console.log("-----------"+duration*progress);
    $('#player').jPlayer('play',duration*progress/100);
    //console.log("-----------"+progress);
   // this.setState({
      //progress:progress
   //});
  }
   render(){
       return (
         <div className={styles.playerall}>

           <Row >
             <Col span={4}></Col>
             <Col span={6}  offset={4}>
                   <div className={styles.playertxt1}>我的私人音乐坊></div>
                   <div className={styles.playertitle}>{this.props.currentMusicItem.title}</div>
                   <div className={styles.playerartist}>{this.props.currentMusicItem.artist}</div>
                   <div className={styles.playertime}>
                     <Row>
                       <Col span={4}>-2：00 </Col>
                       <Col span={2}><Icon type="sound" />  </Col>
                       <Col span={4}><ProgressN progress={this.state.progress} onProgressChange={this.progressChangeHandler} ></ProgressN>
                       </Col>
                     </Row>



                   </div>
                   <div className={styles.playerprogress}><ProgressN progress={this.state.progress} onProgressChange={this.progressChangeHandler}></ProgressN></div>
                   <div className={styles.playerbutton}>
                     <Icon type="left" style={{ fontSize: 28 }}/>&nbsp;&nbsp;
                     <Icon type="caret-right" style={{ fontSize: 28 }}/>&nbsp;&nbsp;
                     <Icon type="right" style={{ fontSize: 28}}/>
                   </div>
             </Col>

             <Col span={4}>
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
  }

export default Player;
