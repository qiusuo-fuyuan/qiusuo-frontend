import { Footer } from 'AppComponents/Footer';
import { Header } from 'AppComponents/Header';
import { LoginForm } from 'AppComponents/LoginForm';
import desktop from 'Assets/desktop.png';
import React from 'react';
import './scss/index.scss';

export const HomePage:React.FC = () => {
  return (
    <>
      <Header />
      <div className="container-body">
        <div>
          <img className="container-body-coolDesktop" src={desktop} alt="desktop" />
        </div>
        <LoginForm />
      </div>
      <Footer />
    </>
  );
};