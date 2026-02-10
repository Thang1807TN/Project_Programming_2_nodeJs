import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./HomePage.module.scss";
import logo from "../../assets/images/logo.svg";
import { withRouter } from "react-router-dom";

// Hero
import heroLarge from "../../assets/images/hero-large.jpg";
import heroSmall from "../../assets/images/hero-small.jpg";

// Service
import serviceImg from "../../assets/images/service-img.jpg";
import serviceIcon from "../../assets/images/service-icon.svg";

// Work
import work1 from "../../assets/images/work1.svg";
import work2 from "../../assets/images/work2.svg";
import work3 from "../../assets/images/work3.svg";

// About
import about1 from "../../assets/images/about1.png";
import about2 from "../../assets/images/about2.png";

// Dentist
import dentist1 from "../../assets/images/dentist1.png";
import dentist2 from "../../assets/images/dentist2.png";
import dentist3 from "../../assets/images/dentist3.png";
import dentist4 from "../../assets/images/dentist4.png";

// Blog
import blog1 from "../../assets/images/blog1.jpg";
import blog2 from "../../assets/images/blog2.jpg";

// Icons
import prevIcon from "../../assets/images/previous-svgrepo-com.svg";
import nextIcon from "../../assets/images/next-svgrepo-com.svg";
import appleLogo from "../../assets/images/apple-logo.svg";
class HomePage extends Component {
  render() {
    return (
      <div className={styles.app}>
        {/* HEADER */}
        <header className={styles.header}>
          <div className={styles.container}>
            <div className={styles["header-top"]}>
              <div className={styles.logo}>
                <img
                  src={logo}
                  alt="Shine Smile"
                  className={styles.logo__icon}
                />
                <div className={styles.logo__name}>
                  <div className={styles["logo__name--shine"]}>Shine</div>
                  <div className={styles["logo__name--smile"]}>Smile</div>
                </div>
              </div>

              <nav className={styles.nav}>
                <ul className={styles.navbar__list} id="navbar__list--pc">
                  <li className={styles.navbar__item}>
                    <a
                      href="#!"
                      className={`${styles.navbar__link} ${styles["navbar__link--active"]}`}
                    >
                      Home
                    </a>
                  </li>
                  <li className={styles.navbar__item}>
                    <a href="#!" className={styles.navbar__link}>
                      Services
                    </a>
                  </li>
                  <li className={styles.navbar__item}>
                    <a href="#!" className={styles.navbar__link}>
                      About
                    </a>
                  </li>
                  <li className={styles.navbar__item}>
                    <a href="#!" className={styles.navbar__link}>
                      Doctor
                    </a>
                  </li>
                </ul>
              </nav>

              <div className={styles.header__action}>
                <a
                  href="#!"
                  className={styles["header__action--login"]}
                  onClick={() => this.props.history.push("/login")}
                >
                  Log In
                </a>
                <a
                  href="#!"
                  className={`${styles.btn} ${styles["header__action--signup"]}`}
                >
                  Sign Up
                </a>
              </div>
            </div>

            {/* HERO */}
            <div className={styles.hero}>
              <div className={styles.hero__content}>
                <h1 className={styles["hero__content--heading"]}>
                  Exceptional dental care for all ages.
                </h1>
                <p className={styles["hero__content--desc"]}>
                  Exceptional dental care for all ages. Your great smile begins
                  with a great dentist.
                </p>
                <div className={styles.hero__action}>
                  <a
                    href="#!"
                    className={`${styles.btn} ${styles["hero__action--btn"]}`}
                  >
                    Book Online
                  </a>
                  <a href="#!" className={styles["hero__action--phone"]}>
                    or call (123) 456-7890
                  </a>
                </div>
              </div>

              <div className={styles.hero__media}>
                <img
                  src={heroLarge}
                  className={`${styles.hero__img} ${styles["hero__img--large"]}`}
                />
                <img
                  src={heroSmall}
                  className={`${styles.hero__img} ${styles["hero__img--small"]}`}
                />
              </div>
            </div>
          </div>
        </header>

        <main>
          {/* SERVICE */}
          <section className={styles.service}>
            <div className={styles.container}>
              <div className={styles["service-top"]}>
                <h2
                  className={`${styles.service__heading} ${styles.section__heading}`}
                >
                  Our services
                </h2>
                <p
                  className={`${styles.service__desc} ${styles.section__desc}`}
                >
                  Exceptional dental care for all ages. Your great smile begins
                  with a great dentist.
                </p>
              </div>

              <div className={styles["service-bottom"]}>
                <div className={styles.service__row}>
                  <figure>
                    <img src={serviceImg} className={styles.service__img} />
                  </figure>

                  <div className={styles.service__name}>
                    <ul className={styles.service__list}>
                      {[1, 2, 3].map((i) => (
                        <li key={i} className={styles.service__item}>
                          <figure>
                            <img
                              src={serviceIcon}
                              className={styles.service__icon}
                            />
                          </figure>
                          <figcaption className={styles["service__item--desc"]}>
                            <p className={styles["service__item--heading"]}>
                              {i === 1
                                ? "Oral Surgery"
                                : i === 2
                                  ? "Wisdom Teeth Removal"
                                  : "Preventative Dentistry"}
                            </p>
                            <p className={styles["service__item--detail"]}>
                              Everything you expect and then some.
                            </p>
                            <p className={styles["service__item--function"]}>
                              Cleanings, fillings, and x-rays.
                            </p>
                          </figcaption>
                        </li>
                      ))}
                    </ul>

                    <div className={styles["service__btn--box"]}>
                      <a
                        href="#!"
                        className={`${styles.btn} ${styles.service__btn}`}
                      >
                        All Services
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* WORK */}
          <section className={styles.work}>
            <div className={styles.container}>
              <h2 className={styles.section__heading}>How it works</h2>
              <p className={styles.section__desc}>
                Exceptional dental care for all ages. Your great smile begins
                with a great dentist.
              </p>

              <div className={styles.work__list}>
                {[work1, work2, work3].map((icon, i) => (
                  <section key={i} className={styles.work__item}>
                    <figure>
                      <img src={icon} className={styles.work__icon} />
                    </figure>
                    <h4 className={styles["work__item--name"]}>
                      {i === 0
                        ? "Search doctor"
                        : i === 1
                          ? "Find best doctor"
                          : "Get treatment"}
                    </h4>
                    <p className={styles["work__item--desc"]}>
                      Search a doctor by education, qualifications or
                      experience.
                    </p>
                    <a href="#!" className={styles["work__item--learnmore"]}>
                      Learn More
                    </a>
                  </section>
                ))}
              </div>
            </div>
          </section>

          {/* ABOUT */}
          <section className={styles.about}>
            <div className={styles.container}>
              <div className={styles.about__main}>
                <div className={styles.about__image}>
                  <img src={about1} className={styles["about__img--large"]} />
                  <img src={about2} className={styles["about__img--small"]} />
                </div>

                <div className={styles.about__content}>
                  <h2 className={styles.section__heading}>
                    Take back your smile with shine.
                  </h2>
                  <p
                    className={`${styles.section__desc} ${styles.about__desc}`}
                  >
                    If you’re missing multiple teeth due to decay, injury, or
                    the natural aging process, dentures might be the perfect
                    solution.
                  </p>
                  <a href="#!" className={`${styles.btn} ${styles.about__btn}`}>
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* OUR TEAM */}
          <section className={styles["our-team"]}>
            <div className={styles.container}>
              <div className={styles["our-team__head"]}>
                <h2
                  className={`${styles.section__heading} ${styles["our-team__heading"]}`}
                >
                  Our virtual dentist
                </h2>
                <a
                  href="#!"
                  className={`${styles.btn} ${styles["our-team__btn"]}`}
                >
                  Meet our dentist
                </a>
              </div>

              <div className={styles["our-team__row"]}>
                <div className={styles["our-team__list"]}>
                  {[dentist1, dentist2, dentist3, dentist4].map((img, i) => (
                    <div key={i} className={styles["our-team__item"]}>
                      <img
                        src={img}
                        className={styles["our-team__item--img"]}
                      />
                      <p className={styles["our-team__item--name"]}>
                        Dr. Essence Page
                      </p>
                      <p className={styles["our-team__item--detail"]}>
                        DDS, California - Linda University
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(HomePage));
