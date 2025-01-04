import { useState } from 'react';
import './Input.css';

const Input = (props) => {
  const { type = 'text' } = props;

  const handleChange = (e) => {
    props.setValue(e.target.value);
  };

  return (
    <div className={`form__input form__input--${type}`}>
      <label>{props.title}</label>
      <input
        placeholder={props.placeholder}
        required={props.required}
        data={props.data}
        onChange={handleChange}
        type={type}
      />
    </div>
  );
};

export default Input;
