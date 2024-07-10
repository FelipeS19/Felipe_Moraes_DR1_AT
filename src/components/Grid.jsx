import React from 'react';
import { Grid as MuiGrid } from '@mui/material';
import PropTypes from 'prop-types';
import './Grid.css';

const Grid = ({ children }) => {
    return (
        <MuiGrid container spacing={2} className="custom-grid">
            {children}
        </MuiGrid>
    );
};

Grid.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Grid;
