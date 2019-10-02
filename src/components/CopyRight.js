import React from 'react'
import { Link, Typography } from '@material-ui/core'
import { useStyles } from '../styles/material-ui/SignInStyles'

export const CopyRight = (props) => {
  const classes = useStyles();
  return (
        <Typography className={classes.submit} variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          questionnaire
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    )
  }
