import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, Card, CardSection } from './common';
import EmployeeForm from './EmployeeForm';
import { employeeCreate, employeeUpdate } from '../actions';

class EmployeeCreate extends Component {
    onButtonPress() {
        const {
            name,
            phone,
            shift,
        } = this.props;

        this.props.employeeCreate({ name, phone, shift: shift || 'monday' });
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const {
        name,
        phone,
        shift,
    } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeCreate, employeeUpdate })(EmployeeCreate);
