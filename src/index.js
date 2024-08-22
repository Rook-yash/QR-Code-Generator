import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
import Name from './Name'
import App from './App'

const root = createRoot(document.querySelector('.root'));

root.render(
  <>
  <Name />
  <App />
  </>
)