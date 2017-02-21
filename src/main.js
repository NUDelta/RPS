import React from 'react';
import ReactDOM from 'react-dom';
import SiteRoutes from './components/SiteRoutes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <SiteRoutes />
  </MuiThemeProvider>
);

window.onload = () => {
  ReactDOM.render(<App />, document.getElementById('main'));
};