import React from "react";
import "./style.css";
import logo from "../../assets/logo.png";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";

const data = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    img: icon1,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet",
    img: icon2,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet",
    img: icon3,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
  },
];

const Home = () => {
  return (
    <div className="container">
      <div className="sideBar">
        <ul>
          <li style={{color: "white"}}>Home</li>
          <li>Service</li>
          <li>News</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="con">
        <div className="content">
          <img src={logo} alt="Logo" className="logo"></img>
          <div className="con1">
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tristique consequat placerat. Vestibulum auctor pellentesque sem,
              eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam
              facilisis, ligula in mattis sodales, augue justo tristique nulla,
              sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
              mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
              convallis. Quisque suscipit maximus vestibulum. Phasellus congue
              mollis orci, sit amet luctus augue tristique eu. Donec vulputate
              odio neque, sed semper turpis pellentesque a.
            </p>
          </div>
          <div className="con2">
            {data.map((item) => (
              <div className="column" key={item.id}>
                <h3>{item.title}</h3>
                <img src={item.img} alt="Logo" className="icon"></img>
                <p style={{marginRight: "20px"}}>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="line"></div>
        <div className="copyright">Copyright © 2023</div>
      </div>
    </div>
  );
};

export default Home;
