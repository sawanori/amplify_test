import React from 'react'
import logo from './S__2277548.jpg';
import { withAuthenticator, AmplifySignOut,AmplifySignIn } from '@aws-amplify/ui-react'
const App = () => {
  return (
    <div>
      <AmplifySignOut />
      <h1>
        シロ
      </h1>
      <img src={logo} alt="Logo" />
  
    </div>
  )
}

export default withAuthenticator(App);
