/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
//https://materialdesignicons.com/
import {Apps, HelpOutline, Power, ContactMail,Flag} from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
        <ListItem className={classes.listItem}>
            <Button
                href="/"
                color="transparent"
                className={classes.navLink}
            >
                <Power className={classes.icons} /> About
            </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
            <Button
                href="/faq"
                color="transparent"
                className={classes.navLink}
            >
                <HelpOutline className={classes.icons} /> FAQ
            </Button>
        </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/contact"
          color="transparent"
          className={classes.navLink}
        >
            <ContactMail className={classes.icons} /> Contact Us
        </Button>
      </ListItem>
        <ListItem className={classes.listItem}>
                <Button
                    href="/join"
                    className={classes.registerNavLink}
                    onClick={e => e.preventDefault()}
                    color="rose"
                    round
                >
                <Flag className={classes.icons} /> Join!
            </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
            <Tooltip
                id="github-tooltip"
                title="Check on github"
                placement={window.innerWidth > 959 ? "top" : "left"}
                classes={{ tooltip: classes.tooltip }}
            >
                <Button
                    color="transparent"
                    href="https://github.com/MINZHE-XU/react-sheda-app"
                    target="_blank"
                    className={classes.navLink}
                >
                    <i className={classes.socialIcons + " fab fa-github"} />
                </Button>
            </Tooltip>
        </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
