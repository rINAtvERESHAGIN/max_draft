import React from "react";
import {withStyles} from "@material-ui/core";

const styles = theme => ({
  root: {
    display: "flex",
    width: "30%",
    flexDirection: "column",
  },
});
const Container = props => {
  const {classes} = props;
  const {children} = props;

  return (
    <div className={classes.root}>
      {children}
    </div>
  )
};

export default withStyles(styles)(Container);
