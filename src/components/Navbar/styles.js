import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#203239",
    position: "fixed",
    zIndex: 4,
    marginBottom: "40px"
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px"
  },
  heading: {
    color: "rgba(123,183,221, 1)",
    textDecoration: "none"
  },
  profile: {
    display: "flex",
    justifyContent: "center",
    width: "400px"
  },
  left: {
    display: "flex"
  },
  gap: {
    marginRight: "10px"
  }
}));

