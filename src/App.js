import React, { useRef, useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/counter';
import PostForm from './components/PostForm';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import MySelect from './components/UI/select/MySelect';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "Javascript", body: "Description"},
    {id: 2, title: "Javascript2", body: "Description2"},
    {id: 3, title: "Javascript3", body: "Description3"}
  ])

  const [selectedSort, setSelectedSort] = useState("")

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MySelect 
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sort by"
          options={[
            {value: "title", name: "By name"},
            {value: "body", name: "By description"},
          ]}
        />
      </div>
      {posts.length
        ? 
        <PostList remove={removePost} posts={posts} title="JS"/>
        : 
        <h1 style={{textAlign: 'center'}}>
          Posts not found
        </h1>
      }
      
    </div>
  );
}

export default App;
