import React from 'react';
import PropTypes from 'prop-types';
import { FiLogOut } from 'react-icons/fi';

function Navigation({ onLogout, name }) {
  return (
    <nav className="navigation">
      <ul>
        <li><button onClick={onLogout}>{name} <FiLogOut /></button></li>
        
      </ul>
    </nav>
  )
}

Navigation.propTypes = {
  onLogout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Navigation;
