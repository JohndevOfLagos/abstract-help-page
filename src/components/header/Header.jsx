import React from "react";
import "./Header.scss"
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li className="left-nav">
            <Link className="brand-logo">
            <Icon icon="cib:abstract" />
               Abstract
            </Link>
            <Link>
            <Icon icon="vaadin:line-v" />
            </Link>
            <Link>
               Help Center
            </Link>
          </li>
          <li className="right-nav">
            <button>Submit a request</button>
            <button>Sign in</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
