import React, { useEffect, useState } from 'react';
import Navbar from "../component/Navbar.js";
import Footer from "../component/Footer.js";
import Cards from "../component/Cards.js";
import Sidebar from "../component/Sidebar.js";
import axios from "axios";

import "./Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const getData = async () => {
     await axios
      .get('https://127.0.0.1:8000/api/posts')
      .then((data) => {
        setPosts(data.data['hydra:member']);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });

  }

  getData();
},
  []);
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="divCard">
            {posts.map(post => <Cards key={post.id} post={post} />)}
        </div>
          <div className="body">
            <Sidebar />
          </div>

        
      </div>
      <Footer />
    </>
  );
};

export default Home;
