import React, { useState } from "react";
import { getFirebase } from "../../firebase";
import './post.css';

const Post = ({ match }) => {

  const slug = match.params.slug; 

  const [loading, setLoading] = useState(true);
  const [currentPost, setCurrentPost] = useState();

  if (loading && !currentPost) {
    getFirebase()
      .database()
      .ref()
      .child(`/posts/${slug}`)
      .once("value")
      .then(snapshot => {
        if (snapshot.val()) {
          setCurrentPost(snapshot.val());
        }
        setLoading(false);
      });
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  // const postDoesNotExist = !currentPost;
  // if (postDoesNotExist) {
  //   return <Redirect to="/404" />;
  // };

  return (
    <>
      <div className='card__post--container'>
        <img src={currentPost.coverImage} alt={currentPost.coverImageAlt}/>
        <h1>{currentPost.title}</h1>
        <em>{currentPost.datePretty}</em>
        <p dangerouslySetInnerHTML={{ __html: currentPost.content }}></p>
      </div>
    </>
  );
};

export default Post;
