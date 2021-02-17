import React from 'react';
import Tilt from 'react-tilt'
import '../Logo/logo.css'
import PCimage from '../Logo/Baseball.png'

//Since im not controlling state here i could do a function
const Logo = () => {
    return (
<div>
<Tilt className="Tilt" options={{ max : 25 }} style={{ height: 200, width: 200,  boxShadow: "5px 5px 5px 10px #888888", borderRadius:"20px",marginLeft:"2%"}} >
 <div className="Tilt-inner"><img alt="Logo" src={PCimage} style={{margin:"30%", width:"40%"}}/> </div>
</Tilt>
</div>
    )
}

export default Logo