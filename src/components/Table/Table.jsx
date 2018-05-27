import React, { Component } from 'react';
import TableRow from '../TableRow/TableRow';
import Thead from '../Thead/Thead';
import './Table.css';
import { Data } from "../../Data/Data";


class Table extends Component {
    
    constructor(props) {
        super(props);
        this.index = 0;
        this.defaultData = [...Data];
        this.state = {
            Data
          }
    }
    

    sortByClick= (item, averageCellIndex) => {
        const sortByClick = [...this.state.Data];

        if(averageCellIndex === 2 && this.index === 0){
           sortByClick.sort((a,b) => a.averageGrade -b.averageGrade);
           this.setState({ Data:sortByClick });
           this.index++;
        } else if(averageCellIndex===2 && this.index === 1) {
            sortByClick.sort((a,b) => b.averageGrade - a.averageGrade);
            this.setState({ Data:sortByClick });
            this.index++;
        } else if(averageCellIndex===2 && this.index === 2) {
            this.setState({ Data: this.defaultData });
            this.index = 0;    
        }
    }



    render() {
        return (
            <table className="table">
                <thead>
                    <Thead click={this.sortByClick} />  
                </thead>
                    <TableRow data={this.state.Data}  />
            </table>
            
        );
    }
}


export default Table;