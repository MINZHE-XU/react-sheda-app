import React from "react";
// @material-ui/core components

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";
import Header from "components/Header/Header.jsx";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";


// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Search from "@material-ui/icons/Search";
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";
// core components

import CustomInput from "components/CustomInput/CustomInput.jsx";


import navbarsStyle from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.jsx";

import image from "assets/img/bg.jpg";
import profileImage from "assets/img/faces/avatar.jpg";

class FAQSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
        <div className={classes.section}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <Header
                    brand="Frequently Asked Questions"
                    color="white"
                    leftLinks={
                      <List className={classes.list}>
                        <ListItem className={classes.listItem}>
                          <CustomDropdown
                              buttonText="Hareware"
                              dropdownHeader="Please Select"
                              buttonProps={{
                                className: classes.navLink,
                                color: "transparent"
                              }}
                              dropdownList={[
                                "AAAAAA",
                                "BBBBBB",
                                "CCCCCC",
                                { divider: true },
                                "QQQQQQ",
                                { divider: true },
                                "PPPPPP"
                              ]}
                          />
                          <CustomDropdown
                              buttonText="Software"
                              dropdownHeader="Please Select"
                              buttonProps={{
                                className: classes.navLink,
                                color: "transparent"
                              }}
                              dropdownList={[
                                "AAAAAA",
                                "BBBBBB",
                                "CCCCCC",
                                { divider: true },
                                "QQQQQQ",
                                { divider: true },
                                "PPPPPP"
                              ]}
                          />
                          <CustomDropdown
                              buttonText="Other Questions"
                              dropdownHeader="Please Select"
                              buttonProps={{
                                className: classes.navLink,
                                color: "transparent"
                              }}
                              dropdownList={[
                                "AAAAAA",
                                "BBBBBB",
                                "CCCCCC",
                                { divider: true },
                                "QQQQQQ",
                                { divider: true },
                                "PPPPPP"
                              ]}
                          />
                        </ListItem>
                      </List>
                    }
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
    );
  }
}

export default withStyles(productStyle)(FAQSection);
