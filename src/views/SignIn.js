import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { CopyRight } from '../components/CopyRight';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { mapStateToProps } from './SignUp';
import {
  handleSignIn,
  handleCurrentAccount
} from '../redux/actions/accountActions';
import { handleInputs } from '../redux/actions/commonActions';
import { useStyles } from '../styles/material-ui/SignInStyles';
import '../styles/css/signUp.css';

export const SignIn = props => {
  const classes = useStyles();

  const {
    user: { email, password },
    onSignIn,
    setCurrentAccount,
    history,
    error
  } = props;

  const handleSignInOnSubmit = e => {
    e.preventDefault();
    onSignIn({ email, password }).then(token => {
      if (token) {
        const { access } = token;
        setCurrentAccount(access);
        history.push('/');
      }
    });
  };
  const handleInput = ({ target: { value, name } }) => {
    const { onInputChange } = props;
    onInputChange({ field: name, value });
  };

  const { email: emailError, password: passwordError, detail } = error;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <div className="passwordError">{detail}</div>
        <form
          id="login-form"
          onSubmit={handleSignInOnSubmit}
          className={classes.form}
          noValidate
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleInput}
          />
          <div className="validationMessage">{emailError}</div>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleInput}
          />
          <div className="validationMessage">{passwordError}</div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/sign-up" href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <CopyRight />
      </Box>
    </Container>
  );
};

export const mapDispatchToProps = dispatch => ({
  onInputChange: payload => dispatch(handleInputs(payload)),
  onSignIn: payload => dispatch(handleSignIn(payload)),
  setCurrentAccount: payload => dispatch(handleCurrentAccount(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SignIn));
