import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  box: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "center",
    width: "80vw",
    height: "60px",
    margin: "80px 80px 80px 80px",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "20px 20px",
    backgroundColor: "white",
    position: "fixed",
    zIndex: "4"
  },
  btn: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center"
  },
  google: {
    marginRight: "20px"
  },
  gap: {
    marginRight: "10px"
  },
  box2: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "center",
    width: "400px",
    height: "60px",
    margin: "20px auto",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "20px 20px",
    backgroundColor: "white",
    zIndex: "1",
    position: "relative",
    top: "200px"
  }
}));
