import React, { Component } from 'react';
import Button from '../Button/Button';
import images from '../../images/images';
import './insertImage.css';

class InsertImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
        };
        this.array = images;
    }
        
    increaseIndex = () => {
        let newIndex  = this.state.index;
        newIndex === 2 ? newIndex = 0 : newIndex++;
        this.setState({index: newIndex})
    }

    slide = () => {
        this.interval = setInterval(()=> this.increaseIndex(), 2000); 
    }

    componentDidMount() {
       this.slide();
    }

    hover = () => {
        clearInterval(this.interval);
    }

    leave = () => {
        this.slide();
    }

    render() {
        const { index } = this.state;
        const  imgSrc  = this.array[index];
        const rightIndex = index === 2 ? 0 : index + 1;
        const leftIndex = index === 0 ? 2 : index - 1;
        return (
            <div className="container"> 
                <Button
                    leave={this.leave}
                    hover={this.hover}
                    buttonClick={
                         ()=>this.setState({index: leftIndex})
                    }
                    name="<< Left" 
                />
                <img src={imgSrc} className="img"/>
                <Button 
                    leave={this.leave}
                    hover={this.hover}
                    buttonClick={
                        ()=>this.setState({index: rightIndex})
                    } 
                    name="Right >>" 
                />    
            </div>
        );
    }
}

export default InsertImage;