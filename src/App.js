import React, {Component} from 'react'
import './App.css';
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm'
import Rank from './Components/Rank/Rank'
//ill create the next components = Navigation, Logo, ImageLinkFrom, and facerecognition .
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition'

const app = new Clarifai.App({
  apiKey: '2c97dd3f6b2747a4b0e03c8718905e28'
 });

const particlesOptions = {
particles:{
number:{
  value:70,
  density:{
    enable:true,
    value_area:800
  }
 }
},
interactivity:{
detect_on:"canvas",
events:{
  onhover:{
    enable:true,
    mode:"repulse"
  }
}
}
}

class App extends Component {
  constructor(){
    super()
    this.state ={
      input:'',
      imageUrl:''
    }
  }
  onInputChange = (event) => {
    this.setState({input:event.target.value})
  }
  onSubmit = ()=>{
    this.setState({imageUrl:this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL,
    this.state.input)
    .then(
      function(response){
     console.log(response.outputs[0]['data']['regions'][0]["region_info"]['bounding_box'])
      },
      function(error){
     console.log("Error that im getting= ",error)
      }

    )

  }

  render(){
    return (
      <div className="App">
        {/*create class and add css to prevent this from overwritting our app*/}
        <Particles className ="particles"
        params={particlesOptions}
        />
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      
      
        
      </div>
    )
  }

}

export default App;
