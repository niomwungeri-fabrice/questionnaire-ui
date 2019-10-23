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
import { useStyles } from '../styles/material-ui/SignUpStyles';
import Container from '@material-ui/core/Container';
import { CopyRight } from '../components/CopyRight';
import { connect } from 'react-redux';
import { handleInputs } from '../redux/actions/commonActions';
import { handleSignUp } from '../redux/actions/accountActions';
import '../styles/css/signUp.css';
import { withRouter } from 'react-router-dom';

export const SignUp = props => {
  const classes = useStyles();

  const {
    user: { email, password, firstName, lastName },
    onSignUP,
    error,
    history
  } = props;

  const handleSubmit = evt => {
    evt.preventDefault();
    onSignUP({ email, firstName, lastName, password }).then(res => {
      if (res) {
        history.push('/sign-in');
      }
    });
  };

  const handleInput = ({ target: { value, name } }) => {
    const { onInputChange } = props;
    onInputChange({ field: name, value });
  };

  const { email: emailError, password: passwordError } = error;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          id="register-form"
          onSubmit={handleSubmit}
          className={classes.form}
          noValidate
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={firstName}
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={lastName}
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={handleInput}
              />
              <div className="validationMessage">{emailError}</div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={handleInput}
              />
              <div className="validationMessage">{passwordError}</div>
            </Grid>
          </Grid>
          <Button
            id="sign-up"
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <CopyRight />
      </Box>
    </Container>
  );
};

export const mapStateToProps = ({ account }) => ({ ...account });

export const mapDispatchToProps = dispatch => ({
  onInputChange: payload => dispatch(handleInputs(payload)),
  onSignUP: payload => dispatch(handleSignUp(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SignUp));
