import React, { Component } from 'react'
import { Link, Typography } from '@material-ui/core'

export default class CopyRight extends Component {
  render() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          questionnaire
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    )
  }
}
