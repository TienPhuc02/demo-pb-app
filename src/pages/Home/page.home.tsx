import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <Link to={"/login"}>
                Login
            </Link>
            <div>
                Sign Up
            </div>
        </div>
    );
};

export default HomePage;