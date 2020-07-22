import React from 'react';
import PropTypes from 'prop-types';

export default class CD extends React.Component {
  render() {
    const { cd } = this.props

    if (!cd) {
      return (
        <div className='cd'>
          no results
        </div>
      )
    }
    return (
      <div className='cd'>
        <h1>{ cd.item.name } </h1>
        <h2>{ cd.item.composers } </h2>
        <h3>{ `${cd.item.volume}.${cd.item.number}`}</h3>
      </div>
    );
  }
}

CD.propTypes = {
  cd: PropTypes.object
};