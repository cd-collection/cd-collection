import React from 'react';
import PropTypes from 'prop-types';

export default class CD extends React.Component {
  render() {
    const { cd } = this.props
    return (
      <div className='cd'>
        <h1>{ cd.name } </h1>
        <h2>{ cd.composers } </h2>
        <h3>{ `Vol: ${cd.volume} Num: ${cd.number}` }</h3>
      </div>
    );
  }
}

CD.propTypes = {
  cd: PropTypes.object
};