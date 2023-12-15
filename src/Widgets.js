import React from 'react'
import {
  TwitterTimelineEmbed,

  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";
import './Widgets.css'
function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1735591139426594959"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="MihirOjha9"
          options={{ height: 400 }}
        />
        
      </div>
    </div>
  )
}

export default Widgets