import React from 'react';
import CD from './CD';
import './CD.css';

function CDList(props) {
  console.log('cdss', props.cds)
  return (
    <div className="cd-list">
      {/* { cds.map(cd => <CD name={cd.name}/>)} */}
      <CD cd={props.cds[0]}/>
    </div>
  );
}

export default CDList;