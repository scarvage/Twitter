import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import { onSnapshot, collection } from 'firebase/firestore';
import db  from "./firebase.js";
import posts from './posts.js'

function Feed() {
  /* const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "posts"), (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);
 */

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      {posts.map((post) => (
        <Post
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default Feed;
