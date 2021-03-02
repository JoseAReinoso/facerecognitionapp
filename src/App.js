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
import Signin from './Components/Signin/Signin'
import Register from './Components/Register/Register'




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
      imageUrl:'',
      box:{},
      route:'signin',
      isSignedIn:false
    }
  }
 componentDidMount() {
  fetch('http://localhost:3001/')
  .then(responsse => responsse.json())
  .then(data => console.log(data))
 }


  calculateFaceLocation = (data) => {
     const clarifaiFace = data
     //Get the image by DOM manipulation
     const image = document.getElementById('inputimage')
     //get that image width
     const width = Number(image.width)
     //get that image height
     const height = Number(image.height)
     //console.log("This is the width=", width,"This s the Height=",height )
     return {
       leftcol:clarifaiFace['left_col'] * width,
       topRow:clarifaiFace['top_row'] * height,
       rightCol:width - (clarifaiFace['right_col'] * width),
       bottomRow:height - (clarifaiFace["bottom_row"] * height)
     }
  }

  displayFacebox = (box) => {
    this.setState({box:box})
  }

  onInputChange = (event) => {
    this.setState({input:event.target.value})
  }
  updatingSetImgUrl= ()=> {
    this.setState({imageUrl:this.state.input})
  }

  onSubmit = ()=>{
    this.setState({imageUrl:this.state.input},this.updatingSetImgUrl)
    app.models.predict(Clarifai.FACE_DETECT_MODEL,
    this.state.input)
    .then( response =>  this.displayFacebox(this.calculateFaceLocation(response.outputs[0]['data']['regions'][0]["region_info"]['bounding_box']))
    .catch( error =>console.log("Error that im getting= ",error) )
 
    )

  }

  onRouteChange = (newRoute)=> {
    console.log(newRoute)
    if (newRoute === 'signout') {
      this.setState({isSignedIn:false})
    }else if( newRoute === 'home'){
      this.setState({isSignedIn:true})
    }
    this.setState({route:newRoute})
  }

  render(){
    const {isSignedIn,route,imageUrl, box } = this.state
    return (
      <div className="App">
        {/*create class and add css to prevent this from overwritting our app*/}
        <Particles className ="particles"
        params={particlesOptions}
        />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        {route === 'signin' || route === 'signout' // This signout value gets generated in the navivation component
          ?
          <div>
          <Logo/>
          <Signin  onRouteChange={this.onRouteChange}/>
          </div>

          : route === 'home'
          ?
          <div>
        <Logo/>
        <Rank/>
        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
        <FaceRecognition  box={box} imageUrl={imageUrl}/>

          </div>
          :
          <div>
            <Logo/>
            <Register onRouteChange={this.onRouteChange}/>
          </div>

        }

  
      </div>
    )
  }

}

export default App;
