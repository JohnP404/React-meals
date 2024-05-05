import PropTypes from "prop-types";
import styles from "./Header.module.css";
import mealsImg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClickEvent={props.onClickEvent} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImg} alt="food on table" />
      </div>
    </>
  );
};

Header.propTypes = {
  onClickEvent: PropTypes.func.isRequired,
};

export default Header;
