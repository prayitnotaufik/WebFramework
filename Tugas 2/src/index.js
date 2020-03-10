import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HelloComponent from './component/HelloComponent';
import HelloComp from './component/HelloComp';
import StateFullcomponent from './container/StateFullComponent';
import StateFullComponent from './container/StateFullComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogPost from "./container/BlogPost/BlogPost";
// import StateFullcomponent form './container/StateFullcomponent';

// const Helloword = ()=>{
//     return <p>ini adalah function component</p>
// }

// class Statefullcomponent extends React.Component{
//     render(){
//         return <p>ini adalah Statefull Component</p>
//     }
// }

ReactDOM.render(<BlogPost/>, document.getElementById('content'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
