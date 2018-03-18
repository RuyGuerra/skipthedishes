import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();

const rootApp = (
	<MuiThemeProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
	</MuiThemeProvider>
);


ReactDOM.render(rootApp, document.getElementById('root'));
registerServiceWorker();
