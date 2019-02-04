import React from 'react';
import { Link } from 'gatsby';

export default () => (
    <div
        style={{
            display: `flex`,
            flexDirection: `column`
        }}
    >
        {' '}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </div>
);
