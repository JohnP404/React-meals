import PropTypes from "prop-types";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

const HeaderCartButton = (props) => {
  const [btnHighlight, setBtnHighlight] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberOfItems = items.reduce((acc, item) => acc + item.amount, 0);

  const buttonClasses = `${styles.button} ${btnHighlight ? styles.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    const timer = setTimeout(() => {
      setBtnHighlight(false);
    }, 300);
    setBtnHighlight(true);

    return () => clearTimeout(timer);
  }, [items]);

  return (
    <button onClick={props.onClickEvent} className={buttonClasses}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfItems}</span>
    </button>
  );
};

HeaderCartButton.propTypes = {
  onClickEvent: PropTypes.func.isRequired,
  totalAmount: PropTypes.number,
};

export default HeaderCartButton;
