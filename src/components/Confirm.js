import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import { List, ListItem } from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

class Confirm extends Component {
    continue = (e) => {
        e.preventDefault()
        //Process form
        this.props.nextStep()
    }

    back = (e) => {
        e.preventDefault()
        this.props.prevStep()
    }


    render() {
        const {values: { firstname, lastname, email, occupation, bio, city }} = this.props
        console.log(this.props);
        return (
            <MuiThemeProvider>
               <React.Fragment>
                   <AppBar title="Confirm User Data" />
                    <List>
                        <ListItem 
                            primaryText= 'First name'
                            secondaryText= { firstname}
                        />
                          <ListItem 
                            primaryText= 'Last name'
                            secondaryText= { lastname}
                        />
                          <ListItem 
                            primaryText= 'Email'
                            secondaryText= { email}
                        />
                          <ListItem 
                            primaryText= 'Occupation'
                            secondaryText= { occupation}
                        />
                          <ListItem 
                            primaryText= 'City'
                            secondaryText= { city}
                        />
                         <ListItem 
                            primaryText= 'Bio'
                            secondaryText= { bio}
                        />
                    </List>
                     <br />
                     <RaisedButton 
                    label="Back"
                    primary={true}
                    style={styles.button}
                    onClick={this.back}
                    />
                    <RaisedButton 
                    label="Confirm & Continue"
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
export default  Confirm