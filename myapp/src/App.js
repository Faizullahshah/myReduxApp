import React, {Component} from "react";
import {View, Text} from "react-native";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "./reducers"
import firebase from "firebase";
import Loginform from "./components/Loginform";

// import console = require("console");

class App extends Component {
  componentWillMount(){
    const firebaseConfig = {
      apiKey: "AIzaSyAh6sEbxd15Wop_Gxd7oc13riP_si8T6lw",
      authDomain: "rnapp-auth-class-fa170006.firebaseapp.com",
      databaseURL: "https://rnapp-auth-class-fa170006.firebaseio.com",
      projectId: "rnapp-auth-class-fa170006",
      storageBucket: "rnapp-auth-class-fa170006.appspot.com",
      messagingSenderId: "861197230344",
      appId: "1:861197230344:web:65f978b7cc318793"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  render(){
    return(
      <Provider store={createStore(reducers)}>
        <View>
            <Text>Bismillah Redux Manager Project</Text>
            <Loginform/>
        </View>
      </Provider>
    );
  }


}

export default App;