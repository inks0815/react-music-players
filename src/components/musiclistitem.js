import React from 'react'
import { Row, Col,Icon } from 'antd';
import styles from './musiclistitem.less';
import Pubsub from 'pubsub-js'

let MusicListItem=React.createClass({
  playMusic(musicItem){
    Pubsub.publish('PLAY_MUSIC',musicItem);
  },

  deleteMusic(musicItem,e){
    e.stopPropagation();
    Pubsub.publish('DELETE_MUSIC',musicItem);
  },

  render(){
    let musicItem = this.props.musicItem;
    return(
      <div>

             <li onClick={this.playMusic.bind(this,musicItem)} className={`${this.props.focus?styles.liclassselected:styles.liclass}`}>
               <Row>
                 <Col span={20} offset={1}>
                   <p>{musicItem.title}-{musicItem.artist} </p>
                 </Col>
                 <Col span={2} offset={1}>
                   <p onClick={this.deleteMusic.bind(this,musicItem)} className={styles.liicon}><Icon type="close-circle-o" /></p>
                 </Col>

             </Row>
             </li>


      </div>

    )
  }
});

export default MusicListItem;
