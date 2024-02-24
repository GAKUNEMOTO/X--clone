import React, { useState, useRef } from 'react';
import { Avatar, Button, IconButton } from '@mui/material';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { storage } from '../../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useSpring, animated, config } from 'react-spring';
import { v4 } from "uuid";
import db from '../../../firebase';
import "./TweetBox.css";

const Tweetbox = () => {
    const [tweetText, setTweetText] = useState("");
    const [tweetImage, setTweetImage] = useState(null);
    const fileInputRef = useRef(null);

    const [tweetBoxProps, setTweetBoxProps] = useSpring(() => ({
        from: {
            opacity: 0,
            transform: 'rotateX(180deg)',
        },
        to: {
            opacity: 1,
            transform: 'rotateX(0deg)',
        },
        config: config.gentle,
    }));

    const uploadFile = async () => {
        if (tweetImage == null) return;

        const imageRef = ref(storage, `images/${tweetImage.name + v4()}`);
        await uploadBytes(imageRef, tweetImage);

        // Get the download URL of the uploaded image
        const imageUrl = await getDownloadURL(imageRef);

        // Call additional logic here if needed
        alert("Tweet Completed");

        return imageUrl;
    };

    const handleImageClick = () => {
        // Trigger click on file input
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const sendTweet = async (e) => {
        e.preventDefault();

        if (!tweetText && !tweetImage) {
            alert("Please enter text or upload an image before tweeting.");
            return;
        }

        let imageUrl = null;

        // Check if an image is selected
        if (tweetImage) {
            // Upload the image and get the download URL
            imageUrl = await uploadFile();

            if (!imageUrl) {
                alert("Failed to upload image. Please try again.");
                return;
            }
        }

        // Construct tweet data
        const tweetData = {
            avatar: "http://shincode.info/wp-content/upload/2021/12/icon.png",
            displayName: "",
            text: tweetText,
            userName: "nemoto_gak1629",
            verified: true,
            timestamp: serverTimestamp(),
            // Include the image field only if imageUrl is present
            ...(imageUrl && { image: imageUrl }),
        };

        try {
            // Add the tweet data to the Firestore collection
            await addDoc(collection(db, "post"), tweetData);
            console.log("Tweet added successfully:", tweetData);

            // Reset state, animate, and reset file input
            setTweetText("");
            setTweetImage(null);

            setTweetBoxProps.start({
                opacity: 1,
                transform: 'translateY(0)',
                from: { opacity: 0, transform: 'translateY(-20px)' },
                delay: 200,
            });

            // Reset file input
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
        } catch (error) {
            console.error("Error adding tweet:", error);
        }
    };

    return (
        <animated.div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar />
                    <input
                        placeholder='What are you doing?'
                        type='text'
                        value={tweetText}
                        onChange={(e) => setTweetText(e.target.value)}
                    />
                    {/* Input moved into the Button */}
                    <input
                        ref={fileInputRef}
                        type='file'
                        style={{ display: 'none' }}
                        onChange={(e) => setTweetImage(e.target.files[0])}
                    />
                </div>

                <div className='icons'>
                <ImageOutlinedIcon onClick={handleImageClick}  style={{fontSize:"30px"}}/>
                <GifBoxOutlinedIcon style={{fontSize:"30px"}}/>
                <EmojiEmotionsOutlinedIcon style={{fontSize:"30px"}}/>
                </div>
                

                <Button
                    className='tweetBox__tweetButton'
                    type='submit'
                    onClick={sendTweet}
                >
                    Tweet
                </Button>

                {tweetText && <p>{tweetText}</p>}
                {tweetImage && <img src={URL.createObjectURL(tweetImage)} alt="Uploaded" />}
            </form>
        </animated.div>
    );
}

export default Tweetbox;
