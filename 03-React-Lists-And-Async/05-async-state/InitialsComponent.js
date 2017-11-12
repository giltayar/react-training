import React from 'react';

export default function InitialsComponent(props) {
  const { name } = props;
  const [firstName, lastName] = name.split(' ');

  return (
    <div>(otherwise known as: {firstName[0].toUpperCase()} {lastName[0].toUpperCase()})</div>
  );
}
