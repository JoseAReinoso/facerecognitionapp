import React from 'react';
import '../FaceRecognition/FaceBox.css'

//Since im not controlling state here i could do a function
const FaceRecognition = ({imageUrl,box}) => {
    return (
        <div className="center">
       <div className="absolute mt2">
       <img id='inputimage' alt="" src={imageUrl} width='500px' heigh='auto' />
       <div className='bounding-box' style={{top:box['topRow'], right:box['rightCol'], bottom:box['bottomRow'], left:box['leftcol']}}></div>
           </div>     
       
        </div>
    )
}

export default FaceRecognition