import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

class Error extends Component {
    render() {
        if (this.props.error === true) {
            return (
                <Alert color='danger'>
                    <span>{this.props.errorMessage}</span>
                </Alert>
            );
        }
        return null;
    }
}

export default Error;

Error.propTypes = {
    error       : PropTypes.bool.isRequired,
    errorMessage: PropTypes.string
};

Error.defaultPropTypes = {
    error       : false,
    errorMessage: ''
};