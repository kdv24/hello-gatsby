import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/header';

export default () => (
    <div style={{ color: 'purple' }}>
        <Header headerText="Home" />
        <p>things happen here</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
);
