import React, { useState, useRef, useEffect } from 'react';
import styles from './ProfilePopup.module.css';

const Profile = () => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  const togglePopup = () => setOpen(prev => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <div className={styles.container} ref={containerRef}>
      <button className={styles.button} onClick={togglePopup}><img src="./public/Rafeeq/userpic.png" alt="profile" /></button>
      {open && (
        <div className={styles.popup}>
          <p className={styles.info}>John Doe</p>
          <button className={styles.logout} onClick={handleLogout} >Logout</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
