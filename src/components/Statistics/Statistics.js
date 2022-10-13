import React from 'react';
import { LineChart, Line, XAxis, YAxis,CartesianGrid, Tooltip} from 'recharts';
import './Statistics.css';

const Statistics = () => {
    // const data = ('https://openapi.programming-hero.com/api/quiz');
    const data = 
    
    [{"id":1,"name":"React","logo":"https://live.staticflickr.com/65535/52413593240_e00326e727_o.png","total":8},{"id":2,"name":"JavaScript","logo":"https://live.staticflickr.com/65535/52412638962_12e932256a_o.png","total":9},{"id":4,"name":"CSS","logo":"https://live.staticflickr.com/65535/52413665713_5977a693cb_o.png","total":8},{"id":5,"name":"Git","logo":"https://live.staticflickr.com/65535/52412639027_5692c15b3f_o.png","total":11}]


    return (
        <div className="container">
            <div className='chart1'>
            <LineChart className='chart' width={900} height={810} data={data}>
                <Line type="monotone" dataKey="total" stroke="#8884d8"/>
                <XAxis dataKey="name"/>
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis />
                <Tooltip/>
            </LineChart>
            </div>
        </div>
    );
};

export default Statistics;