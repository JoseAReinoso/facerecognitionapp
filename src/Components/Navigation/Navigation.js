import React from 'react';

//Since im not controlling state here i could do a function
const Navigation = () => {
    return (
        <nav style={{display:'flex',justifyContent:'flex-end'}}>
            {/*using tachyons styling here*/}
            <p className="f3 link dim black underline pa3 pointer">Sign Out</p>
        </nav>
    )
}

export default Navigation