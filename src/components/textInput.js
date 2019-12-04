import React from 'react';

export class TextInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputVal: ''
        }
    }
    clickHandler = () => {
        if(!this.state.inputVal) {
            return
        }
        this.props.clickFunc(this.state.inputVal)
        this.setState({
            inputVal: ''
        })
    }
    inputChangeHandler = (e) => {
        this.setState({inputVal: e.target.value})
    }
    render() {
        return(
            <div>
                <input 
                    value={this.state.inputVal} 
                    onChange={this.inputChangeHandler}
                    placeholder={this.props.placeholderText}/>
                <button className="ui button" onClick={this.clickHandler}>{this.props.buttonTitle}</button>
            </div>
        )
    }
}