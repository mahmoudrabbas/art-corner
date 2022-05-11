import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Like from './Like';
import './Picture.css'
class Picture extends Component {
    state = { 
        
    }


    render() { 
        return (
            <div className='picture'>
                {this.props.info.map(pic => (
                    <div key={pic.id} className="card m-1" style={{width: "26rem"}}>
                        <Link to={`/drawing_details/${pic.id}`}><img src={pic.url} width={400} height={400} className="card-img-top" alt="cat" /></Link>
                        <div className="card-body">
                            <Like picture={pic} likesCountHandle={this.props.likesCountHandle} likeHandle={this.props.likeHandle}/>
                            <p className="badge bg-primary m-1 card-text">{pic.likes}</p><br/>
                            <p className="badge bg-primary m-1 card-text">{pic.name}</p><br/>
                            <p className="badge bg-primary m-1 card-text">{pic.author}</p><br/>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Picture;