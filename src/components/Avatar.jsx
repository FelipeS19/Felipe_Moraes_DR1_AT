import React from 'react';
import { Avatar as MuiAvatar } from '@mui/material';
import PropTypes from 'prop-types';
import '../components/Avatar.css';

const Avatar = ({ src, alt }) => {
  return (
    <MuiAvatar src={src} alt={alt} className="custom-avatar" />
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Avatar;
