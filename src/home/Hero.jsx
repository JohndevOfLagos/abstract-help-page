import React from "react";
import { Icon } from "@iconify/react";
import "./Hero.scss";

export const Hero = () => {
  return (
    <div className="Hero-wrapper">
      <div className="Hero">
      <div className="hero_innner">
        <h1>How can we help you?</h1>
        <div className="input-group">
          <input 
          type="text" 
          placeholder="Search"
          maxLength={78}
          />
          <button>
          <Icon icon="heroicons:arrow-right-20-solid" />
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};
