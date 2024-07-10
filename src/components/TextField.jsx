import React from 'react';
import { TextField as MuiTextField } from '@mui/material';
import PropTypes from 'prop-types';
import './TextField.css';

const TextField = ({ label, type, value, onChange }) => {
    return (
        <MuiTextField
            label={label}
            type={type}
            value={value}
            onChange={onChange}
            className="custom-textfield"
            fullWidth
        />
    );
};

TextField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default TextField;
