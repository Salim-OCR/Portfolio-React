import React from "react";

const SocialNetwork = () => {
  /*FONCTION ANIM*/

  const anim = () => {
    const icons = document.querySelectorAll(".social-network a");
    icons.forEach((link) => {
      link.addEventListener("mouseover", (e) => {
        link.style.transform = `translate(${e.offsetX - 20}px, ${
          e.offsetY - 13
        }px)`;
      });
      link.addEventListener("mouseleave", () => {
        link.style.transform = "";
      });
    });
  };
  return (
    <div className="social-network">
      <ul className="content">
        <a
          href="https://github.com/Salim-OCR?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
        >
          <li>
            <i className="fab fa-github"></i>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default SocialNetwork;
