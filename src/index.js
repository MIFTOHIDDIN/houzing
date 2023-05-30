import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './root';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RootContext from './context';


const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render(
  <React.StrictMode>
    <RootContext>

      <Root />
    </RootContext>
  </React.StrictMode>
);

