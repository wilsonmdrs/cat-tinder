import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#EAEAEA",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  details: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "90%",
    bottom: 0,
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
    zIndex: 10,
    backgroundColor: "#fff",
  },

  textName: {
    fontSize: 16,
    fontWeight: "700",
    paddingBottom: 5,
  },
  textCountry: {
    fontSize: 8,
    fontWeight: "700",
    color: "#BFBFC0",
  },
  textAge: {
    fontSize: 16,
    fontWeight: "700",
  },
});
