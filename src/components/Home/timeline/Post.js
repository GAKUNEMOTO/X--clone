import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import './Post.css';

const Post = ({ displayName, userName, verified, text, image, avatar }) => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes((prevLikes) => prevLikes - 1);
    } else {
      setLikes((prevLikes) => prevLikes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className='post'>
      <div className='post__avatar'>
        <Avatar src={avatar} />
      </div>

      <div className='post__body'>
        <div className='post__header'>
          <div className='post__headerText'>
            <h3>
              {displayName}
              <span className='post__headerSpecial'>
                {verified && <VerifiedUserIcon className='post__badge' />}
                @{userName}
              </span>
            </h3>
          </div>
          <div className='post__headerDescription'>
            <p>{text}</p>
          </div>
          {/* Conditionally render the image */}
          {image && <img src={image} alt='Post' />}
        </div>
        <div className='post__footer'>
          <ChatBubbleOutlineIcon fontSize='small' />
          <RepeatIcon fontSize='small' />
          <div className='btn__favorite'>
            <FavoriteBorderIcon
              fontSize='small'
              onClick={handleLike}
              style={{ color: isLiked ? 'red' : '' }}
            />
            <span>{likes}</span>
          </div>
          <PublishIcon fontSize='small' />
        </div>
      </div>
    </div>
  );
};

export default Post;
