import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

const InputForm = ({
  className,
  id,
  type,
  name,
  value,
  placeholder,
  onChange,
  onFocus,
  input,
}) => {
  const classNames = classname('input-form', className);
  return (
    <Fragment>
      <input
        className={classNames}
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        {...input}
      />
    </Fragment>
  );
};

InputForm.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.oneOf(['text', 'number']),
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  input: PropTypes.object,
};

InputForm.defaultProps = {
  className: '',
  id: '',
  type: 'text',
  name: '',
  value: '',
  placeholder: '',
  onChange: () => {},
  onFocus: () => {},
  input: {},
};

export default InputForm;
