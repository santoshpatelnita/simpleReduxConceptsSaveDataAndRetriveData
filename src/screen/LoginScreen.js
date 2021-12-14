import React, { useState, useEffect } from "react";
import {useDispatch, useSelector, shallowEqual} from 'react-redux'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {setUserId, setUserName, setUserPassword } from '../store/LoginStore/Login'
import {setName} from '../store/LoginStore/userData'

const LoginScreen = (props) => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const stateValue = useSelector((state) => state.loginStore,shallowEqual)
  const userData = useSelector((state) => state.userData,shallowEqual )


  const dispatch = useDispatch()

  const setDataIntoStore = () =>{
    dispatch(setUserId("123"))
    dispatch(setUserName(name))
    dispatch(setUserPassword(password))
    dispatch(setName(email))
    console.log("stateValue======  ", stateValue)
  }

  renderHeader = () => {
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.headingStyle}>Login</Text>
      </View>
    );
  };

  renderFromInput = () => {
    return (
      <View>
        <Text style={styles.headingInputBox}>Name</Text>
        <View style={styles.inputBoxStyle}>
          <TextInput
            value={name}
            onChangeText = {(e)=>setname(e)}
            placeholder="Please Enter Name"
            style={styles.inputBoxTextStyle}
          />
        </View>
        <Text style={styles.headingInputBox}>Email</Text>
        <View style={styles.inputBoxStyle}>
          <TextInput
            value={email}
            onChangeText = {(e)=>setEmail(e)}
            placeholder="Please Enter Email"
            style={styles.inputBoxTextStyle}
          />
        </View>
        <Text style={styles.headingInputBox}>Password</Text>
        <View style={styles.inputBoxStyle}>
          <TextInput
            value={password}
            onChangeText = {(e)=>setPassword(e)}
            placeholder="Please Enter Password"
            style={styles.inputBoxTextStyle}
          />
        </View>
      </View>
    );
  };

  renderSubmitButton = () => {
    return (
      <TouchableOpacity style={styles.buttonStyle} onPress = {() => setDataIntoStore()}>
        <Text style={{ color: "#FFF", fontWeight: "700" }}>Submit</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {renderHeader()}
      {renderFromInput()}
      {renderSubmitButton()}


  <Text>id: {stateValue.userId}</Text>
  <Text>name: {stateValue.userName}</Text>
  <Text>email: {userData.name}</Text>
  <Text>password: {stateValue.userPassword}</Text>

    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
  },

  headingStyle: {
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 70,
  },

  headingInputBox: {
    marginTop: 20,
    fontWeight: "700",
  },

  inputBoxStyle: {
    flex:1,
    height: 54,
    borderRadius: 17,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#000000",
  },

  inputBoxTextStyle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginLeft: 20,
    width: 270,
    fontSize: 15,
    fontWeight: "700",
  },

  buttonStyle: {
    width: 120,
    height: 40,
    backgroundColor: "#146edb",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    alignSelf: "center",
  },
});

export default LoginScreen;
