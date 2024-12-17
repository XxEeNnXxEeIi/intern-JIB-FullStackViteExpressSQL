import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-ui-kit/css/mdb.min.css';
import 'jqwidgets-scripts/jqwidgets/styles/jqx.base.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
