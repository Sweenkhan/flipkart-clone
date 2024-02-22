import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function Practice() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [val, setVal] = useState("");

  let mesage = "hi ujwal, am a developer";

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:8080/register", { username, password })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleChange(e) {
    setVal(e.target.value);
    console.log(val);
  }

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res);
    });
  }, []);
  

  function reverseWord(str) {
    let result = "";
    let splitStr = str.split(" ");

    for (let i = 0; i < splitStr.length; i++) {
      let word = "";
      for (let j = splitStr[i].length - 1; j >= 0; j--) {
        word += splitStr[i][j];
      }

      result += word + " ";
      word = "";
    }
    return result;
  }

  reverseWord(mesage);

  return (
    <div className="App">
      <h1>This is title</h1>

      <form onSubmit={handleSubmit}>
        <input
          id="name"
          type="text"
          value={username}
          required
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label htmlFor="name">Username</label>
        <br />

        <input
          id="password"
          type="password"
          value={password}
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <label htmlFor="password">password</label>
        <br />

        <button type="submit">Submit</button>
      </form>
      <div>
        <select onChange={(e) => handleChange(e)}>
          <option value="a">a</option>
          <option value="b">b</option>
          <option value="c">c</option>
          <option value="d">d</option>
          <option value="e">e</option>
        </select>
      </div>
    </div>
  );
}

export default Practice;
