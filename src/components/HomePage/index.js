import React from 'react'
import { Typography, Paper, Avatar, Button } from '@material-ui/core'
import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid';

const styles = theme => ({
	main: {
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 400,
			fontSize:50,
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
		width: 150,
		margin: theme.spacing.unit,
		backgroundColor: theme.palette.secondary.main,
	},
	submit: {
		marginTop: theme.spacing.unit * 3,
	},
})

function HomePage(props) {
	const { classes } = props

	return (
		<main className={classes.main}>
			<Paper className={classes.paper}>
			<Grid container justify="center" alignItems="center">
				<Avatar className={classes.avatar}>Guaguas
					<VerifiedUserOutlined />
				</Avatar>
				</Grid>
				<Typography component="h1" variant="h5">
					Bienvenido usuario
				</Typography>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="secondary"
					component={Link}
					to="/register"
					className={classes.submit}>
					Registro
          		</Button>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="secondary"
					component={Link}
					to="/login"
					className={classes.submit}>
					Acceso
          		</Button>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="secondary"
					component={Link}
					to="/dashboard"
					className={classes.submit}>
					Panel
          		</Button>
			</Paper>
		</main>
	)
}

export default withStyles(styles)(HomePage)