import styles from "./Footer.module.css";
import vec5 from'../../Images/Group social icons.png'
import React from "react";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer1}>
        <div className={styles.background} />
        <div className={styles.menuList}>
          <div className={styles.contactUs}>Contact Us</div>
          <div className={styles.blog}>Blog</div>
          <div className={styles.ourTeam}>Our Team</div>
        </div>
        <div className={styles.menuList1}>
          <div className={styles.events}>Events</div>
          <div className={styles.gallery}>Gallery</div>
          <div className={styles.packages}>Packages</div>
          <div className={styles.aboutUs}>About Us</div>
        </div>
        <div className={styles.menuList2}>
          <div className={styles.destinations}>Destinations</div>
          <div className={styles.signinn}>signinn</div>
          <div className={styles.home}>Home</div>
          <div className={styles.testimonials}>Testimonials</div>
        </div>
        <div
          className={styles.loremIpsumIs}
        >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. `}</div>
      </div>
      <div className={styles.contactUs1}>
        <div className={styles.background1} />
        <div className={styles.copyrightAfricaWizzy}>
          Copyright Africa Wizzy Safari 2022
        </div>
        <div className={styles.ifYouHaveContainer}>
          <p className={styles.ifYouHaveAnyQuestionsOrW}>
            If you have any questions or would like to book a tour with us,
            please don't hesitate to contact us.
          </p>
          <p className={styles.ifYouHaveAnyQuestionsOrW}>&nbsp;</p>
          <p className={styles.ifYouHaveAnyQuestionsOrW}>
            Phone: +250 788 123 456
          </p>
          <p className={styles.ifYouHaveAnyQuestionsOrW}>
            {`Email: `}
            <a
              className={styles.inforwandatourismcom}
              href="mailto:info@rwandatourism.com"
              target="_blank"
            >
              <span className={styles.inforwandatourismcom1}>
                info@rwandatourism.com
              </span>
            </a>
            {` `}
          </p>
          <p className={styles.ifYouHaveAnyQuestionsOrW}>
            Address: Kigali, Rwanda
          </p>
        </div>
        <b className={styles.subscribeToOur}>Subscribe to our newspaper</b>
        <b className={styles.ifYouHave}>
          If you have any question, Let us help you!
        </b>
        <button className={styles.buttonIcon}>arrow</button>
        <div className={styles.textbox}>
          <div className={styles.textBox} />
          <div className={styles.inputYourEmail}>Input your email here</div>
        </div>
      </div>
      <img
        className={styles.groupSocialIcons}
        alt=""
        src="../group-social-icons7.svg"
      />
      <img
        className={styles.footerChild}
      />
    </div>
  );
};

export default Footer;
