import React, { useEffect, useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import ProfileHome from './ProfileHome';
import Widget from '../widget/Widget';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

import "./Profile.css";
import db from '../../../firebase';


const Profile = () => {
    const [profiles, setProfiles] = useState([]); // Fix here
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

    const fetchProfiles = () => {
        try {
            const q = query(collection(db, 'user'));

            onSnapshot(q, (querySnapshot) => {
                const fetchedProfile = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProfiles(fetchedProfile);
            });

        } catch (error) {
            console.error('Error fetching posts: ', error);
        }
    };

    useEffect(() => {
        fetchProfiles();
    }, []);



  return (
    <div className='profile'>
        <Sidebar/>
        {profiles.map((profile, index) => (
            <ProfileHome
            key={index}
            displayName={profile.displayName}
            userName={profile.userName}
            verified={profile.verified}
            avatar={profile.avatar}
            backImg={profile.backImg}
            followers={profile.followers}
            following={profile.following}
            posts={posts}
       />
        ))}



        
        <Widget/>
    </div>
  )
}

export default Profile;
