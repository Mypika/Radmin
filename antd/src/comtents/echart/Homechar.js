import React, { Component } from 'react';

import echarts from 'echarts'
class HomeEchar extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    componentDidMount(){
        let echart = echarts.init(this.canvas)
    }

    render() { 
        return (
            <div ref={e=>this.canvas=e}>
                132
            </div>
        );
    }
}
 
export default HomeEchar;