import React, { useState, useEffect } from "react";
import "./About.css";
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer";

function About() {
  const [data, setData] = useState({});
  const [surya,setSurya]=useState({});
  const [jaisai,setJaiSai]=useState({});// Initialize state

  
  useEffect(() => {
    const fetchGithubInfo = async () => {
      try {
        const response = await fetch("https://api.github.com/users/balajich004");
        if (!response.ok) {
          throw new Error("Failed to fetch GitHub user info");
        }
        const userData = await response.json();
        setData(userData); 
      } catch (error) {
        console.error("Error fetching GitHub info:", error);
      }
    };

    fetchGithubInfo();
  }, []); 

  useEffect(() => {
    const fetchGithubInfosurya = async () => {
      try {
        const response = await fetch("https://api.github.com/users/SuryaTeja275");
        if (!response.ok) {
          throw new Error("Failed to fetch GitHub user info");
        }
        const userData = await response.json();
        setSurya(userData); 
      } catch (error) {
        console.error("Error fetching GitHub info:", error);
      }
    };

    fetchGithubInfosurya();
  }, []); 

  useEffect(() => {
    const fetchGithubInfoJaiSai = async () => {
      try {
        const response = await fetch("https://api.github.com/users/2200090121jai");
        if (!response.ok) {
          throw new Error("Failed to fetch GitHub user info");
        }
        const userData = await response.json();
        setJaiSai(userData); 
      } catch (error) {
        console.error("Error fetching GitHub info:", error);
      }
    };

    fetchGithubInfoJaiSai();
  }, []);

  return (
    <>
      <Navbar />
      <div className="about-container">
        <h1>Our Team</h1>
        <div className="card-container">
          <div className="card card-1">
            <div className="image-card">
              <img
                src={data.avatar_url || ""}
                alt={`${data.login || "User"}'s avatar`}
                id="card-img"
              />
            </div>
            <div className="crd-text">
              <div className="card-user">Github username: {data.login || "N/A"}</div>
              <div className="card-bio">{data.bio || "No bio available"}</div>
              <div className="fo-wrapper">
                <div className="nof">
                  No. of followers <br />
                  <div className="sub-nof">{data.followers || 0}</div>
                </div>
                <div className="nofing">
                  No. of following <br />
                  <div className="sub-nofing">{data.following || 0}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card card-1">
            <div className="image-card">
              <img
                src={surya.avatar_url || ""}
                alt={`${surya.login || "User"}'s avatar`}
                id="card-img"
              />
            </div>
            <div className="crd-text">
              <div className="card-user">Github username: {surya.login || "N/A"}</div>
              <div className="card-bio">{surya.bio || "No bio available"}</div>
              <div className="fo-wrapper">
                <div className="nof">
                  No. of followers <br />
                  <div className="sub-nof">{surya.followers || 0}</div>
                </div>
                <div className="nofing">
                  No. of following <br />
                  <div className="sub-nofing">{surya.following || 0}</div>
                </div>
              </div>
            </div>
          </div>


          <div className="card card-1">
            <div className="image-card">
              <img
                src={jaisai.avatar_url || ""}
                alt={`${jaisai.login || "User"}'s avatar`}
                id="card-img"
              />
            </div>
            <div className="crd-text">
              <div className="card-user">Github username: {jaisai.login || "N/A"}</div>
              <div className="card-bio">{jaisai.bio || "No bio available"}</div>
              <div className="fo-wrapper">
                <div className="nof">
                  No. of followers <br />
                  <div className="sub-nof">{jaisai.followers || 0}</div>
                </div>
                <div className="nofing">
                  No. of following <br />
                  <div className="sub-nofing">{jaisai.following || 0}</div>
                </div>
              </div>
            </div>
          </div>


        </div>
        <h1>About Us</h1>
        <div className="about-us-container">
          Welcome to Edusource, an open-source platform dedicated to providing
          accessible knowledge for everyone. We believe that learning should be
          free, collaborative, and open to all. Our mission is to build a
          community-driven library of books where authors and readers can come
          together to share, read, and contribute to the world of literature
          and knowledge.
          <br />
          <br />
          Whether you're an author looking to publish your work or a reader
          searching for something new to explore, Edusource offers a space for
          you. Our platform is powered by open-source technology, ensuring
          transparency and fostering collaboration between contributors. Authors
          can upload their works, manage visibility settings, and engage with
          readers, while users can create reading lists, leave comments, and
          access a variety of genres.
          <br />
          <br />
          Join us on our journey to make learning and literature available to
          everyone, one book at a time!
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
