import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { router } from "expo-router";
import Screenwrapper from "../../components/Screenwrapper";
import { hp, wp } from "../../helper/common";
const index = () => {
  return (
    <Screenwrapper bg={"#19173D"}>
      <View style={{ margin: 10,marginHorizontal:wp(5) }}>
        <View style={styles.header}>
          <View style={{ flexDirection: "row" }}>
            <Image source={require("../../assets/Images/Avatar.png")} />
            <View style={styles.subHeader}>
              <Text style={styles.headerText}>Welcome Back !</Text>
              <Text style={styles.subheaderText}>Sandy Chungus</Text>
            </View>
          </View>
          <View style={styles.rightHeader}>
            <Image source={require("../../assets/Images/notification.png")} />
            <Image source={require("../../assets/Images/More_Vertical.png")} />
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 220, // adjust width to match the image size
              height: 220,
            }}
            source={require("../../assets/Images/Balance.png")}
          />
          <Text style={styles.balanceText}>$5,643.50</Text>
          <Text style={styles.availContent}>Available Balance</Text>
        </View>
        <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>My transaction</Text>
      
      </View>

    </Screenwrapper>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: wp(2),
    justifyContent: "space-between",
  },
  headerText: {
    color: "white",
    fontSize: 13,
    fontWeight: "400",
  },
  rightHeader: {
    flexDirection: "row",
  },
  subHeader: {
    marginHorizontal: wp(2),
    marginVertical: hp(1),
  },
  subheaderText: {
    color: "white",
    fontSize: 10,
    fontWeight: "200",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 200, // adjust width to match the image size
    height: 200, // adjust height to match the image size
  },
  image: {
    width: "100%", // Ensures the image fills the container
    height: "100%",
  },
  balanceText: {
    position: "absolute", // This positions the text on top of the image
    color: "white", // Set the color to stand out from the image
    fontSize: 24, // Adjust the size based on your preference
    fontWeight: "bold",
    marginVertical:wp(16)
  },
  availContent: {
    color: "gray",
    position: "absolute",
    paddingVertical:wp(23),
    fontSize: 16,
    fontWeight:'300'
    
  },
});

export default index;
