// src/components/ProfileDetails.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProfileDetails = ({ profiles }) => {
    const { id } = useParams();
    const profile = profiles[id];

    if (!profile) {
        return <h2>Profile not found</h2>;
    }

    return (
        <div className="container mt-5">
            <h1>{profile.name.first} {profile.name.last}</h1>
            <img src={profile.picture.large} alt={profile.name.first} className="img-fluid" />
            <h3>Contact Details</h3>
            <p>Email: {profile.email}</p>
            <p>Phone: {profile.phone}</p>
            <p>Location: {profile.location.city}, {profile.location.country}</p>
            <Link to="/" className="btn btn-secondary">Back to Home</Link>
        </div>
    );
};

export default ProfileDetails;
