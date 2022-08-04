import React from "react";

import Header from "./Header";
import banerimg from "./images/banerimg.jpg";
let myProject = [
  {
    name: "To-do List",
    img: banerimg,

    url: "https://fatihyazicioglu.github.io/To-Do-List/",
  },
  {
    name: "123123",
    img: "123123",
    url: "12313",
  },
];

function Projects() {
  return (
    <div>
      <Header />
      <div className="container">
        {myProject.map((item, i) => (
          <span key={i}>
            <h1>{item.name}</h1>
            <div className="image">
              <img src={item.img} alt="" />
            </div>
            <a rel="noreferrer" target="_blank" href={item.url}>Go to My Github</a>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Projects;
