import React from 'react';

function PostHeader({author, date}){
  return (
    <div className="post-header">
      <img className="avatar" src={author.avatar}/>
      <div className="info">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}


function IconsLikeComment(){
  return(
    <div className="icons-like-comment">
      <div className="divider"></div>
      <ul className="likeAndComment">
        <li className="iconlike">
          <img className="imglike" src="https://i.ibb.co/7V9nT9h/like.png"/>
          <span className="spaniconsLikesComments">Curtir</span>
        </li>
        <li className="iconcomment">
          <img className="imgComment" src="https://i.ibb.co/phgZC1L/comment.png"/>
          <span className="spaniconsLikesComments">Comentar</span>
        </li>
      </ul>
    </div>
  );
}

function PostComments({ comments }) {
  return(
    <div className="post-comments">
      <div className="divider"></div>
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <img src={comment.author.avatar} className="avatar"/>
          <div className="involvetolike">
            <p>
              <span className="infocomment">{comment.author.name}</span>
              {comment.content}
            </p>
            <ul className="likeComment">
            <li><span>Curtir</span></li>
            <li><span>Responder</span></li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

function PostItem({ author, date, content, comments }) {
  return (
    <div className="post">
      <PostHeader author={author} date={date} />
      <p className="post-content">{content}</p>
      <IconsLikeComment/>
      <PostComments comments={comments} />
    </div>
  );
}

export default PostItem;