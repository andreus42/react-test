import React from 'react';

export class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '',
                    value2: '42'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleChange2(event) {
      this.setState({value2: event.target.value2});
    }
  
    handleSubmit(event) {
      alert(`Name ${this.state.value} and age ${this.state.value2}`);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Age:
            <input type="text" value={this.state.value2} onChange={this.handleChange2} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }