// src/pages/Home.js
import React, { useState } from 'react';
import Typography from '../components/Typography';
import Navbar from '../components/Navbar';
import './Home.css';

const Home = () => {

    return (
        <div className="home-container">
            <div className="home-content">
                <Typography variant="h4" text="Seja bem vindo a Quantum tecnology " />
                <Typography variant="body1" text="Central de funcionarios " />


            </div>
        </div>
    );
};

export default Home;
