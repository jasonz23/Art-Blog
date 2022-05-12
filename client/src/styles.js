import {makeStyles} from "@material-ui/core";

export default makeStyles(() => ({
    root: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    appbar: {
        backgroundColor: "#234234"
    },
    appbarWrapper: {
        width: "80%",
        margin: "0 auto"
    },
    title: {
        flex:"1"
    },
    button: {
            "&.MuiButton-root": {
                border: "2px white solid",
                fontSize: "2vh",
                fontFamily: "Signika",
                color: "#fff",
                width: "15vw",
                border: "3px #ffff solid"

            },
            "&.MuiButton-outline": {
                color: "#1c2321"
            }
    },
    grid: {
        marginTop: "10vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
}));