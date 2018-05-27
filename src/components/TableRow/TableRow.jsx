import React, { Component } from 'react';
import  './TableRow.css';


class TableRow extends Component {
    render() {
        return (
            <tbody>
                {
                    this.props.data.map(dataItem => 
                        <tr key={dataItem.id}>
                           <td className="tRow">{dataItem.name}</td>
                           <td className="tRow">{dataItem.age}</td>
                           <td className="tRow">{dataItem.averageGrade}</td>
                        </tr>
                    )
                }
            </tbody>
        );
    }
}

export default TableRow;