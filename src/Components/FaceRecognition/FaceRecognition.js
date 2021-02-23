import React from 'react';

//Since im not controlling state here i could do a function
const FaceRecognition = ({imageUrl}) => {
    return (
        <div className="center">
       <img alt="" src={imageUrl} />
        </div>
    )
}

export default FaceRecognition