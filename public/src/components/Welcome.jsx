import React from 'react'
import styled from 'styled-components';

export default function Welcome({ currentUser }) {
  return (
    <Container>
      <img src='https://github.com/koolkishan/chat-app-react-nodejs/blob/master/public/src/assets/robot.gif?raw=true' alt='Robot' />
      <h1>
        Welcome, <span> {currentUser.username} !</span>
      </h1>
      <h3>Please select a chat to Start Messaging</h3>"
    </Container>
  );
}

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
color:white;
height:100%;
img{
  height:20rem;
}
span {
  color #4e00ff;
}
`