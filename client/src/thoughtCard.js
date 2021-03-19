import React from "react";
import {
  withStyles,
  Typography,
  Card,
  CardHeader,
  CardContent,
} from "@material-ui/core";
import styles from "../src/styles";

const ThoughtCard = (props) => {
  const classes = props.classes;

  return (
    <Card className={classes.card}>
      <CardHeader
        title={props.name}
        titleTypographyProps={{ variant: "h5" }}
        className={classes.cardHeader}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="body1">{props.desc}</Typography>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(ThoughtCard);