// Dependencies
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

// App
import reducers from './reducers';

// Components
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCUSapi18uiHbD1Fc_lksOkNqPAIrW_mug',
            authDomain: 'react-native-employees-ac7fd.firebaseapp.com',
            databaseURL: 'https://react-native-employees-ac7fd.firebaseio.com',
            projectId: 'react-native-employees-ac7fd',
            storageBucket: 'react-native-employees-ac7fd.appspot.com',
            messagingSenderId: '818742579473',
        });
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
