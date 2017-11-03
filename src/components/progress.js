import React from 'react';
import { Slider, Switch ,Progress, Row, Col } from 'antd';


class ProgressN extends React.Component{



   render(){

      console.log(this.props.progress);
     return(
       <div >
         <Row>
           <Col span={22}>
              <Slider defaultValue={0} value={this.props.progress} />
            </Col>
            <Col span={1}>
                
            </Col>
            <Col span={1}>
                {this.props.progress}%
            </Col>
          </Row>
         <Progress percent={this.props.progress} status="active" style={{cursor:'pointer'}}/>
       </div>
     );
   }
}
export default ProgressN;
