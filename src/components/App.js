import React, { Component } from 'react'
import Header from './header/Header'
import './App.css'
import { Route, Switch } from 'react-router-dom';
import Login from './login/Login';
import Sign from './sign/Sign';
import Gallary from './gallary/Gallary';
import PictureDetails from './picture/PictureDetails';


class App extends Component {
    state = {
        info:[
            {id:0,name:"Love your self",url:"/assets/images/picture1.jpg",author:"Haitham Gomaa", isLiked:"false", price:50,likes:600,comments:[{id:0, comment_author:"Mahmoud R Abbas", comment:"ddddddd",date:'20-5-2020'},{id:1, comment_author:"Mahmoud R Abbas", comment:"ddddddd",date:'20-5-2020'},{id:2, comment_author:"Mahmoud R Abbas", comment:"ddddddd",date:'20-5-2020'}]}, 
            {id:1,name:"Meow",url:"/assets/images/picture2.jpg",author:"Haitham Gomaa", isLiked:"false", price:50,likes:600,comments:[{id:1, comment_author:"Mahmoud R Abbas", comment:"ddddddd",date:'20-5-2020'}]}, 
            {id:2,name:"Crazy Caption",url:"/assets/images/picture3.jpg",author:"Haitham Gomaa", isLiked:"false", price:50,likes:600,comments:[{id:2, comment_author:"Mahmoud R Abbas", comment:"ddddddd",date:'20-5-2020'}]}, 
            {id:3,name:"Anything who cares",url:"/assets/images/picture4.jpg",author:"Haitham Gomaa", isLiked:"false", price:50,likes:600,comments:[{id:3, comment_author:"Mahmoud R Abbas", comment:"ddddddd",date:'20-5-2020'}]},
            {id:4,name:"I am writing anything",url:"/assets/images/picture1.jpg",author:"Haitham Gomaa", isLiked:"false", price:50,likes:600,comments:[{id:4, comment_author:"Mahmoud R Abbas", comment:"ddddddd",date:'20-5-2020'}]}, 
            {id:5,name:"Wanna play?",url:"/assets/images/picture2.jpg",author:"Haitham Gomaa", isLiked:"false", price:50,likes:600,comments:[{id:5, comment_author:"Mahmoud R Abbas", comment:"ddddddd",date:'20-5-2020'}]}, 
            {id:6,name:"Meow Mewo",url:"/assets/images/picture3.jpg",author:"Haitham Gomaa", isLiked:"false", price:50,likes:600,comments:[{id:6, comment_author:"Mahmoud R Abbas", comment:"ddddddd",date:'20-5-2020'}]}, 
            {id:7,name:"Cant find a name",url:"/assets/images/picture4.jpg",author:"Haitham Gomaa", isLiked:"false", price:50,likes:600,comments:[{id:7, comment_author:"Mahmoud R Abbas", comment:"ddddddd",date:'20-5-2020'}]},  
        ]
    } 
    likeHandle = (pic) => {
        const info=[...this.state.info];
        const index = info.indexOf(pic);
        if(!info[index].isLiked){
            info[index].isLiked=true;
            info[index].likes=info[index].likes-1;
        }else{
            info[index].isLiked=false;
            info[index].likes=info[index].likes+1;
        }
        this.setState({info})
    }
    render() { 
        return (
            <React.Fragment>
                <Header/>
                <Switch>
                    <Route exact path='/' render={() => (<Gallary info={this.state.info} likesCountHandle={this.likesCountHandle}  likeHandle={this.likeHandle} />)}/>
                    <Route path='/gallary' render={() => (<Gallary info={this.state.info} likesCountHandle={this.likesCountHandle}  likeHandle={this.likeHandle} />)}/>
                    <Route path='/login' render={(props)=> (<Login {...props} />)} />
                    <Route path='/sign' render={(props) => (<Sign {...props} />)} />
                    <Route path='/drawing_details/:id' render={(props) => (<PictureDetails info={this.state.info} {...props} likesCountHandle={this.likesCountHandle} likeHandle={this.likeHandle} />)}/>
                </Switch>
            </React.Fragment>
        );
    }
}

export default App;