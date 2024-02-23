import React, { useState, useEffect } from 'react';
import "./Timeline.css";
import Tweetbox from './Tweetbox';
import Post from './Post';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import db from '../../../firebase';


const Timeline = () => {
    const [posts, setPosts] = useState([]);
    
    
    // Function to fetch posts from Firestore
    const fetchPosts = () => {
        try {
            const q = query(collection(db, 'post'), orderBy("timestamp", "desc"));

            onSnapshot(q, (querySnapshot) => {
                const fetchedPosts = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setPosts(fetchedPosts);
            });

        } catch (error) {
            console.error('Error fetching posts: ', error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className='timeline'>
            {/* Header */}
            <div className='timeline__header'>
                <h2>Home</h2>
            </div>
            {/* Tweetbox */}
            <Tweetbox />

            {/* Render posts */}
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
    );
}

export default Timeline;
