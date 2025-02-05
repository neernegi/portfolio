import React from 'react'
import Featured from './Featured'



function AllProject() {
  return (
    <div>
       <Featured
            key={index}
            title={title}
            description={description}
            images={images}
            stack={stack}
            links={links}
           
          />
    </div>
  )
}

export default AllProject
