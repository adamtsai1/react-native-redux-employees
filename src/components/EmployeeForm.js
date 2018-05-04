import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import { connect } from 'react-redux';

// Components
import { CardSection, Input } from './common';

// Actions
import { employeeUpdate } from '../actions';

class EmployeeForm extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Jane"
                        value={this.props.name}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="(555) 555-5555"
                        value={this.props.phone}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
                    />
                </CardSection>

                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerLabelStyle}>Shift</Text>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                    >
                        <Picker.Item label="Sunday" value="sunday" />
                        <Picker.Item label="Monday" value="monday" />
                        <Picker.Item label="Tuesday" value="tuesday" />
                        <Picker.Item label="Wednesday" value="wednesday" />
                        <Picker.Item label="Thursday" value="thursday" />
                        <Picker.Item label="Friday" value="friday" />
                        <Picker.Item label="Saturday" value="saturday" />
                    </Picker>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 20,
    }
};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
