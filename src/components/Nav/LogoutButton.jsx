import React from 'react';
import Button from '../Button/Button';

export default (props) => (
  <div>
    <Button onClick={() => props.auth.logout()}>Logout</Button>
  </div>
);
