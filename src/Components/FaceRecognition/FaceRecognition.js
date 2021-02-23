import React from 'react';

//Since im not controlling state here i could do a function
const FaceRecognition = ({imageUrl}) => {
    return (
        <div className="center">
       <div className="absolute mt2">
       <img alt="" src={imageUrl} width='500px' heigh='auto' />
           </div>     
       
        </div>
    )
}

export default FaceRecognition