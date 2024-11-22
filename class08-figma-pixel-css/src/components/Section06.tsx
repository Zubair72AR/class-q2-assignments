"use client";
import { useState } from "react";
import HeadingBr from "./HeadingBr";
import Para from "./Para";
import { FiCheckCircle } from "react-icons/fi";

export default function Section06() {
  const [isActiveFree, setIsActiveFree] = useState(false);
  const [isActivePersonal, setIsActivePersonal] = useState(true);
  const [isActiveOrganization, setIsActiveOrganization] = useState(false);

  const eventHandlerFree = () => {
    setIsActiveFree(true);
    setIsActivePersonal(false);
    setIsActiveOrganization(false);
  };

  const eventHandlerPersonal = () => {
    setIsActiveFree(false);
    setIsActivePersonal(true);
    setIsActiveOrganization(false);
  };

  const eventHandlerOrganization = () => {
    setIsActiveFree(false);
    setIsActivePersonal(false);
    setIsActiveOrganization(true);
  };

  return (
    <div className="section06-container">
      <div className="header">
        <HeadingBr headText="Choose Your Plan" headClass="heading" />
        <Para
          paraText="Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you."
          paraClass="description"
        />
      </div>
      <div className="plans-container">
        <div
          className={`plan-card ${isActiveFree ? "active" : ""}`}
          onClick={eventHandlerFree}
        >
          <div className="plan-header">
            <p className="plan-title">Free</p>
            <p className={`plan-price ${isActiveFree ? "active-price" : ""}`}>
              $0
            </p>
            <p className="plan-description">
              Capture ideas and find them quickly
            </p>
          </div>
          <div className="features-list">
            <p>
              <FiCheckCircle className="check-icon" /> Sync unlimited devices
            </p>
            <p>
              <FiCheckCircle className="check-icon" /> 10 GB monthly uploads
            </p>
            <p>
              <FiCheckCircle className="check-icon" /> 200 MB max. note size
            </p>
            <p>
              <FiCheckCircle className="check-icon" /> Customize Home dashboard
            </p>
            <p>
              <FiCheckCircle className="check-icon" /> Connect primary Google
              Calendar
            </p>
            <p>
              <FiCheckCircle className="check-icon" /> Add due dates, reminders
            </p>
          </div>
          <button
            className={`get-started-button ${
              isActiveFree ? "active-button" : ""
            }`}
            onClick={eventHandlerFree}
          >
            Get Started
          </button>
        </div>
        <div
          className={`plan-card ${isActivePersonal ? "active" : ""}`}
          onClick={eventHandlerPersonal}
        >
          <div className="plan-header">
            <p className="plan-title">Personal</p>
            <p
              className={`plan-price ${isActivePersonal ? "active-price" : ""}`}
            >
              $11.99
            </p>
            <p className="plan-description">
              Capture ideas and find them quickly
            </p>
          </div>
          <div className="features-list">
            <p>
              <FiCheckCircle className="check-icon" /> Sync unlimited devices
            </p>
            <p>
              <FiCheckCircle className="check-icon" /> 10 GB monthly uploads
            </p>
            <p>
              <FiCheckCircle className="check-icon" /> 200 MB max. note size
            </p>
            <p>
              <FiCheckCircle className="check-icon" /> Customize Home dashboard
            </p>
            <p>
              <FiCheckCircle className="check-icon" /> Connect primary Google
              Calendar
            </p>
            <p>
              <FiCheckCircle className="check-icon" /> Add due dates, reminders
            </p>
          </div>
          <button
            className={`get-started-button ${
              isActivePersonal ? "active-button" : ""
            }`}
            onClick={eventHandlerPersonal}
          >
            Get Started
          </button>
        </div>
        <div
          className={`plan-card ${isActiveOrganization ? "active" : ""}`}
          onClick={eventHandlerOrganization}
        >
          <div className="plan-header">
            <p className="plan-title">Organization</p>
            <p
              className={`plan-price ${
                isActiveOrganization ? "active-price" : ""
              }`}
            >
              $49.99
            </p>
            <p className="plan-description">
              Capture ideas and find them quickly
            </p>
          </div>
          <div className="features-list">
            <p>
              <FiCheckCircle className="check-icon" /> Sync unlimited devices
            </p>
            <p>
              <FiCheckCircle className="check-icon" /> 10 GB monthly uploads
            </p>
            <p>
              <FiCheckCircle className="check-icon" /> 200 MB max. note size
            </p>
            <p>
              <FiCheckCircle className="check-icon" /> Customize Home dashboard
            </p>
            <p>
              <FiCheckCircle className="check-icon" /> Connect primary Google
              Calendar
            </p>
            <p>
              <FiCheckCircle className="check-icon" /> Add due dates, reminders
            </p>
          </div>
          <button
            className={`get-started-button ${
              isActiveOrganization ? "active-button" : ""
            }`}
            onClick={eventHandlerOrganization}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
