import React from 'react';
import {Message} from './message';



export class MessageList extends React.Component {
    renderMessages = () => {
        return this.props.messages.map((message, idx) => {
            return (
                
                    <Message message={message} key={idx}/>
            )
        })
    }
    render() {
        return(
            <div className="ui list">
                { this.renderMessages() }
            </div>
        )
    };
}