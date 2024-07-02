import React from 'react'
import "./loading.css"
function Loading() {
  return (
    
    <div className='loading'>
        <div className="container">
			<div></div>
	<span>🚀 </span>
	<span className="drop"></span>
</div>

<svg>
	<defs>
		<filter id="gooey">
			<feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur"/>
			<feColorMatrix in="blur" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -20" result="gooey" />
			<feComposite in="SourceGraphic" in2="gooey" operator="atop" />
		</filter>
	</defs>
</svg></div>
  )
}

export default Loading