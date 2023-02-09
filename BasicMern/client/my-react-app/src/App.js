import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
import Axios from 'axios';

function App() {
  const[listofUsers,setListofUsers]=useState([]);

  const[name,setName]=useState("");
  const[age,setAge]=useState(0);
  const[username,setUsername]=useState("");

  useEffect(()=>{
    Axios.get("http://localhost:3001/getUsers").then((response)=>{
     setListofUsers(response.data)
    })
  },[])

  const createUser=()=>{
    Axios.post("http://localhost:3001/createUsers",
    {name:name,
      age:age,
    username:username,}).then((response)=>{alert("Done");});
  };



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          {listofUsers.map((user)=>{
            return(
              <div>
                <h1>Name:{user.name}</h1>
                <h1>age:{user.age}</h1>
                <h1>username:{user.username}</h1>
              </div>
            )
          })}
        </div>
        <div>
          <input type="text" onChange={(event)=>{setName(event.target.value);}}></input>
          <input type="Number" onChange={(event)=>{setAge(event.target.value);}}></input>
          <input type="text" onChange={(event)=>{setUsername(event.target.value)}}></input>
          <button onClick={createUser}> Create User</button>
        </div>

      </header>
    </div>
  );
}

export default App;
