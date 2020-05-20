import React from 'react';

import { FormInputContainer } from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <FormInputContainer>
    <input onChange={handleChange} {...otherProps} />
    {label ? <label className={`${otherProps.value.length ? 'shrink' : ''}`}>{label}</label> : null}
  </FormInputContainer>
);

export default FormInput;
