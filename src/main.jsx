import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PostData } from './components/ContextPost.jsx';
import { Fetch, useFetch } from './components/ContextFetch.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Fetch>
          <PostData>
               <App /> 
          </PostData>
      </Fetch>
  </StrictMode>,
)
