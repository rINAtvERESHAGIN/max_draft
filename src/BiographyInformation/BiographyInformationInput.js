import React from "react";
import { Input } from 'antd';

const BiographyInformationInput = props => {
  const {value} = props;
  const {onChange} = props;
  const {placeholder} = props;
  const {disabled} = props;

  return (
    <>
      <Input placeholder={placeholder}
             value={value}
             onChange={onChange}
             disabled={disabled}
      />
      </>
  )
};
export default BiographyInformationInput;
