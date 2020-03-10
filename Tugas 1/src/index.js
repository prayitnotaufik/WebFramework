import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import biodata from './biodata';
import BlogPost from './container/BlogPost';
import 'bootstrap/dist/css/bootstrap.min.css';


const Hello = () =>{
    return <p>Hello</p>
}

ReactDOM.render(<BlogPost/>, document.getElementById('content'));
// ReactDOM.render(<biodata/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
