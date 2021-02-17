import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

const TextInfo = ({ className, children }) => {
  const classNames = classname('text-info', className);
  return (
    <p className={classNames}>{children}</p>
  )
}

TextInfo.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

TextInfo.defaultProps = {
  className: '',
  children: {},
};

export default TextInfo;
