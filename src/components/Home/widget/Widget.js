import Search from '@mui/icons-material/Search'
import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton,TwitterTweetEmbed,  } from 'react-twitter-embed';
import "./Widget.css";

const Widget = () => {
  return (
    <div className='widget'>
        <div className='widget__input'>
            <Search className='widget__searchIcon'/>
            <input placeholder='Search' type='text'/>
        </div>
        <div className='widget__container'>
            <h2>What are you doing?</h2>

            {/* Library */}
    <TwitterTweetEmbed tweetId={"1756812205599711595"}/>

    <TwitterTimelineEmbed 
     sourceType='profile'
     screenName='nemoto_gak1629'
     options={{ height: 400 }}
    />


    <TwitterShareButton url='https://twitter.com/nemoto_gak1629'
    options={{text:"#React,js", vis: " nemoto_gak1629"}}/>
        </div>
      
    </div>
  )
}

export default Widget
