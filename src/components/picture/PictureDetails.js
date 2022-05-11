import React, { Component } from 'react';
import Like from './Like';
class PictureDetails extends Component {
    state = {
        picture:this.props.info[this.props.match.params.id],
    } 
    render() { 
        return (
            <div className='container'>
                <h1>{this.state.picture.name}</h1>

                <div className='row'>

                    <div className='col-6'>
                        <div className="card mb-3">
                            <img src={this.props.info[this.props.match.params.id].url} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <Like picture={this.props.info[this.props.match.params.id]} likeHandle={this.props.likeHandle}  />
                                <span className="card-text"><small className="text-muted">{this.props.info[this.props.match.params.id].likes}</small></span>
                                <h5 className="card-title">{this.props.info[this.props.match.params.id].name}</h5>
                                <p className="card-text">{this.props.info[this.props.match.params.id].author}</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-6'>
                        {this.props.info[this.props.match.params.id].comments.map(comment => (
                                    <div key={comment.id} className='comments'>
                                        <span className='id'>{comment.id}</span>
                                        <span className='author'>{comment.comment_author}</span>
                                        <span className='comment'>{comment.comment}</span>
                                        <span className='date'>{comment.date}</span>
                                    </div>))
                        }
                        {"this area for writing a comment"}
                    </div>
                </div>
                
            </div>
        );
    }
}

export default PictureDetails;