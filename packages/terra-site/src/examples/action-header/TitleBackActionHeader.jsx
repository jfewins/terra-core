/* eslint-disable no-alert */
import React from 'react';
import ActionHeader from '../../../../terra-action-header'; // TODO: Resolve paths

const ActionHeaderExample = () => (
  <div>
    <br />
    <ActionHeader
      title="Action Header"
      onBack={() => alert('You clicked back!')}
    />
    <br />
  </div>
);

export default ActionHeaderExample;
/* eslint-enable no-alert */
