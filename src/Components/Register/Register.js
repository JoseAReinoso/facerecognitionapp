import React from 'react';

//grabbed signin form from tachyons.io components http://tachyons.io/components/forms/sign-in/index.html
class Register extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email:'',
      password:'',
      name:''
    }
  }

  onEmailChange = (event) => {
    this.setState({email:event.target.value})
  }
  onPassWordChange = (event) => {
   this.setState({password:event.target.value})
  }
  onNameChange = (event) => {
    this.setState({name:event.target.value})
   }
   onSubmitRegister = () => {
    fetch('https://damp-brook-10306.herokuapp.com/register', {
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        email:this.state.email,
        password:this.state.password,
        name:this.state.name
      })
    })
    .then(response => response.json())
    .then(user => {
      if (user != 'Incorrect form validation'){
       this.props.loadUser(user)  
       this.props.onRouteChange('home')
      }
    })
    
  }

  render(){
    return (
      <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">
      
      <main className="pa4 black-80">
        <div className="measure center2">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="Name">Name</label>
        <input 
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="email" 
        name="Name"  
        id="Name"
        onChange={this.onNameChange}
        />
      </div>
              
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="Email">Email</label>
              <input 
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="Email" 
              name="Email"  
              id="Email"
              onChange={this.onEmailChange}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input 
              className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="password" 
              name="password"  
              id="password"
              onChange={this.onPassWordChange}
              />
            </div>
          </fieldset>
          <div className="">
            <input 
            onClick={this.onSubmitRegister}
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
            type="submit" 
            value="Sign up"/>
          </div>
        </div>
      </main>
      </article>
      
          )

  }
    
}

export default Register