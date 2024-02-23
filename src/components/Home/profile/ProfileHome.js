import React from 'react';
import "./ProfileHome.css";
import { Avatar, Button } from '@mui/material';
import Post from '../timeline/Post';

const ProfileHome = ({ displayName, userName, verified, avatar, backImg, followers, following, posts }) => {
    return (
        <>
            <div className='profileHome'>
                {/* Header */}
                <div className='profile__header'>
                    <h3>{displayName}</h3>
                </div>
                <div className='backImg'>
                    <img src={backImg} alt="Background" />
                </div>
                <div className='profile__top'>
                    <Avatar className='avatar' />
                    <Button variant='outlined' className='btn__editProfile'>Edit Profile</Button>
                </div>
                <h3 className='profile__name'>
                    {displayName}
                    <span className='profile__username'>
                        @{userName}
                    </span>
                </h3>

                <div className='follow__user'>
                    <p className='following'>
                        <span className='number'>{following}</span> Following
                    </p>
                    <p className='follower'>
                        <span className='number'>{followers}</span> Followers
                    </p>
                </div>

                {/* Display posts */}
                {posts.map((post, index) => (
                    <Post
                        key={index}
                        displayName={post.displayName}
                        userName={post.userName}
                        verified={post.verified}
                        text={post.text}
                        avatar={post.avatar}
                        image={post.image}
                    />
                ))}
            </div>
        </>
    );
};

export default ProfileHome;
