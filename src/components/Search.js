import React from 'react';
import PropTypes from 'prop-types'
import Fuse from 'fuse.js'

import cds from '../cds';
import CDList from './CDList'
import './Search.css';

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = { search: ' '}

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ search: event.target.value })
    console.log('search is ', event.target.value)
  }

  render() {
    const options = {
      includeScore: true,
      keys: [
        {
          name: 'volume',
          weight: 3,
        },{
          name: 'number',
          weight: 3,
        }, {
          name: 'name',
          weight: 10
        }, {
          name: 'composers',
          weight: 9
        }
      ]
    }
    
    const fuse = new Fuse(cds, options)
    
    const result = fuse.search(this.state.search)

    console.log('state is ', this.state.search)
    
    return (
      <div className='search'>
        <input 
          type='text' 
          placeholder='search...'
          onChange={this.handleChange}
        ></input>
        <CDList cds={result}/>
      </div>
    );
  }
}

Search.propTypes = {
  cd: PropTypes.func
};