import React from 'react';
import { Fab as MuiFab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import PropTypes from 'prop-types';
import '../components/Fab.css';

const Fab = ({onClick }) => {
  return (
    <MuiFab 
      color='primary'
      aria-label="add"
      onClick={onClick} 
      className="custom-fab">
      <AddIcon />
    </MuiFab>
  );
};

Fab.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default Fab;
