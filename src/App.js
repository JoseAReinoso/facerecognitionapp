import React, {Component} from 'react'
import './App.css';
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm'
import Rank from './Components/Rank/Rank'
//ill create the next components = Navigation, Logo, ImageLinkFrom, and facerecognition .
import Particles from 'react-particles-js';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition'
import Signin from './Components/Signin/Signin'
import Register from './Components/Register/Register'

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

const initialState = {
  input:'',
  imageUrl:'',
  box:{},
  route:'signin',
  isSignedIn:false,
  user: {
    id:"",
    name:"",
    email:"",
    entries:0,
    joined: ""
  }
}

class App extends Component {
  constructor(){
    super()
    this.state = initialState
  }
 
  loadUser = (user) => {
    const {id,name,email,entries,joined} = user
    this.setState({user: {
      id:id,
      name:name,
      email:email,
      entries:entries,
      joined: joined
    }})
  }

 componentDidMount() {
  fetch('https://damp-brook-10306.herokuapp.com/')
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

   //we are calling the clarifai API to the backend from here
   fetch('https://damp-brook-10306.herokuapp.com/imageAPIcall', {
    method:'post',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      input:this.state.input,
    })
  })
  //make this to be json response
  .then(response => response.json())
    .then( response => {
      if (response) {
        fetch('https://damp-brook-10306.herokuapp.com/image', {
          method:'put',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({
            id:this.state.user.id,
          })
        })
        .then(response => response.json())
        .then(count => {
          //use Object.assign so we are especifically changing on specific key:value pair in the user object
          this.setState(Object.assign(this.state.user, {entries:count}))
        })
        .catch(error => console.log("error coming from image post/front end", error))
      }
      this.displayFacebox(this.calculateFaceLocation(response.outputs[0]['data']['regions'][0]["region_info"]['bounding_box']))
    })
    .catch( error =>console.log("Error that im getting= ",error) )
 

  }

  onRouteChange = (newRoute)=> {
    console.log(newRoute)
    if (newRoute === 'signout') {
      this.setState(initialState)
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
          <Signin  onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
          </div>

          : route === 'home'
          ?
          <div>
        <Logo/>
        <Rank userState = {this.state.user}/>
        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
        <FaceRecognition  box={box} imageUrl={imageUrl}/>

          </div>
          :
          <div>
            <Logo/>
            <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
          </div>

        }

  
      </div>
    )
  }

}

export default App;
