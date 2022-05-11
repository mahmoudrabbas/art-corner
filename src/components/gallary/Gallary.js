import React, { Component } from 'react';
import Picture from '../picture/Picture';
class Gallary extends Component {
    state = {  } 
    render() { 
        return (
            <div className='container'>
                <Picture info={this.props.info} likeHandle={this.props.likeHandle} likesCountHandle={this.props.likesCountHandle} />
            </div>
        );
    }
}

export default Gallary;