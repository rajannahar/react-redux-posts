import React, { useState }from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../actions/postActions';

const CreatePost = () => {

  const [ title, setTitle ] = useState("")
  const dispatch = useDispatch()
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createPost(title))
    setTitle("")
  }

  return (
    <div>
      <h2>Add a post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
      <br />
      <br />
    </div>
  )
}

export default CreatePost;