import React from 'react'
import CloseCompleted from './CloseCompleted';


function Footer({ deleteTaskCompleted, headingText, filterList}) {

  return (
    <div>
      <div className="filters btn-group stack-exception">
      <h2 id="list-heading">
            {headingText}
        </h2>
          {filterList}
          <CloseCompleted deleteTaskCompleted={deleteTaskCompleted}/>
      </div>
      
    </div>
  )
}

export default Footer
