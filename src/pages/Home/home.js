import React, { useState } from "react";
import Card from './components/card/Card';
import { getFirebase } from "../../firebase";
import './home.css';

const Home = () => {
  
  const [loading, setLoading] = useState(true);
  const [blogPosts, setBlogPosts] = useState([]);

  if (loading && !blogPosts.length) {
    getFirebase()
      .database()
      .ref("/posts")
      .orderByChild("dateFormatted")
      .once("value")
      .then(snapshot => {
        let posts = [];
        const snapshotVal = snapshot.val();
        for (let slug in snapshotVal) {
          posts.push(snapshotVal[slug]);
        }
  
        const newestFirst = posts.reverse();
        setBlogPosts(newestFirst);
        setLoading(false);
      });
  }
  
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className='card__section'>
        {blogPosts && blogPosts.map( post => (
          <Card post={post} key={post.slug} />
        ))}
      </div>
    </>
  );
};

export default Home;
