import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react'


createRoot(document.getElementById('root')).render(
  <Auth0Provider
      domain="dev-z84f1bu1dhj686n4.us.auth0.com"
      clientId="69114df476f0ae4d5025e1a5"
      authorizationParams={{
        audience: "https://dev-z84f1bu1dhj686n4.us.auth0.com/api/v2/",
        redirect_uri: window.location.origin
      }}
    >
    <App />
  </Auth0Provider>,
)
