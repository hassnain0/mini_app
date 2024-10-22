import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import React from "react";
import Header from '../../components/Header';
import Screenwrapper from '../../components/Screenwrapper';
import { hp, wp } from "@/helper/common";
const cards = () => {
  const ImagesArr = [
    {
      image: require("../assets/Images/Send.png"),
    },
    {
      image: require("../assets/Images/Statistic icon.png"),
    },
    {
      image: require("../assets/Images/Wallet Icon.png"),
    },
    {
      image: require("../assets/Images/Wallet Icon.png"),
    },
  ];

  return (
    <Screenwrapper bg={"#19173D"}>
      <Header title={"Wallet"} />
      <View style={styles.container}>
        <View>
          <Image
            style={styles.CardImage}
            source={require("../assets/Images/Cards.png")}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginVertical: wp(10),
          }}
        >
          {ImagesArr.map((data, index) => (
            <View key={index} style={styles.ImageContainer}>
              <Image
                style={{ padding: hp(2), width: 42.11, height: 50 }}
                source={data.image}
              />
            </View>
          ))}
        </View>
        <View style={styles.bottomContainer}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
              +
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
              Add Card
            </Text>
          </View>
          <Text
            style={{ fontWeight: "regular", fontSize: 15, color: "#706EA0" }}
          >
            Add your debit/credit card
          </Text>

          <TextInput placeholder="Card Number" style={{}}></TextInput>
          <TextInput></TextInput>
        </View>
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
    backgroundColor: "#1C1A45",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#292766",
    width: 72.5,
    height: 70,
    marginHorizontal: wp(3),

    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "80%",
    borderColor: "#2A2768",
    backgroundColor: "#262450",
    maxHeight: "100%",
    borderRadius: 20,
    padding: wp(5),
  },
});

export default cards;
