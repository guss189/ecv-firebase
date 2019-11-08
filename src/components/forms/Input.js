import React from 'react';
import PropTypes from 'prop-types';
import { Item, Label, Input as InputNB } from 'native-base';

const Input = ({label, onChange, textarea}) => (
  <Item floatingLabel style={{marginTop: 20}}>
    <Label>{label}</Label>
    <InputNB
      onChangeText={(text) => onChange(text)}
      multiline={textarea}
    />
  </Item>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  textarea: PropTypes.bool
}

Input.defaultProps = {
  textarea: false
}

export default Input;
