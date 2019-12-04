import React from 'react';

export class Message extends React.Component {
    isFromCurrentUser = () => {
        const currentUserId = 1234;
        return this.props.message.userId === currentUserId;
    }
    renderMessage = () => {
        let msg = (
            <>
            <div className="content">
                <img className="ui avatar image" src="https://pbs.twimg.com/profile_images/549268771484229632/WnatiHzT_400x400.jpeg"/>
                {this.props.message.text}
            </div>
        </>
        )
        if(this.isFromCurrentUser()) {
            msg = (
                <>
            <div className="content">
                {this.props.message.text}
                <img className="ui avatar image" src="https://pbs.twimg.com/profile_images/549268771484229632/WnatiHzT_400x400.jpeg" alt="user image"/>
            </div>
            </>
            )
        }
        return(
           msg
        )
    }
    render() {
        return(
            <div className="item">
                {this.renderMessage()}
            </div>
        )
    }
}