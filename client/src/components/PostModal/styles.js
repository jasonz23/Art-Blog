import {makeStyles} from "@material-ui/core";

export default makeStyles(() => ({
    modal: {
        backgroundColor: "white",
        width: "65%",
        height: "60%",
        margin: "auto",
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        border: "3px black solid"
    },
    main: {
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    }
}));