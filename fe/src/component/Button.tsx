import * as React from 'react';

const c = console;
const handleClick = () => c.log('button Clicked');

const Button = () => <button name="Name" title="title" onClick={handleClick} />;

export default Button;
