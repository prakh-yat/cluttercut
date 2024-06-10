import React from 'react';
import styles from './header.module.css'
// import Image from

const Header = () => {
  return (
    <div className={styles.container}>
    <div className={styles.main}>
      <div className={styles["logo"]}> 
        <img src="/logo.svg" alt="Logo" />
      </div>
      <div className={styles["items"]}>
        <a href="#">Features</a>
        <a href="#">Integrations</a>
        <a href="#">Pricing</a>
        <a href="#">About Us</a>
      </div>
      <div className={styles.buttons}>
        <div className={styles["signup"]}>Sign up</div>
        <div className={styles["demo"]}>Login</div>
      </div>
    </div>
    </div>
    // <header className="bg-white fixed top-8 left-1/3 transform -translate-x-1/4 rounded-full shadow-lg z-10 px-2">
    //   <div className="container flex items-center justify-center">
    //     {/* Logo */}
    //     <div className="flex items-center mr-32 ml-8">
    //       <img src="/logo.svg" alt="Logo" className="h-5 mr-4" />
    //     </div>
    //     {/* Navigation Menu */}
    //     <nav className="hidden md:flex space-x-8 mr-8">
    //       <a href="#features" className="text-secondary hover:text-primary">
    //         Features
    //       </a>
    //       <a href="#integrations" className="text-secondary hover:text-primary">
    //         Integrations
    //       </a>
    //       <a href="#pricing" className="text-secondary hover:text-primary">
    //         Pricing
    //       </a>
    //       <a href="#about" className="text-secondary hover:text-primary">
    //         About Us
    //       </a>
    //     </nav>
    //     {/* Get a Demo Button */}
    //     <button className="bg-primary text-white py-2 px-5 md:px-8 rounded-full hover:shadow-md transition duration-300 my-2">
    //       Log in
    //     </button>
    //   </div>
    // </header>
  );
};

export default Header;
