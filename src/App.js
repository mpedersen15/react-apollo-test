import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

function App() {
  const LOGIN = gql`
    mutation {
      login(email: "", password: "") {
        user {
          id
          name
          email
          posts {
            id
            title
            published
            comments {
              text
            }
          }
        }
        token
      }
    }
  `;
  const [login, data] = useMutation(LOGIN);
  useEffect(() => {
    login();
  }, [login]);

  console.log("Login data", data);
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
      </header>
    </div>
  );
}

export default App;
