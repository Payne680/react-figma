import styles from "./Aboutus1.module.css";
import React from "react";

const Aboutus1 = () => {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.aboutSubsection3}>
        <img
          className={styles.imagePlaceholderIcon}
        />
        <div className={styles.information}>
          <div className={styles.atAfricaWizzy}>
            At Africa Wizzy safari, we offer a wide range of tours and
            activities, including cultural and historical tours, wildlife
            safaris, mountain gorilla trekking, and more. Our experienced and
            knowledgeable guides will ensure that you have a safe and enjoyable
            experience while exploring the stunning landscapes and rich culture
            of Rwanda.
          </div>
        </div>
      </div>
      <div className={styles.aboutSubsection2}>
        <img
          className={styles.imagePlaceholderIcon1}
        />
        <div className={styles.information1}>
          <div className={styles.welcomeToAfrica}>
            Welcome to Africa Wizzy Safari, a leading tourism company based in
            Rwanda. We have been in business for over 5 years and are committed
            to providing top-quality tours and services to our clients. Our
            mission is to showcase the beauty and culture of Rwanda to visitors
            from around the world, and to contribute to the sustainable
            development of the country through responsible tourism practices.
          </div>
        </div>
      </div>
      <div className={styles.aboutSubsection1}>
        <img
          className={styles.imagePlaceholderIcon2}
        />
        <div className={styles.information1}>
          <div className={styles.welcomeToAfrica}>
            <p
              className={styles.weAreProud}
            >{`We are proud to have received numerous awards and accolades for our commitment to excellence, including the RDD award and the Excellence award. `}</p>
            <p className={styles.weAreProud}>&nbsp;</p>
            <p className={styles.weAreProud}>&nbsp;</p>
            <p className={styles.thankYouFor}>
              Thank you for choosing Africa Wizzy Safari for your travel needs
              in Rwanda. We look forward to welcoming you on one of our tours
              soon!
            </p>
          </div>
        </div>
      </div>
      <div className={styles.aboutUsHeader}>
        <div className={styles.aboutUsHeaderChild} />
        <b className={styles.welcomeToAfrica1}>
          Welcome to Africa Wizzy Safari
        </b>
      </div>
    </div>
  );
};

export default Aboutus1;
