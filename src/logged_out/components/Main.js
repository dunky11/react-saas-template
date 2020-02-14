import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import AOS from "aos/dist/aos";
import { withStyles } from "@material-ui/core";
import urlify from "../../shared/urlify";
import NavBar from "./navigation/NavBar";
import Footer from "./footer/Footer";
import "aos/dist/aos.css";
import smoothScrollTop from "../../shared/smoothScrollTop";
import CookieRulesDialog from "./cookies/CookieRulesDialog";
import CookieConsent from "./cookies/CookieConsent";
import dummyBlogPosts from "../dummy_data/blogPosts";
import DialogSelector from "./register_login/DialogSelector";
import Routing from "./Routing";

AOS.init();

const styles = theme => ({
  wrapper: {
    backgroundColor: theme.palette.common.white
  }
});

class Main extends PureComponent {
  state = {
    selectedTab: null,
    mobileDrawerOpen: false,
    blogPosts: [],
    dialogOpen: null,
    cookieRulesDialogOpen: false
  };

  blogPostsMaxUnix = Math.round(new Date().getTime() / 1000);

  componentDidMount() {
    this.fetchBlogPosts();
  }

  selectHome = () => {
    smoothScrollTop();
    document.title =
      "WaVer - Free template for building an SaaS or admin application";
    this.setState({ selectedTab: "Home" });
  };

  selectBlog = () => {
    smoothScrollTop();
    document.title = "WaVer - Blog";
    this.setState({ selectedTab: "Blog" });
  };

  openLoginDialog = () => {
    this.setState({ dialogOpen: "login", mobileDrawerOpen: false });
  };

  closeDialog = () => {
    this.setState({ dialogOpen: null });
  };

  openRegisterDialog = () => {
    this.setState({
      dialogOpen: "register",
      mobileDrawerOpen: false
    });
  };

  openTermsDialog = () => {
    this.setState({ dialogOpen: "termsOfService" });
  };

  handleMobileDrawerOpen = () => {
    this.setState({ mobileDrawerOpen: true });
  };

  handleMobileDrawerClose = () => {
    this.setState({ mobileDrawerOpen: false });
  };

  switchSelectedTab = tab => {
    this.setState({ selectedTab: tab });
  };

  openChangePasswordDialog = () => {
    this.setState({ dialogOpen: "changePassword" });
  };

  fetchBlogPosts = () => {
    /**
     * You would fetch this from the server, however we gonna use the example values from state here
     */
    this.blogPostsMaxUnix = dummyBlogPosts[dummyBlogPosts.length - 1].date;
    const blogPosts = dummyBlogPosts.map(blogPost => {
      const post = blogPost;
      post.url = `/blog/post/${urlify(post.title)}?id=${post.id}`;
      return post;
    });
    this.setState({
      blogPosts
    });
  };

  handleCookieRulesDialogOpen = () => {
    this.setState({ cookieRulesDialogOpen: true });
  };

  handleCookieRulesDialogClose = () => {
    this.setState({ cookieRulesDialogOpen: false });
  };

  render() {
    const { classes } = this.props;
    const {
      selectedTab,
      mobileDrawerOpen,
      blogPosts,
      dialogOpen,
      cookieRulesDialogOpen
    } = this.state;
    return (
      <div className={classes.wrapper}>
        {!cookieRulesDialogOpen && (
          <CookieConsent
            handleCookieRulesDialogOpen={this.handleCookieRulesDialogOpen}
          />
        )}
        <DialogSelector
          openLoginDialog={this.openLoginDialog}
          dialogOpen={dialogOpen}
          onClose={this.closeDialog}
          openTermsDialog={this.openTermsDialog}
          openRegisterDialog={this.openRegisterDialog}
          openChangePasswordDialog={this.openChangePasswordDialog}
        />
        <CookieRulesDialog
          open={cookieRulesDialogOpen}
          onClose={this.handleCookieRulesDialogClose}
        />
        <NavBar
          selectedTab={selectedTab}
          selectTab={this.selectTab}
          openLoginDialog={this.openLoginDialog}
          openRegisterDialog={this.openRegisterDialog}
          mobileDrawerOpen={mobileDrawerOpen}
          handleMobileDrawerOpen={this.handleMobileDrawerOpen}
          handleMobileDrawerClose={this.handleMobileDrawerClose}
        />
        <Routing
          blogPosts={blogPosts}
          selectHome={this.selectHome}
          selectBlog={this.selectBlog}
        />
        <Footer
          openLoginDialog={this.openLoginDialog}
          openRegisterDialog={this.openRegisterDialog}
          handleCookieRulesDialogOpen={this.handleCookieRulesDialogOpen}
        />
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Main);
