import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

export function InputComponent (props){
  return (
    <Form>
      <FormGroup>
        <Label for={props.name}>{props.label}</Label>
        <Input
          type={props.type}
          name={props.name}
          id={props.name}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      </FormGroup>
    </Form>
  );
};
