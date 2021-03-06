import React from 'react';
import '../Signin/Signin.css'

//grabbed signin form from tachyons.io components http://tachyons.io/components/forms/sign-in/index.html
class Signin extends React.Component  {
  constructor(props){
    super(props)
    this.state = {
      signInEmail:'',
      signInPassword:'',
      errorMessage:''
    }
  }
  
 onEmailChange = (event) => {
   this.setState({signInEmail:event.target.value})
 }
 onPassWordChange = (event) => {
  this.setState({signInPassword:event.target.value})
 }

 onSubmitSignIn = () => {
   fetch('https://damp-brook-10306.herokuapp.com/signin', {
     method:'post',
     headers:{'Content-Type':'application/json'},
     body:JSON.stringify({
       email:this.state.signInEmail,
       password:this.state.signInPassword
     })
   })
   .then(response => response.json())
   .then(data => {
     console.log(data)
     if (data == 'wrong credentials'){
      this.setState({errorMessage:data})
      
     }else if(data == 'Missing Password or Email'){
      this.setState({errorMessage:data})

     }
     else {
      this.props.loadUser(data)
      this.props.onRouteChange('home')
       
     }
   })
   
 }



  render () {
   const {onRouteChange} = this.props
    return (
      <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">
    
       <main className="pa4 black-80">
        <div className="measure center2">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
             <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
               <input 
               onChange={this.onEmailChange} 
               className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
               type="email" 
               name="email-address"  
               id="email-address"/>
               </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
            <input 
            onChange={this.onPassWordChange} 
            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
            type="password" 
            name="password"  
            id="password"/>
          </div>
        </fieldset>
        <div className="">
          <input 
          onClick={this.onSubmitSignIn}
          className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
          type="submit" 
          value="Sign in"/>
        </div>
        <div className="lh-copy mt3">
          <p  onClick={()=>onRouteChange('register')} className="f5 link dim black db ph0 pointer">Register</p>
        </div>
        <p className="l b dark-red" >{this.state.errorMessage}</p>
      </div>
    </main>
    </article>
    
        )

  }

}

export default Signin