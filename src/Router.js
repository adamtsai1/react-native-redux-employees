// Dependencies
import React from 'react';
import { Actions, Router, Scene } from 'react-native-router-flux';

// App
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeList from './components/EmployeeList';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="authFlow" initial>
                    <Scene key="loginScene" component={LoginForm} title="Please Log In" />
                </Scene>

                <Scene key="mainFlow">
                    <Scene
                        key="employeeListScene"
                        component={EmployeeList}
                        initial
                        title="Employees"
                        rightTitle="Add"
                        onRight={() => { Actions.employeeDetailScene(); }}
                    />
                    <Scene
                        key="employeeDetailScene"
                        component={EmployeeCreate}
                        title="Create Employee"
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;
