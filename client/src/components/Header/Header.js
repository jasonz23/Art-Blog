
import {AppBar, Button, Container, Grid, Toolbar, Typography} from "@material-ui/core"
import useStyles from "./styles"

function Header() {
    const classes = useStyles();
    return (
        <AppBar className = {classes.appbar} elevation = {0}>
            <Toolbar className = {classes.appbarWrapper}>
                <Typography variant = "h2" className = {classes.title}>Art</Typography>
                <Button variant = "outlined" className  = {classes.button}>
                    Add Post
                </Button>
            </Toolbar>
            
        </AppBar>
    )
}

export default Header;