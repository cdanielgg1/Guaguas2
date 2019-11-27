import React, { useEffect, useState } from 'react'
import { Typography, Paper, Avatar, CircularProgress, Button } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar';
//import { Container } from 'semantic-ui-react';

import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
import firebase from '../firebase'




import NavBar from '../navBar';


import { withRouter } from 'react-router-dom'
	;


const styles = theme => ({

	menu:{
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(800 + theme.spacing.unit * 3 * 2)]: {
			width: 800,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},


	main: {
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
			width: 200,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},

	
	paper: {
		marginTop: theme.spacing.unit * 8,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
	},
	avatar: {
		margin: theme.spacing.unit,
		backgroundColor: theme.palette.secondary.main,
	},
	submit: {
		marginTop: theme.spacing.unit * 3,
	},
})

function Dashboard(props) {
	const { classes } = props

	if (!firebase.getCurrentUsername()) {
		// not logged in
		alert('Registrese primero')
		props.history.replace('/login')
		return null
	}

	const [quote, setQuote] = useState('')

	useEffect(() => {
		firebase.getCurrentUserQuote().then(setQuote)
	})

	return (
		<React.Fragment>

		<NavBar className={classes.menu}></NavBar>

		<main className={classes.main}>

	

			<AppBar color="primary" position="static">
				
			</AppBar> 
			<Paper className={classes.paper}>
				<Avatar className={classes.avatar}>
					<VerifiedUserOutlined />
				</Avatar>
				<Typography component="h1" variant="h5">
					Hola {firebase.getCurrentUsername()}
				</Typography>
				<Typography component="h1" variant="h5">
					tu frase: {quote ? `"${quote}"` : <CircularProgress size={20} />}
				</Typography>

				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="secondary"
					onClick={logout}
					className={classes.submit}>
					salir
          		</Button>
			</Paper>
		</main>
		</React.Fragment>
	)

	async function logout() {
		await firebase.logout()
		props.history.push('/')
	}
}

export default withRouter(withStyles(styles)(Dashboard))

