import {
    EMPLOYEE_UPDATE,
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: '',
};

export default (state = INITIAL_STATE, action) => {
    /* eslint-disable */
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            return {...state, [action.payload.prop]: action.payload.value };

        default:
            return state;
    }
    /* eslint-enable */
};
