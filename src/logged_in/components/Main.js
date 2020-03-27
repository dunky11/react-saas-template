import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core";
import Routing from "./Routing";
import NavBar from "./navigation/NavBar";
import ConsecutiveSnackbarMessages from "../../shared/components/ConsecutiveSnackbarMessages";
import smoothScrollTop from "../../shared/functions/smoothScrollTop";
import persons from "../dummy_data/persons";
import LazyLoadAddBalanceDialog from "./subscription/LazyLoadAddBalanceDialog";

const styles = theme => ({
  main: {
    marginLeft: theme.spacing(9),
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0
    }
  }
});

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

class Main extends PureComponent {
  state = {
    selectedTab: null,
    CardChart: null,
    EmojiTextArea: null,
    ImageCropper: null,
    Dropzone: null,
    DateTimePicker: null,
    transactions: [],
    statistics: { views: [], profit: [] },
    posts: [],
    targets: [],
    messages: [],
    isAccountActivated: false,
    addBalanceDialogOpen: false
  };

  componentDidMount() {
    this.fetchRandomTargets();
    this.fetchRandomStatistics();
    this.fetchRandomTransactions();
    this.fetchRandomMessages();
    this.fetchRandomPosts();
  }

  fetchRandomTargets = () => {
    const targets = [];
    for (let i = 0; i < 35; i += 1) {
      const randomPerson = persons[Math.floor(Math.random() * persons.length)];
      const target = {
        id: i,
        number1: Math.floor(Math.random() * 251),
        number2: Math.floor(Math.random() * 251),
        number3: Math.floor(Math.random() * 251),
        number4: Math.floor(Math.random() * 251),
        name: randomPerson.name,
        profilePicUrl: randomPerson.profilePicUrl,
        isActivated: Math.round(Math.random()) ? true : false
      };
      targets.push(target);
    }
    this.setState({ targets });
  };

  openAddBalanceDialog = () => {
    this.setState({ addBalanceDialogOpen: true });
  };

  closeAddBalanceDialog = () => {
    this.setState({ addBalanceDialogOpen: false });
  };

  onPaymentSuccess = () => {
    if (this.pushMessageToSnackbar) {
      this.pushMessageToSnackbar({
        text: "Your balance has been updated."
      });
    }
    this.setState({ addBalanceDialogOpen: false });
  };

  fetchRandomStatistics = () => {
    const statistics = { profit: [], views: [] };
    const iterations = 300;
    const oneYearSeconds = 60 * 60 * 24 * 365;
    let curProfit = Math.round(3000 + Math.random() * 1000);
    let curViews = Math.round(3000 + Math.random() * 1000);
    let curUnix = Math.round(new Date().getTime() / 1000) - oneYearSeconds;
    for (let i = 0; i < iterations; i += 1) {
      curUnix += Math.round(oneYearSeconds / iterations);
      curProfit += Math.round((Math.random() * 2 - 1) * 10);
      curViews += Math.round((Math.random() * 2 - 1) * 10);
      statistics.profit.push({
        value: curProfit,
        timestamp: curUnix
      });
      statistics.views.push({
        value: curViews,
        timestamp: curUnix
      });
    }
    this.setState({ statistics });
  };

  fetchRandomTransactions = () => {
    const transactions = [];
    const iterations = 32;
    const oneMonthSeconds = Math.round(60 * 60 * 24 * 30.5);
    const transactionTemplates = [
      {
        description: "Starter subscription",
        isSubscription: true,
        balanceChange: -1499
      },
      {
        description: "Premium subscription",
        isSubscription: true,
        balanceChange: -2999
      },
      {
        description: "Business subscription",
        isSubscription: true,
        balanceChange: -4999
      },
      {
        description: "Tycoon subscription",
        isSubscription: true,
        balanceChange: -9999
      },
      {
        description: "Added funds",
        isSubscription: false,
        balanceChange: 2000
      },
      {
        description: "Added funds",
        isSubscription: false,
        balanceChange: 5000
      }
    ];
    let curUnix = Math.round(
      new Date().getTime() / 1000 - iterations * oneMonthSeconds
    );
    for (let i = 0; i < iterations; i += 1) {
      const randomTransactionTemplate =
        transactionTemplates[
          Math.floor(Math.random() * transactionTemplates.length)
        ];
      const transaction = {
        id: i,
        description: randomTransactionTemplate.description,
        balanceChange: randomTransactionTemplate.balanceChange,
        paidUntil: curUnix + oneMonthSeconds,
        timestamp: curUnix
      };
      curUnix += oneMonthSeconds;
      transactions.push(transaction);
    }
    transactions.reverse();
    this.setState({ transactions });
  };

  fetchRandomMessages = () => {
    shuffle(persons);
    const messages = [];
    const iterations = persons.length;
    const oneDaySeconds = 60 * 60 * 24;
    let curUnix = Math.round(
      new Date().getTime() / 1000 - iterations * oneDaySeconds
    );
    for (let i = 0; i < iterations; i += 1) {
      const person = persons[i];
      const message = {
        id: i,
        profilePicUrl: person.profilePicUrl,
        date: curUnix,
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed."
      };
      curUnix += oneDaySeconds;
      messages.push(message);
    }
    messages.reverse();
    this.setState({ messages });
  };

