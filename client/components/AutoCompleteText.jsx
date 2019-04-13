import React from 'react';

export default class AutoCompleteText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      text:''
    }
  }

  onTextChanged(e) {
    const {items} = this.props;
    const value = e.target.value;
    let suggestions = [];
    if(value.length >0) {
      const regex = new RegExp(`^${value}`, 'i')
      suggestions = items.sort().filter(v => regex.test(v));
    }
    this.setState(() => ({suggestions, text: value}))
  }

  suggestionSelected (value) {
    this.setState(() => ({
      text: value,
      suggestions: [],
    }))
  }

  renderSuggestions() {
    const {suggestions} = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map((item) => <li onClick={this.suggestionSelected.bind(this,item)}>{item}</li>)}
      </ul>
    )
  }

  render() {
    const {text} = this.state
    return (
      <div>
        <div id='magnifying-glass-box'>
          <div id="magnifying-glass"></div>
        </div>
        <div id='search-input'>
          <input style={{width: '300px'}} value={text} placeholder="Search" onChange={this.onTextChanged.bind(this)} type='text' />
        </div>
        {this.renderSuggestions.call(this)}
      </div>
    )
  }
}