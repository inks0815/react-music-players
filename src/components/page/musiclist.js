/**
 * 作者：吴盛
 * 创建日期：2017-11-3.
 * 文件说明：歌单列表
 */

import React from 'react'
import MusicListItem from '../../components/musiclistitem'

let MusicList=React.createClass({

  render(){
    let listEle =null;
    listEle = this.props.musicList.map((item)=>{
      return <MusicListItem focus={item===this.props.currentMusicItem} key={item.id} musicItem={item}></MusicListItem>
    });
    return (
      <ul>
        {listEle}
      </ul>
    );
  }
});

export default MusicList;
