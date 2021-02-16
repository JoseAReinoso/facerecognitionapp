import React from 'react';
import Tilt from 'react-tilt'
import '../Logo/logo.css'
import PCimage from '../Logo/computerIcon.jpg'

//Since im not controlling state here i could do a function
const Logo = () => {
    return (
<div>
<Tilt className="Tilt" options={{ max : 25 }} style={{ height: 200, width: 200 }} >
 <div className="Tilt-inner"><img alt="Logo" src={PCimage}/> </div>
</Tilt>
</div>
    )
}

export default Logo