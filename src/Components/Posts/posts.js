import React, { useState } from "react";
import {
    TiArrowUpOutline,
  TiArrowUpThick,
  TiArrowDownOutline,
  TiArrowDownThick,
  TiMessage,
} from 'react-icons/ti';
import './posts.css';
import { shortenNumber } from '../../util/shortenNumber';
import { Comments } from "../Features/Comments/Comment";


export const Posts = (props) => {

    const [voteValue, setVoteValue] = useState(0);

  const { post, onToggleComments } = props;


    const onHandleVote = (newValue) => {
        if(newValue === voteValue){
            setVoteValue(0);
        }
        else if(newValue === 1){
            setVoteValue(1);
        }
        else {
            setVoteValue(-1);
        }
    }

    const handleUpVote = () => {
        if(voteValue === 1){
            return <TiArrowUpThick className="vote-icon vote-up-active"/>
        }else{
            return <TiArrowUpOutline className="vote-icon vote-up"/>
        }   
    }

    const handleDownVote = () => {
        if(voteValue === -1){
            return <TiArrowDownThick className="vote-icon vote-down-active" />
        }else{
            return <TiArrowDownOutline className="vote-icon vote-down" />
        }
    }

    const renderComments = () => {

        if (post.showingComments) {
            return (
            <div>
                {post.comments.map((comment) => (
                <Comments comment={comment} key={comment.id} />
                ))}
            </div>
            );
        }
    }
    
    return (
        <article>
            <div className='card'>
                <div className="post-wrapper">
                    <div className="post-votes-container">
                        <button className="icon-vote-button" onClick={() => onHandleVote(1)}>
                            {handleUpVote()}
                        </button>
                        <p>
                            {shortenNumber(post.ups, 1)}
                        </p>
                        <button className="icon-vote-button" onClick={() => onHandleVote(-1)}>
                            {handleDownVote()}
                        </button>
                    </div>
                    <div className="post-container">
                        <h3 className="post-title"> {post.title}</h3>

                        <div className="post-image-container">
                            <img src={post.url} alt="" className="post-image" />
                        </div>

                        <div className="post-details">
                            <span className="author-details">
                                <span>
                                    {post.author}
                                </span>
                            </span>
                            <span>7 hours</span>
                            <span className="comments-container">
                            <button
                                type="button"
                                className={`icon-action-button ${
                                post.showingComments && 'showing-comments'
                                }`}
                                onClick={() => onToggleComments(post.permalink)}
                                aria-label="Show comments"
                            >
                                <TiMessage className="comment-icon"/>
                            </button>
                            {shortenNumber(post.num_comments, 1)}
                            </span>
                        </div>
                        {renderComments()}
                    </div>
                </div>
            </div>
        </article>
    )

}