import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

class Success extends Component {
    continue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
    render() {
        const {values: {firstname}} = this.props
        return (
            <MuiThemeProvider>
               <React.Fragment>
                   <AppBar title="Enter User details" />
                   <h1>Thanks you {firstname}  for your submission</h1>
               </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
const styles = {
    button : {
        margin: 15
    }
}
export default  Success