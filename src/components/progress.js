import React from 'react';


let Progress = React.createClass({
   render(){
     return(
       <div >
         {this.props.progress} s
       </div>
     );
   }
});
export default Progress;
