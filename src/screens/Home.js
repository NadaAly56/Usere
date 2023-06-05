import { useEffect } from "react";
import { FlatList, SafeAreaView, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../redux/usersSlice";
import User from "../components/User";
import Search from "../components/Search";
import { StyleSheet } from "react-native";

const Home = () => {
  const { users, filteredUsers, isLoading, error } = useSelector(
    (state) => state.users
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
    console.log("Hello");
  }, []);

  return (
    <SafeAreaView style={{backgroundColor:'#333'}}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <View style={style.dangerStyle}>
          <Text style={{ color: "white" }}>{error}</Text>
        </View>
      ) : filteredUsers ? (
        <View>
          <Search />
          {filteredUsers.length === 0 ? (
            <View style={{height:650}}>
              <Text style={style.dangerStyle}>No users found!</Text>
            </View>
          ) : (
            <FlatList style={{height:650}}
              data={filteredUsers}
              renderItem={({ item }) => (
                <View style={{ marginHorizontal: 20 }}>
                  <User user={item}></User>
                </View>
              )}
              keyExtractor={(key) => key.id}
            ></FlatList>
          )}
        </View>
      ) : (
        ""
      )}
    </SafeAreaView>
  );
};

export default Home;
const style = StyleSheet.create({
  dangerStyle: {
    marginHorizontal: 20,
    backgroundColor: "#dca0a0",
    padding: 20,
    borderRadius: 10,
    marginVertical: 15,
    
  },
});