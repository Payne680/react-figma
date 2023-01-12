import styles from "./Hero.module.css";
import React from "react";

function Hero () {
  return (
    <div className={styles.hero}>
      <img
        className={styles.imagePlaceholderIcon}/>
      <div className={styles.explore}>
        <div className={styles.container} />
        <div className={styles.button}>
          <button className={styles.clickHere}>Book Now</button>
        </div>
        <div className={styles.roomType}>
          <div className={styles.type}>
            <img
              className={styles.chevronBottomIcon}
              alt=""
              src=""
            />
            <b className={styles.akageraTour}>Akagera Tour</b>
          </div>
          <div className={styles.package}>Package</div>
        </div>
        <div className={styles.date}>
          <div className={styles.date1}>
            <img
              className={styles.chevronBottomIcon1}
              alt=""
              src=""
            />
            <b className={styles.april2021}>12 - 13 April 2021</b>
          </div>
          <div className={styles.date2}>Date</div>
        </div>
        <div className={styles.guest}>
          <div className={styles.adult}>
            <img
              className={styles.chevronBottomIcon2}
              alt=""
              src=""
            />
            <b className={styles.adult1}>2 Adult</b>
          </div>
          <div className={styles.guest1}>Guest</div>
        </div>
      </div>
      <div className={styles.discoverTheLand}>
        Discover the Land of a Thousand Hills
      </div>
      <b className={styles.weAreDedicatedContainer}>
        <p className={styles.weAreDedicated}>{`We are dedicated to `}</p>
        <p className={styles.providingTheBest}>
          providing the best travel experience.
        </p>
      </b>
    </div>
  );
};

export default Hero;
