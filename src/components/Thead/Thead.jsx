import React, { Component } from 'react';
import { header } from '../../Data/Data';
import './Thead.css';


class Thead extends Component {
   
    render() {
        return (
            <tr> 
                {
                    header.map((dataItem,averageCellIndex) =>
                        <th onClick={()=> this.props.click(dataItem,averageCellIndex)} key = {dataItem} className="tCol">{dataItem }</th>
                    ) 
                }
            </tr>
        );
    }
}

export default Thead;