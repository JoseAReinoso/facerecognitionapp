import React, {Component} from 'react'
import './App.css';
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
//ill create the next components = Navigation, Logo, ImageLinkFrom, and facerecognition .

class App extends Component {
  render(){
    return (
      <div >
        <Navigation/>
        <Logo/>
        {/*
        <ImageLinkForm/>
        <FaceRecognition/>*/}
      </div>
    )
  }

}

export default App;
