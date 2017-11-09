import React from 'react'
import { Row, Col,Icon } from 'antd';
import styles from './musiclistitem.less'

let MusicListItem=React.createClass({
  render(){
    let musicItem = this.props.musicItem;
    return(
      <div>

             <li className={`${this.props.focus?styles.liclassselected:styles.liclass}`}>
               <Row>
                 <Col span={20} offset={1}>
                   <p>{musicItem.title}-{musicItem.artist} </p>
                 </Col>
                 <Col span={2} offset={1}>
                   <p className={styles.liicon}><Icon type="close-circle-o" /></p>
                 </Col>

             </Row>
             </li>


      </div>

    )
  }
});

export default MusicListItem;
