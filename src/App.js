import React, {Component} from 'react'
import './App.css';
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm'
import Rank from './Components/Rank/Rank'
//ill create the next components = Navigation, Logo, ImageLinkFrom, and facerecognition .
import Particles from 'react-particles-js';
import Clarifai from 'clarifai'

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
      input:''
    }
  }
  onInputChange = (event) => {
    console.log(event.target.value)
  }
  onSubmit = ()=>{
    console.log('Click')
    app.models.predict("d02b4508df58432fbb84e800597b8959","https://www.incimages.com/uploaded_files/image/1920x1080/getty_962098266_200013332000928094_440161.jpg").then(
      function(response){
     console.log(response)
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
      
        {/*
        
        <FaceRecognition/>*/}
      </div>
    )
  }

}

export default App;
