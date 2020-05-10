import React from 'react';

const Input = (props) => {
  return (
    <div className="form-group">
      <label>{props.label}  : </label>
      <input name={props.name}
      className={props.errors ? "form-control is-invalid" : 'form-control'}
      onChange={props.onChange}
      type={props.type}/>
      <div className="invalid-feedback">
      {
        props.errors
      }
      </div>
    </div>
  )
}

export default Input;
