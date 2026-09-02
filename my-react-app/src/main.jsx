import { createRoot } from 'react-dom/client'
import Auth from './Auth.jsx';
import { StrictMode } from 'react';
import './index.css';

createRoot(document.getElementById('root')).render(
<StrictMode>
  <Auth />
</StrictMode>
)
