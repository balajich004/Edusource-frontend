import React from 'react';
import "./About.css";
import { useLoaderData } from 'react-router-dom';

function About() {
    const data = useLoaderData(); // This will work as long as About is rendered in a Router with a loader

    return (
        <div className='about-container'>
            <h1>Our Team</h1>
            <div className="card-container">
                <div className="card card-1">
                    <div className="image-card">
                        <img src={data.avatar_url} alt={`${data.login}'s avatar`} id="card-img" />
                    </div>
                    <div className="crd-text">
                        <div className="card-user">Github username: {data.login}</div>
                        <div className="card-bio">{data.bio}</div>
                        <div className="fo-wrapper">
                            <div className="nof">No. of followers <br /> <div className='sub-nof'>{data.followers}</div></div>
                            <div className="nofing">No. of following <br /> <div className='sub-nofing'>{data.following}</div></div>
                        </div>
                    </div>
                </div>
                <div className="card card-1">
                    <div className="image-card">
                        <img src={data.avatar_url} alt={`${data.login}'s avatar`} id="card-img" />
                    </div>
                    <div className="crd-text">
                        <div className="card-user">Github username: {data.login}</div>
                        <div className="card-bio">{data.bio}</div>
                        <div className="fo-wrapper">
                            <div className="nof">No. of followers <br /> <div className='sub-nof'>{data.followers}</div></div>
                            <div className="nofing">No. of following <br /> <div className='sub-nofing'>{data.following}</div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/balajich004');
    if (!response.ok) {
        throw new Error('Failed to fetch GitHub user info');
    }
    return response.json(); // Ensure the response is returned properly for useLoaderData
};
