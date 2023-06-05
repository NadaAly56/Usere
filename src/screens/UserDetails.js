import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import Details from "../components/Details";
import { StyleSheet } from "react-native";

const UserDetails = () => {
  const { user, isLoading, error } = useSelector((state) => state.users);
  return (
    <SafeAreaView style={{backgroundColor:'#333', height:850}}>
      {isLoading ? (
        <Text style={{backgroundColor:'#333', height:850}}>Loading</Text>
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <View style={style.viewStyle}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={style.imgStyle}
              source={require("../../assets/images/user.png")}
            ></Image>
            <Text style={style.textStyle}>{user.name}'s profile</Text>
          </View>
          <Details title="Name" data={user.name}></Details>
          <Details title="Username" data={user.username}></Details>
          <Details title="email" data={user.email}></Details>
          <Details title="Phone" data={user.phone}></Details>
          <Details title="Street" data={user.address.street}></Details>
          <Details title="City" data={user.address.city}></Details>
          <Details title="Website" data={user.website}></Details>
        </View>
      )}
    </SafeAreaView>
  );
};

export default UserDetails;
const style = StyleSheet.create({
  viewStyle: {
    marginHorizontal: 10,
    backgroundColor: "#ac191950",
    padding: 20,
    borderRadius: 15,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  imgStyle: { width: 100, height: 100, marginBottom: 10 },
  textStyle: {
    fontSize: 18,
    marginLeft: 10,
    color: "#0f0f11",
    fontWeight: "bold",
  },
});
