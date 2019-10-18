import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class FormUserDetails extends Component {
    continue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
    render() {
        const {values, handleChange} = this.props
        return (
            <MuiThemeProvider>
               <React.Fragment>
                   <AppBar title="Enter User details" />
                   <TextField 
                    hintText= 'Enter your firstname'
                    floatingLabelText='Firstname'
                    onChange={handleChange('firstname')}
                    defaultValue={values.firstname}
                   />
                   <br />
                    <TextField 
                    hintText= 'Enter your lastname'
                    floatingLabelText='Lastname'
                    onChange={handleChange('lastname')}
                    defaultValue={values.lastname}
                   />
                     <br />
                    <TextField 
                    hintText= 'Enter your email'
                    floatingLabelText='Email'
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                   />
                     <br />
                    <RaisedButton 
                    label="Continue"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                    />
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
export default  FormUserDetails