import React, { Component } from 'react';
import './App.css';

const listItems = [
  { label: "1. Wake up at 07:00.",
    isThrough: false },
  { label: "2. Leave for a work at 8:30.",
    isThrough: false },
  { label: "3. Meating at 11:00.", 
    isThrough: false },
  { label: "4. 12:00-13:00 Launchtime.",
    isThrough: false },
  { label: "5. 18:15 shopping at the nearby grocery.",
    isThrough: false },
  { label: "6. Dinner with friends at the 19:20.",
    isThrough: false },
  { label: "7. Finish freelance work untill 01:00.",
    isThrough: false } 
]
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listArray: listItems,
    }
  }
  isLineThrough = (index) => {
    const { listArray } = this.state;
    //console.log(index);
    if ( index === 0 || listArray[index-1].isThrough === true) {
     
     listArray[index].isThrough = true;
    this.setState({ listArray: listArray });
    }
  }
  render() {
    const { listArray } = this.state;
    return (
      <div>
        {
          listArray.map((listItem, index) =>(
            <p 
               key={listItem.label}
              onClick={() => this.isLineThrough(index)}
              className={`pHover ${ listItem.isThrough ? "lineThrough" : ""}`}
              >
              { listItem.label } </p>
          ))
        }            
      </div>
    );
  }
}
export default App;
