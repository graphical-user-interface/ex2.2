import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
	Grid,
	Container,
	Paper,
	AppBar,
	Button,
	Toolbar,
	Typography,
	Link,
	Modal
} from "@material-ui/core"

function rand() {
	return Math.round(Math.random() * 20) - 10
}

function getModalStyle() {
	const top = 50 + rand()
	const left = 50 + rand()

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`
	}
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	paper: {
		margin: theme.spacing(2),
		padding: theme.spacing(2, 1),
		textAlign: "center",
		color: theme.palette.text.secondary
	},
	modal: {
		position: "absolute",
		width: 300,
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3)
	},
	menuButton: {
		marginRight: theme.spacing(2)
	}
}))
export default function App() {
	const classes = useStyles()
	const [text, setText] = useState("Heading")
	const [open, setOpen] = useState(false)
	const [modalStyle] = React.useState(getModalStyle)
	const changeText = () => {
		text === "Heading" ? setText("GUI") : setText("Heading")
	}
	const preventDefault = (e) => {
		e.preventDefault()
	}
	const handleOpen = (e) => {
		e.preventDefault()
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}
	return (
		<div className={classes.root}>
			<Container maxWidth='sm'>
				<Grid container>
					<Grid item xs={2}></Grid>
					<Grid item xs={8}>
						<Paper elevation={2} className={classes.paper}>
							<AppBar position='relative' color='primary'>
								<Toolbar variant='dense'>
									<Grid container justify='space-between'>
										<Grid item>
											<Typography variant='span'>
												<Link
													href='#'
													color='inherit'
													onClick={preventDefault}>
													File
												</Link>
											</Typography>
										</Grid>
										<Grid item>
											<Typography
												variant='span'
												color='inherit'>
												<Link
													href='#'
													color='inherit'
													onClick={preventDefault}>
													Edit
												</Link>
											</Typography>
										</Grid>
										<Grid item>
											<Typography
												variant='span'
												color='inherit'>
												<Link
													href='#'
													color='inherit'
													onClick={preventDefault}>
													Help
												</Link>
											</Typography>
										</Grid>
										<Grid item>
											<Typography
												variant='span'
												color='inherit'>
												<Link
													href='#'
													color='inherit'
													onClick={handleOpen}>
													About
												</Link>
											</Typography>
										</Grid>
									</Grid>
								</Toolbar>
							</AppBar>
							<Typography
								variant='h2'
								component='h2'
								color='primary'
								gutterBottom
								style={{ marginTop: 20 }}>
								{text}
							</Typography>
							<Button
								variant='contained'
								color='primary'
								onClick={changeText}>
								Change text
							</Button>
						</Paper>
					</Grid>
					<Grid item xs={2}></Grid>
				</Grid>
			</Container>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='simple-modal-title'
				aria-describedby='simple-modal-description'>
				<div style={modalStyle} className={classes.modal}>
					<h5 id='simple-modal-title'>About</h5>
					<p id='simple-modal-description'>
						Something about this application.
					</p>
					<p>
						<Button
							variant='contained'
							color='primary'
							onClick={handleClose}>
							Close
						</Button>
					</p>
				</div>
			</Modal>
		</div>
	)
}
