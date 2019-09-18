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

function PostComments({ comments }) {
  return(
    <div className="post-comments">
      <div className="divider"></div>
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <img src={comment.author.avatar} className="avatar"/>
          <div className="involvetolike">
            <p>
              <span>{comment.author.name}</span>
              {comment.content}
            </p>
            <span className="like">Curtir</span>
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
      <PostComments comments={comments} />
    </div>
  );
}

export default PostItem;