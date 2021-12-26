import React from 'react';

const ContactsList = ({ id, text }) => (
  <ul>
    <li key={id}>{text}</li>
  </ul>
);

export default ContactsList;
