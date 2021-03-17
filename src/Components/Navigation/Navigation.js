import React from 'react';

//Since im not controlling state here i could do a function
const Navigation = ({onRouteChange, isSignedIn}) => {
    console.log("from navigation",isSignedIn )
        if (isSignedIn){
            return (
                <nav style={{display:'flex',justifyContent:'flex-end'}}>
                {/*using tachyons styling here*/}
                <p onClick={() => onRouteChange('signout')} className="f3 link dim black underline pa3 pointer">Sign Out</p>
            </nav>
            )
        }
        else {
            return (
                <nav style={{display:'flex',justifyContent:'flex-end'}}>
                {/*using tachyons styling here*/}
                <p onClick={() => onRouteChange('signin')} className="f3 link dim black underline pa3 pointer">Sign In</p>
                <p onClick={() => onRouteChange('register')} className="f3 link dim black underline pa3 pointer">Register</p>
            </nav>
 
            )
        }
}

export default Navigation