  fetchRandomPosts = () => {
    shuffle(persons);
    const posts = [];
    const iterations = persons.length;
    const oneDaySeconds = 60 * 60 * 24;
    let curUnix = Math.round(
      new Date().getTime() / 1000 - iterations * oneDaySeconds
    );
    for (let i = 0; i < iterations; i += 1) {
      const person = persons[i];
      const post = {
        id: i,
        src: person.profilePicUrl,
        timestamp: curUnix,
        name: person.name
      };
      curUnix += oneDaySeconds;
      posts.reverse();
      posts.push(post);
    }
    this.setState({ posts });
  };

  /**
   * We have to call the pushSnackBarMessage function of this
   * child's consecutiveSnackbarMessages component. Thats why we pass it
   * when the component did mount to this components state.
   */
  getPushMessageFromChild = pushFunction => {
    this.pushMessageToSnackbar = pushFunction;
  };

  /** After a click on the 'activate' button in the dashboard
   * the activation status of the account
   */
  toggleAccountActivation = () => {
    const { isAccountActivated } = this.state;
    if (isAccountActivated) {
      this.pushMessageToSnackbar({
        text: "Your account is now deactivated."
      });
    } else {
      this.pushMessageToSnackbar({
        text: "Your account is now activated."
      });
    }
    this.setState({ isAccountActivated: !isAccountActivated });
  };

  selectDashboard = () => {
    smoothScrollTop();
    document.title = "WaVer - Dashboard";
    this.setState({
      selectedTab: "Dashboard"
    });
    if (!this.hasFetchedCardChart) {
      this.hasFetchedCardChart = true;
      import("../../shared/components/CardChart").then(Component => {
        this.setState({ CardChart: Component.default });
      });
    }
  };

  selectPosts = () => {
    smoothScrollTop();
    document.title = "WaVer - Posts";
    this.setState({
      selectedTab: "Posts"
    });
    if (!this.hasFetchedEmojiTextArea) {
      this.hasFetchedEmojiTextArea = true;
      import("../../shared/components/EmojiTextArea").then(Component => {
        this.setState({ EmojiTextArea: Component.default });
      });
    }
    if (!this.hasFetchedImageCropper) {
      this.hasFetchedImageCropper = true;
      import("../../shared/components/ImageCropper").then(Component => {
        this.setState({ ImageCropper: Component.default });
      });
    }
    if (!this.hasFetchedDropzone) {
      this.hasFetchedDropzone = true;
      import("../../shared/components/Dropzone").then(Component => {
        this.setState({ Dropzone: Component.default });
      });
    }
    if (!this.hasFetchedDateTimePicker) {
      this.hasFetchedDateTimePicker = true;
      import("../../shared/components/DateTimePicker").then(Component => {
        this.setState({ DateTimePicker: Component.default });
      });
    }
  };

  selectSubscription = () => {
    smoothScrollTop();
    document.title = "WaVer - Subscription";
    this.setState({
      selectedTab: "Subscription"
    });
  };

  render() {
    const { classes } = this.props;
    const {
      selectedTab,
      ImageCropper,
      EmojiTextArea,
      CardChart,
      Dropzone,
      DateTimePicker,
      transactions,
      statistics,
      posts,
      targets,
      isAccountActivated,
      messages,
      addBalanceDialogOpen
    } = this.state;
    return (
      <Fragment>
        <LazyLoadAddBalanceDialog
          open={addBalanceDialogOpen}
          onClose={this.closeAddBalanceDialog}
          onSuccess={this.onPaymentSuccess}
        />
        <NavBar
          selectedTab={selectedTab}
          messages={messages}
          openAddBalanceDialog={this.openAddBalanceDialog}
        />
        <ConsecutiveSnackbarMessages
          getPushMessageFromChild={this.getPushMessageFromChild}
        />
        <main className={classNames(classes.main)}>
          <Routing
            isAccountActivated={isAccountActivated}
            ImageCropper={ImageCropper}
            EmojiTextArea={EmojiTextArea}
            CardChart={CardChart}
            Dropzone={Dropzone}
            DateTimePicker={DateTimePicker}
            handleNumberChange={this.handleNumberChange}
            handleSwitchToggle={this.handleSwitchToggle}
            handleSelectChange={this.handleSelectChange}
            toggleAccountActivation={this.toggleAccountActivation}
            pushMessageToSnackbar={this.pushMessageToSnackbar}
            transactions={transactions}
            statistics={statistics}
            posts={posts}
            targets={targets}
            selectDashboard={this.selectDashboard}
            selectPosts={this.selectPosts}
            selectSubscription={this.selectSubscription}
            openAddBalanceDialog={this.openAddBalanceDialog}
          />
        </main>
      </Fragment>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Main);
