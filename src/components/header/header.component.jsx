import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { signOutStart } from '../../redux/user/user.actions';

import { ReactComponent as Logo } from './../../assets/crwn.svg';
import GitHub from '../../assets/GitHub-Mark-120px-plus.png';

import {
  HeaderContainer,
  OptionsContainer,
  LogoContainer,
  GitHubProjectLink,
  OptionLink,
} from './header.styles';

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <OptionsContainer>
      <GitHubProjectLink href="https://github.com/TemidoRocha/crwn-clothing" target="_blank">
        <img src={GitHub} alt="github project link" />
      </GitHubProjectLink>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser ? (
        //since we don't want a Link component but a div, with the same style, we have the option to do it as per bellow
        <OptionLink as="div" onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
      {/* Like this line bellow, the CartIcon would appear only if the user is logged, but, since we want to show the features, we will leave it always open */}
      {/* {currentUser ? <CartIcon /> : null} */}
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

//connect is an high order function that taes two functions
export default connect(mapStateToProps, mapDispatchToProps)(Header);
