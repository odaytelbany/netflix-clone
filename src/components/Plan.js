import React, { useState } from 'react'
import './Plan.css'

function Plan({type, quality}) {
    const [planOn, setPlanOn] = useState(false);
    const planHandler = () => {
        setPlanOn(planOn ? false : true)
    }    

  return (
    <div className="Plan">
        <div className='Plan_info'>
            <h4>Netflix {type}</h4>
            <span>{quality}</span>
        </div>

        <button onClick={planHandler} className={planOn && "grey"} >Subscribe</button>
    </div>
  )
}

export default Plan