// Dependencies
import React from 'react';
import { Actions, Router, Scene } from 'react-native-router-flux';

// App
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
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
                        onRight={() => { Actions.employeeCreateScene(); }}
                    />
                    <Scene
                        key="employeeCreateScene"
                        component={EmployeeCreate}
                        title="Create Employee"
                    />
                    <Scene
                        key="employeeEditScene"
                        component={EmployeeEdit}
                        title="Edit Employee"
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;
