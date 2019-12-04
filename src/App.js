import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Title} from './components/title';
import {MessageList} from './components/messageList';
import {TextInput} from './components/textInput';





export class App extends React.Component {
  inputProps = {
    buttonTitle: 'Send',
    clickFunc: (res) => { 
      this.addMessage(res);
    },
    placeholderText: 'Enter Message'
  }
  
  messages = [
    {
        text: 'Message1',
        userId: 1234,
        userToId:1235
    },
    {
      text: 'Message2',
      userId: 1235,
      userToId:1234
    },
    {
        text: 'Hello',
        userId: 1234,
        userToId:1235
    }
  ]
  addMessage = (message) => {
    this.messages.push({
      
        text: message,
        userId: 1234,
        userToId:1235
    
    })
    console.log(this.messages);
    this.forceUpdate();
  }
  render() {
    return (
      <div className="App">
        <Title />
        <MessageList messages={this.messages}/>
        <TextInput {...this.inputProps} />
      </div>
    );
  }

}

export default App;
