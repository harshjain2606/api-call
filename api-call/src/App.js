import {useEffect} from "react"
import { getPosts } from "./api";
import "./App.css";

function App() {
  useEffect (()=>{
   getPosts().then((posts)=>console.log(posts))
  },[])
  return <div className="App"></div>
}

export default App;
