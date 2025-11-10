import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react'


const redirectUri =
  import.meta.env.MODE === 'production'
    ? 'https://projeto-software-exercicio-front-20-two.vercel.app'
    : window.location.origin;

createRoot(document.getElementById('root')).render(
  <Auth0Provider
      domain="dev-z84f1bu1dhj686n4.us.auth0.com"
      clientId="UWryLd7IqLiLKWTGKToRLhymhNJEvJ64"
      cacheLocation="localstorage"
      authorizationParams={{
        redirect_uri: redirectUri
      }}
    >
    <App />
  </Auth0Provider>,
)
