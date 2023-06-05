import { StyleSheet } from "react-native";

export default StyleSheet.create({
  viewStyle: {
    backgroundColor: "#ac191950",
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    gap:30
  },
  imgStyle: { width: 60, height: 60 },
  textStyle: { fontSize: 18, marginLeft: 10, color: "#0f0f11" },
});
