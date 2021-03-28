import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '../components/Button'
import Typography from '../components/Typography'
import ProductHeroLayout from './ProductHeroLayout'
import {SIGN_UP} from 'navigation/CONSTANTS'
// Assets
import banner from 'assets/banner.svg'

// const backgroundImage = 'assets/banner.svg'
  // 'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80'

const styles = (theme) => ({
  background: {
    // backgroundImage: `url(${backgroundImage})`,
    // backgroundImage: banner,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    // [theme.breakpoints.up('sm')]: {
    //   marginTop: theme.spacing(10),
    // },
  },
  more: {
    marginTop: theme.spacing(2),
  },
})

function ProductHero(props) {
  const { classes } = props

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img src={banner} alt="increase priority"/>
      <Typography color="inherit" align="center" variant="h4">
        REIMAGINE YOUR FORMS
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        No Limits! Just forms
      </Typography>
      <Button
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href={SIGN_UP}
      >
        Get Started
      </Button>
    </ProductHeroLayout>
  )
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProductHero)
