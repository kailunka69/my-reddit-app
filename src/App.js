import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { fetchPosts } from './components/posts/postsSlice';

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchPosts())
  }, [])
  const posts = useSelector((state) => state.posts)
  useEffect(()=>{
    console.log(posts)
  },[posts])

  return (
    <div>
      <h1>Hello Reddit</h1>
      {posts.status === 'loading' && <div>Loading</div>}
      {posts.status === 'failed' && <div>{posts.error}</div>}
      {posts.status === 'succeeded' && <div>{posts.posts.map((post) => <div key={post.id}>{post.title}</div>)}</div>}
    </div>
  );
}

export default App;
