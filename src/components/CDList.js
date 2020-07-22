import React from 'react';
import cds from '../cds.js';
import CD from './CD';
import './CD.css';

function CDList(props) {
  console.log(cds)
  return (
    <div className="cd-list">
      {/* { cds.map(cd => <CD name={cd.name}/>)} */}
      <CD cd={cds[0]}/>
    </div>
  );
}

export default CDList;