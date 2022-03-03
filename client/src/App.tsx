import './App.css';
import {Routes, Route} from 'react-router-dom';
import React, { Component } from 'react';

import HomeScreen from "./screens/homeScreen";
import CreateNewPost from './screens/createPost';
import MyPosts from "./screens/myPosts";
import Drafts from './screens/drafts';
import PostScreen from "./screens/postScreen";
import UpdatePosts from './screens/updatePost';

import NavBar from './components/navbar';

export class App extends Component {
  render() {
    return (
      <div>
    <header>
      <NavBar />
    </header>
    <div>
        <Routes>
          <Route path="/" element={<HomeScreen/>}/> 
          <Route path="/create" element={<CreateNewPost/>}/>
          <Route path="/myposts" element={<MyPosts/> } />
          <Route path="/drafts" element={<Drafts/>} />
          <Route path="/post/:_id" element={<PostScreen/>} />
          <Route path="/drafts/post/:_id" element={<PostScreen/>} />
          <Route path="/myposts/post/:_id" element={<PostScreen/>} />
          <Route path="/update/:_id" element={<UpdatePosts/>} />
        </Routes>
    </div>
    </div>
    )
  }
}

export default App