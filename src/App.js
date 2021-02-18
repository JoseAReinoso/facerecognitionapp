import React, {Component} from 'react'
import './App.css';
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm'
import Rank from './Components/Rank/Rank'
//ill create the next components = Navigation, Logo, ImageLinkFrom, and facerecognition .
import Particles from 'react-particles-js';

const particlesOptions = {
particles:{
number:{
  value:80,
  density:{
    enable:true,
    value_area:800
  }
  
}


}

}

class App extends Component {
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
        <ImageLinkForm/>
      
        {/*
        
        <FaceRecognition/>*/}
      </div>
    )
  }

}

export default App;
