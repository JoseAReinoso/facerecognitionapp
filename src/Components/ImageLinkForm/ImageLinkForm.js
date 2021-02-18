import React from 'react';

const ImageLinkForm = ({onInputChange, onSubmit}) => {
    return (

        <div>
<p className="f3">This magic baseball will detect faces in your pictures. git it a try!! </p>
   <div className="center">
       <div className="imageForm center pa4 br3 shadow-5">
       <input className="f4 pa2 w-70 center" type="text" onChange={onInputChange}/><br></br>
       <button className="w-30 grow f4 link ph3 pv2 dib white bg-blue" onClick={onSubmit}>detect</button>
       </div>

   </div>

        </div>

    )
}

export default ImageLinkForm