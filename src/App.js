import React from 'react'
import './App.css'
import { Button } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  helloThereStyle: {
    fontStyle: 'oblique',
    fontSize: "30px"
  },
  buttonStyles: {
    color: 'green'
  }
})

function App() {
  const classes = useStyles()

  return (
    <div className="App">
      <Typography className={classes.helloThereStyle} color="secondary" variant="h1">Hello there.</Typography>
      <Button className={classes.buttonStyles} variant="outlined" color="primary">THIS IS OUR FIRST BUTTON</Button>
    </div>
  )
}

export default App
