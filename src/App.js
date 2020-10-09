import React from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import Room from './Room';
export default () => {
  const [greeting, setGreeting] = React.useState("")
  React.useEffect(() => {
    Axios.get("http://localhost:2012/auth")
      .then(res => setGreeting(res.data))
      .catch(error => console.log(error))
  })
  return (
    <Room />
  )
}