import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton';

const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  appbar: {
    alignItems: 'center',
  },
  flatButton: {
    color: '#fff'
  }
})

class Header extends Component {

  render () {
    const { classes } = this.props;
    const { title } = this.props;
    const { goBack } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="relative" background-color="#003399">
          <Toolbar>
            {title !== "Top" &&
              <FlatButton
                label="＜"
                labelStyle= {
                  {
                    color: '#FFFFFF',
                    fontWeight: 900,
                    fontSize: 20,
                  }
                }
                color="inherit" 
                containerElement={goBack}
              />
            }
            <div className={classes.grow}></div>
            <Typography variant="h5" component="h5">
              {title}
            </Typography>
            <div className={classes.grow}></div>
            <FlatButton
                label="Logout"
                labelStyle= {
                  {
                    color: '#FFFFFF',
                    fontWeight: 600,
                    fontSize: 12,
                  }
                }
                color="inherit" 
                // containerElement={goBack}
              />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);