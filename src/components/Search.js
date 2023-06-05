import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import { filterUsers } from "../redux/usersSlice";
import style from "./SearchStyle";

const Search = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleChange = (value) => {
    setInput(value);
    dispatch(filterUsers(value));
  };
  return (
    <View style={{ alignItems: "center", marginBottom:20 }}>
      <TextInput
        style={style.inputStyle}
        placeholder="Enter name"
        placeholderTextColor="#CCCCCC"
        keyboardType="default"
        value={input}
        onChangeText={handleChange}
      ></TextInput>
    </View>
  );
};

export default Search;
