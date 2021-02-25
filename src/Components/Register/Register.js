import React from 'react';

//grabbed signin form from tachyons.io components http://tachyons.io/components/forms/sign-in/index.html
const Register = ({onRouteChange}) => {
    return (
<article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">

<main className="pa4 black-80">
  <form className="measure center2">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f1 fw6 ph0 mh0">Register</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" for="Name">Name</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="Name"  id="Name"/>
      </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" for="Email">Email</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="Email" name="Email"  id="Email"/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" for="password">Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
      </div>
    </fieldset>
    <div className="">
      <input 
      onClick={()=>onRouteChange('home')}
      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
      type="submit" 
      value="Sign up"/>
    </div>
  </form>
</main>
</article>

    )
}

export default Register