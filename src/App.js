// Dependencies
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

// App
import reducers from './reducers';

// Components
import Router from './Router';
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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
