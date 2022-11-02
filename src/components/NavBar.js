import React from "react";
import { makeStyles } from "@mui/styles";
import Badge from "@mui/material/Badge";
import { BsFillCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  container: {
    backgroundColor: "var(--clr-primary)",
    height: "3rem",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  innerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "60%",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bolder",
  },
});

const NavBar = () => {
  const { amount } = useSelector((state) => state.cart);
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <span className={classes.logo}>
          <span style={{ color: "white" }}>Redux</span>{" "}
          <span
            style={{ borderBottom: ".2rem solid #fff", borderRadius: "1.2rem" }}
          >
            Cart
          </span>
        </span>
        <span className={classes.cart}>
          <Badge badgeContent={amount} color="primary" style={{cursor: "pointer"}} title={`${amount} items in cart`}>
            <BsFillCartFill style={{ fontSize: "1.3rem" }} />
          </Badge>
        </span>
      </div>
    </div>
  );
};

export default NavBar;
