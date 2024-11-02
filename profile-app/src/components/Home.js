// src/components/Home.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        fetch('https://randomuser.me/api?results=5')
            .then(response => response.json())
            .then(data => setProfiles(data.results))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="text-center">Profile List</h1>
            <div className="row">
                {profiles.map((profile, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card mb-4">
                            <img src={profile.picture.large} className="card-img-top" alt={profile.name.first} />
                            <div className="card-body">
                                <h5 className="card-title">{profile.name.first} {profile.name.last}</h5>
                                <p className="card-text">{profile.email}</p>
                                <Link to={`/profile/${index}`} className="btn btn-primary">View Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
