import React, { useEffect } from 'react'; // Beacuse we have to changed componentDidMount and there...
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Homepage from './pages/homepage/homepage.component';

import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import ContactFeedback from './pages/contact-feedback/contact-feedback.component';
import Header from './components/header/header.component';

import { GlobalStyle } from './global.styles';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const App = ({ checkUserSession, currentUser }) => {
  // constructor() {
  //   super();

  //   this.state = {
  //     currentUser: null
  //   }; 
  // }

  // componentDidMount() {

  //   checkUserSession();  
  // }
  //we don't need componentDidMount cause we use useEffect
  useEffect(() => {
    checkUserSession()
  });
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/contact' component={ContactFeedback} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route path='/signin' render={() => currentUser ? (<Redirect to='/' />
        ) : (
          <SignInAndSignUpPage />
        )} />
      </Switch>
    </div>
  );
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
