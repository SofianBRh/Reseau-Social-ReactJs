import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Cards.css";
import image from "./image/artificial-intelligence.jpg";
import axios from "axios";


const Header = ({post}) => {
 
  return (
    <>
      <div className="user">
        <FontAwesomeIcon icon={faUser} size="2xl"/>
        <h3 className="name">name firstname</h3>
      </div>
      <p className="message">
        {post.content}
      </p>
    </>
  );
};
const Img = () => {
  return (
    <img src={image} className="image " alt="image" width="100%" height="100" />
  );
};
const Reponses = () => {
  return (
    <>
      <div className="usercomment">
        <FontAwesomeIcon icon={faUser} size="xl" />
        <h3 className="namecomment"> name firstname</h3>
      </div>
      <p className="messagecomment">
        {" "}
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
      </p>
    </>
  );
};
const Search = () => {
    return (
        <div className="searchbar">
        <input id="searchbar" type="text"
        name="search" placeholder="Ajouter votre commentaire" >
        </input>
        <button className="button" type="submit">Envoyer</button>   
        </div>


    );
}
function Cards({post}) {
  return (
    <div className="card">
      <Header post={post} />
      <Img />
      <Reponses />
      <Reponses />
      <Search/ >
    </div>
  );
}
export default Cards;
