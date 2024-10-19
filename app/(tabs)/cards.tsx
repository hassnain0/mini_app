import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Screenwrapper from "../../components/Screenwrapper";
import Header from "../../components/Header";
import { wp } from "@/helper/common";
const cards = () => {

  const ImagesArr = [
    {
      image: require("../../assets/Images/Send.png"),
    },
    {
      image: require("../../assets/Images/Statistic icon.png"),
    },
    {
      image: require("../../assets/Images/Wallet Icon.png"),
    },
    {
      image: require("../../assets/Images/Icon.png"),
    },
  ];
  return (
    <Screenwrapper bg={"#19173D"}>
      <Header title={"Wallet"} />
      <View style={styles.container}>
        <Image
          style={styles.CardImage}
          source={require("../../assets/Images/Cards.png")}
        ></Image>
      </View>

      <View>
        {ImagesArr.map((data) => (
          <View style={styles.ImageContainer}>
            <Image source={data.image} />
          </View>
        ))}
      </View>

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

  ImageContainer: {
    width: 50,
    height: 50,
  },
});

export default cards;
