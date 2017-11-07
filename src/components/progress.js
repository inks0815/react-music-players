import React from 'react';
import { Slider, Switch ,Progress, Row, Col } from 'antd';

let duration = null ;
class ProgressN extends React.Component{

  state = {
    inputValue: 0,
  }
 componentWillReceiveProps(){
   this.setState({
     inputValue: this.props.progress,
   });
   //console.log(this.props.progress);
 }

  onChange = (value) => {
   this.setState({
     inputValue: value,
   });
   this.props.onProgressChange(value);
}
   render(){

      //console.log(this.state.inputValue);
     return(
       <div >
         <Row>
           <Col span={22}>
              <Slider defaultValue={0}  onChange={this.onChange} value={this.state.inputValue}/>
            </Col>
            <Col span={1}>

            </Col>
          
          </Row>
         {/*<Progress percent={this.props.progress} status="active" style={{cursor:'pointer'}}/>*/}
       </div>
     );
   }
}
export default ProgressN;
