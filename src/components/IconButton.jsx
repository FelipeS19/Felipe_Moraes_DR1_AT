import React from 'react';
import { IconButton as MuiIconButton } from '@mui/material';
import PropTypes from 'prop-types';
import './IconButton.css';

const IconButton = ({ icon, onClick }) => {
    return (
        <MuiIconButton onClick={onClick} className="custom-icon-button">
            {icon}
        </MuiIconButton>
    );
};

IconButton.propTypes = {
    icon: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default IconButton;
