import React from 'react';

const Rank = ({userState}) => {
    const {entries, name} = userState

    return (
        <div >
         <div className="white f3">{`${name}, your current Entry Count is..`}</div>
         <div className="white f1">{`#${entries}`}</div>
        </div>
    )
}

export default Rank