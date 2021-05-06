import React,{Component} from "react"
import Router from "./Router"
//import "./components/@vuexy/rippleButton/RippleButton"

//import "react-perfect-scrollbar/dist/css/styles.css"
//import "prismjs/themes/prism-tomorrow.css"
import setHeader from "./utility/context/SetHeaders"
import { refreshToken, hideLoader } from "./redux/actions/auth/loginActions"
import { store } from "./redux/storeConfig/store"

class App extends Component {
  componentDidMount(){
    
    if (localStorage.length!==0 && localStorage.getItem('refresh-token') !== '') {
        store.dispatch(refreshToken(localStorage.getItem('refresh-token')));
    }
    else{
        store.dispatch(hideLoader())
        setHeader();
    }
    
  }
  render() {
    return (
      <Router />
    );
  }
}

export default App;


