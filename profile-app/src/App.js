// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProfileDetails from './components/ProfileDetails';

const App = () => {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        fetch('https://randomuser.me/api?results=5')
            .then(response => response.json())
            .then(data => setProfiles(data.results))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile/:id" element={<ProfileDetails profiles={profiles} />} />
            </Routes>
        </Router>
    );
};

export default App;

