import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Screenwrapper from "../../components/Screenwrapper";
import Header from "../../components/Header";
import { wp } from "@/helper/common";
const cards = () => {
  const ImagesArr=[
    {
    
    },{

    },{

    },{
      
    }
  ]
  return (
    <Screenwrapper bg={"#19173D"}>
      <Header title={"Wallet"} />
      <View style={styles.container}>
        <Image
          style={styles.CardImage}
          source={require("../../assets/Images/Cards.png")}
        ></Image>
      </View>
      <View></View>
    </Screenwrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: wp(5),
    flex: 1,
    alignItems: "center",
  },
  CardImage: {
    width: 350,
    height: 240,
  },
});

export default cards;
