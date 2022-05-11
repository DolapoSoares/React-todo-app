import React from 'react'
import CloseCompleted from './CloseCompleted';


function Footer(props) {

  return (
    <div>
      <div className="filters btn-group stack-exception">
      <h2 id="list-heading">
            {props.headingText}
        </h2>
          {props.filterList}
          <CloseCompleted />
      </div>
      
    </div>
  )
}

export default Footer
