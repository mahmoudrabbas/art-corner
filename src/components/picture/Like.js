import React from 'react';
const Like = (props) => {
    const style = !props.picture.isLiked?{fontSize:"1.5em",color:"red",cursor:"pointer"}:{fontSize:"1.5em",cursor:"pointer"};
    return (
        <>
            <i style={style} onClick={()=>props.likeHandle(props.picture)} className="fa-solid fa-heart"></i>
        </>
    );
}

export default Like;