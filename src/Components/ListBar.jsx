import React from "react";
import "./ListBar.css";

export const ListBar = ({ list, active }) => {
  if (!active) {
    return null;
  }
  return (
    <div className="list-container">
      <ul className="list">
        {list.map((value) => {
          return (
            <li className="list-option" key={value.title + value.publisher}>
              <a
                className="list-option-link"
                href={value.link}
                target="_blank"
                key={value.title + value.link}
                onClick={() => console.log(value.link)}
              >
                <h2 className="list-option-title">{value.title}</h2>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
