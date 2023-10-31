import React from "react";
import "./CardButtons.scss";

import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export const CardButtons = () => {
  return (
    <div className="card-wrapper">
      <Link className="card">
      <Icon icon="bx:git-branch" />
        <div className="card-detials">
          <h1>Branches</h1>
          <p>
            Abstract Branches let you manage, version, and document your design
            in one place.
          </p>
          <Link>
            Learn More.
            <Icon icon="ic:twotone-arrow-right-alt" />
          </Link>
        </div>
      </Link>
      <Link className="card">
      <Icon icon="vaadin:users" />
        <div className="card-detials">
          <h1>Manage your account</h1>
          <p>
            configure your account settings, such has your email, profile
            details, and password.
          </p>
          <Link>
            Learn More.
            <Icon icon="ic:twotone-arrow-right-alt" />
          </Link>
        </div>
      </Link>
      <Link className="card">
      <Icon icon="vaadin:puzzle-piece" hFlip={true} />
        <div className="card-detials">
          <h1>Manage organizations, teams and projects</h1>
          <p>
          Use Abstract organizations, teams, and projects to organize your people and your work.
          </p>
          <Link>
            Learn More.
            <Icon icon="ic:twotone-arrow-right-alt" />
          </Link>
        </div>
      </Link>
      <Link className="card">
      <Icon icon="gg:dollar" />
        <div className="card-detials">
          <h1>Manage billing</h1>
          <p>
          Change subscriptions and payment details.
          </p>
          <Link>
            Learn More.
            <Icon icon="ic:twotone-arrow-right-alt" />
          </Link>
        </div>
      </Link>
      <Link className="card">
      <Icon icon="mdi:key-variant" />
        <div className="card-detials">
          <h1>Authenticate to Abstract</h1>
          <p>
          Set up and configure SSO, SCIM, and Just-in-Time provisioning.
          </p>
          <Link>
            Learn More.
            <Icon icon="ic:twotone-arrow-right-alt" />
          </Link>
        </div>
      </Link>
      <Link className="card">
      <Icon icon="ph:chat-dots-fill" />
        <div className="card-detials">
          <h1>Abstract support</h1>
          <p>
          Get in touch with a human.
          </p>
          <Link>
            Learn More.
            <Icon icon="ic:twotone-arrow-right-alt" />
          </Link>
        </div>
      </Link>
    </div>
  );
};
