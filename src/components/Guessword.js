import React from 'react';

export default class Guessword extends React.Component {
    state = {
      message: undefined
    };
    handelChange = (e) => {
       e.preventDefault()
       const option = e.target.elements.word.value.trim();
       const message = this.props.handelChange(option)
       this.setState(() => ({ message }));
  
       if (message) {
        e.target.elements.word.value = ''
       }
    }
  
    render() {
      return (
        <div>
         <div className="content_message">
          {this.state.message && <h3 className="message">{this.state.message}</h3>}
         </div>
          <form className="match-word" onSubmit={this.handelChange}>
            <input 
              className="match-word__input"
              disabled={!!this.props.handelInput}
              type="text"
              name="word" 
            />
          </form>
        </div>
      )
    }
  }