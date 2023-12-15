import React from 'react'
import { Avatar,Button } from '@mui/material'
import './TweetBox.css'
function TweetBox() {
  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                <Avatar src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww'/>
                <input placeholder="What's Happening?" type='text'/>
            </div>
            <input className='tweetBox__imageInput' placeholder="Enter image URL" type='text'/>
            
            <Button className='tweetBox__tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox