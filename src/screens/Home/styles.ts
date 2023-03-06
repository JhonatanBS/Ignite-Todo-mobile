import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1A1A1A",
    height: "100%",
    width: "100%",
  },
  imageLogo: {
    height: 173,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0D0D0D"
  },
  containerInput: {
    alignItems: "center",
    position: "relative",
    bottom: 25,
    flexDirection: "row",
    justifyContent: "center"
  },
  inputAdd: {
    backgroundColor: "#262626",
    borderRadius: 6,
    height: 50,
    width: 280,
    color: "#FFFFFF",
    marginRight: 5,
    padding: 15
  },
  buttonAdd: {
    height: 52,
    width: 52,
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center"
  },
  plus: {
    height: 16,
    width: 16,
  },
  containerTask: {
    height: "100%",
    paddingLeft: 27,
    paddingRight: 27
  },

  counter: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 45,
  },
  containerCounter: {
    flexDirection: "row",
    color: "#FFFFFF",
  },
  created: {
    color: "#4EA8DE",
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10
  },
  finished: {
    color: "#8284FA",
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10
  },
  containerNumber: {
    height: 19,
    width: 25,
    backgroundColor: "#333333",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  textNumber: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 12,
  }
});