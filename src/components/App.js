import React, { Component } from 'react'
import Header from './header/Header'
import './App.css'
import { Route, Switch } from 'react-router-dom';
import Login from './login/Login';
import Sign from './sign/Sign';
import Gallary from './gallary/Gallary';
import PictureDetails from './picture/PictureDetails';
import Profile from './profile/Profile';


class App extends Component {
    state = {
        info:[
            {id:0,authorId:1,name:"Meow",url:"/assets/images/picture2.jpg",author:"Abdelrahman Ahmed", isLiked:"false", price:50,likes:600,comments:[{id:1, comment_author:"Mahmoud R Abbas", comment:"ddddddd",date:'20-5-2020'}]}, 
            {id:1,authorId:2,name:"Crazy Caption",url:"/assets/images/picture3.jpg",author:"Hassan Khalef", isLiked:"false", price:50,likes:600,comments:[{id:2, comment_author:"Mahmoud R Abbas", comment:"ddddddd",date:'20-5-2020'}]}, 
            {id:2,authorId:3,name:"Anything who cares",url:"/assets/images/picture4.jpg",author:"Hamzawy", isLiked:"false", price:50,likes:600,comments:[{id:3, comment_author:"Mahmoud R Abbas", comment:"ddddddd",date:'20-5-2020'}]},
            {id:3,authorId:4,name:"I am writing anything",url:"/assets/images/picture1.jpg",author:"Haitham Gomaa", isLiked:"false", price:50,likes:600,comments:[{id:4, comment_author:"Mahmoud R Abbas", comment:"ddddddd",date:'20-5-2020'}]},
            {id:4,authorId:1,name:"Meow",url:"/assets/images/picture2.jpg",author:"Abdelrahman Ahmed", isLiked:"false", price:50,likes:600,comments:[{id:1, comment_author:"Mahmoud R Abbas", comment:"ddddddd",date:'20-5-2020'}]}, 
            {id:5,authorId:2,name:"Crazy Caption",url:"/assets/images/picture3.jpg",author:"Hassan Khalef", isLiked:"false", price:50,likes:600,comments:[{id:2, comment_author:"Mahmoud R Abbas", comment:"ddddddd",date:'20-5-2020'}]}, 
            {id:6,authorId:3,name:"Anything who cares",url:"/assets/images/picture4.jpg",author:"Hamzawy", isLiked:"false", price:50,likes:600,comments:[{id:3, comment_author:"Mahmoud R Abbas", comment:"ddddddd",date:'20-5-2020'}]},
            {id:7,authorId:4,name:"I am writing anything",url:"/assets/images/picture1.jpg",author:"Haitham Gomaa", isLiked:"false", price:50,likes:600,comments:[{id:4, comment_author:"Mahmoud R Abbas", comment:"ddddddd",date:'20-5-2020'}]},
            {id:8,authorId:1,name:"Meow",url:"/assets/images/picture2.jpg",author:"Abdelrahman Ahmed", isLiked:"false", price:50,likes:600,comments:[{id:1, comment_author:"Mahmoud R Abbas", comment:"ddddddd",date:'20-5-2020'}]}, 
            {id:9,authorId:2,name:"Crazy Caption",url:"/assets/images/picture3.jpg",author:"Hassan Khalef", isLiked:"false", price:50,likes:600,comments:[{id:2, comment_author:"Mahmoud R Abbas", comment:"ddddddd",date:'20-5-2020'}]}, 
            {id:10,authorId:3,name:"Anything who cares",url:"/assets/images/picture4.jpg",author:"Hamzawy", isLiked:"false", price:50,likes:600,comments:[{id:3, comment_author:"Mahmoud R Abbas", comment:"ddddddd",date:'20-5-2020'}]},
            {id:11,authorId:4,name:"I am writing anything",url:"/assets/images/picture1.jpg",author:"Haitham Gomaa", isLiked:"false", price:50,likes:600,comments:[{id:4, comment_author:"Mahmoud R Abbas", comment:"ddddddd",date:'20-5-2020'}]},  
        ],
        artists:[
            {id:1,name:"Abdelrahman Ahmed",description:"Hello I am Haitham, a university student who is very passionated with the drawing",age:25,pp:'/assets/artists/av1.png',inCart:0,drawings:[{pid:0,name:"Love your self",likes:600,picUrl:'/assets/images/picture4.jpg'},{pid:1,name:"Meow",likes:600,picUrl:'/assets/images/picture2.jpg'},{pid:2,name:"dd",likes:600,picUrl:'/assets/images/picture3.jpg'}],sm:{fb:"http://www.facebook.com",tw:"http://www.twitter.com",pinterest:"https://www.pinterest.com",bh:"https://www.behance.com",ig:"https://www.instagram.com"}},
            {id:2,name:"Hassan Khalef",description:"Hello I am Haitham, a university student who is very passionated with the drawing",age:24,pp:'/assets/artists/av3.png',inCart:0,drawings:[{pid:0,name:"Love your self",likes:600,picUrl:'/assets/images/picture4.jpg'},{pid:1,name:"Meow",likes:600,picUrl:'/assets/images/picture2.jpg'},{pid:2,name:"dd",likes:600,picUrl:'/assets/images/picture3.jpg'}],sm:{fb:"http://www.facebook.com",tw:"http://www.twitter.com",pinterest:"https://www.pinterest.com",bh:"https://www.behance.com",ig:"https://www.instagram.com"}},
            {id:3,name:"Hamzawy",description:"Hello I am Haitham, a university student who is very passionated with the drawing",age:28,pp:'/assets/artists/av4.png',inCart:0,drawings:[{pid:0,name:"Love your self",likes:600,picUrl:'/assets/images/picture4.jpg'},{pid:1,name:"Meow",likes:600,picUrl:'/assets/images/picture2.jpg'},{pid:2,name:"dd",likes:600,picUrl:'/assets/images/picture3.jpg'}],sm:{fb:"http://www.facebook.com",tw:"http://www.twitter.com",pinterest:"https://www.pinterest.com",bh:"https://www.behance.com",ig:"https://www.instagram.com"}},
            {id:4,name:"Haitham Gomaa",description:"Hello I am Haitham, a university student who is very passionated with the drawing",age:23,pp:'/assets/artists/av1.png',inCart:0,drawings:[{pid:0,name:"Love your self",likes:600,picUrl:'/assets/images/picture4.jpg'},{pid:1,name:"Meow",likes:600,picUrl:'/assets/images/picture2.jpg'},{pid:2,name:"dd",likes:600,picUrl:'/assets/images/picture3.jpg'}],sm:{fb:"http://www.facebook.com",tw:"http://www.twitter.com",pinterest:"https://www.pinterest.com",bh:"https://www.behance.com",ig:"https://www.instagram.com"}},
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
                    <Route path='/profile/:id' render={(props) => <Profile {...props} artists={this.state.artists} info={this.state.info} likesCountHandle={this.likesCountHandle}  likeHandle={this.likeHandle}/>}/>
                    <Route path='/drawing_details/:id' render={(props) => (<PictureDetails info={this.state.info} {...props} likesCountHandle={this.likesCountHandle} likeHandle={this.likeHandle} />)}/>
                </Switch>
            </React.Fragment>
        );
    }
}

export default App;