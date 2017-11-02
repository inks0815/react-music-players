import React from 'react';
import styles from './header.less'

let Header = React.createClass({
   render(){
     return(
       <div className={styles.componentheader}>
         <div className={styles.headerimg}><img height="80" width="80" src={require('../imgs/music.png')}/></div>
         <h1>React Music Player</h1>
       </div>
     );
   }
});
export default Header;
