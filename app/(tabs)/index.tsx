import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import Screenwrapper from "../../components/Screenwrapper";
import { hp, wp } from "../../helper/common";
import Button from "../../components/Button";
import { theme } from "@/constants/theme";
const index = () => {
  const [loading, setLoading] = useState(false);
  const transactions = [
    {
      id: "1",
      name: "Amazon",
      date: "May 24, 2022",
      amount: "-$103.56",
      logo: require("../../assets/Images/amazon.png"),
    },
    {
      id: "2",
      name: "McDonalds",
      date: "May 12, 2022",
      amount: "-$34.78",
      logo: require("../../assets/Images/mcdonalds.png"),
    },
    {
      id: "3",
      name: "Apple",
      date: "May 8, 2022",
      amount: "-$1,000.97",
      logo: require("../../assets/Images/apple.png"),
    },
    {
      id: "4",
      name: "Starbucks",
      date: "May 5, 2022",
      amount: "-$15.30",
      logo: require("../../assets/Images/starbucks.png"),
    },
  ];

  //   const Item=(item,index)=>{
  //     return(
  // <View key={index}>
  //   <Image source={item.image}/>
  //     <Text>{item.name}</Text>
  //     <Text>{item.date}</Text>
  //     <Text>{item.amount}</Text>

  // </View>
  //     )
  // }
  return (
    <Screenwrapper bg={"#19173D"}>
      <View style={{ margin: 10 }}>
        <View style={styles.header}>
          <View style={{ flexDirection: "row" }}>
            <Image source={require("../../assets/Images/Avatar.png")} />
            <View style={styles.subHeader}>
              <Text style={styles.headerText}>Welcome Back !</Text>
              <Text style={styles.subheaderText}>Sandy Chungus</Text>
            </View>
          </View>
          <View style={styles.rightHeader}>
            <Image
              style={{ marginVertical: wp(1) }}
              source={require("../../assets/Images/notification.png")}
            />
            <Image source={require("../../assets/Images/More_Vertical.png")} />
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 200, // adjust width to match the image size
              height: 200,
            }}
            source={require("../../assets/Images/Balance.png")}
          />
          <Text style={styles.balanceText}>$5,643.50</Text>
          <Text style={styles.availContent}>Available Balance</Text>
        </View>
      </View>
      <View style={{ marginHorizontal: wp(5) }}>
        <View>
          <Text style={styles.transText}>My transactions</Text>
          <FlatList
            style={{ marginVertical: wp(5) }}
            data={transactions}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.transactionItem}>
                <Image source={item.logo} style={styles.transactionLogo} />
                <View style={styles.transactionDetails}>
                  <Text style={styles.transactionName}>{item.name}</Text>
                  <Text style={styles.transactionDate}>{item.date}</Text>
                </View>
                <View style={styles.amountContainer}>
                  <Text style={styles.transactionAmount}>{item.amount}</Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
      <Button
        onPress={() => router.push("./cards")}
        title="Next"
        buttonStyle={styles.button}
      />
    </Screenwrapper>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",

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
    color: "#7B78AA",
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
    fontSize: 20, // Adjust the size based on your preference
    fontWeight: "bold",
    marginVertical: wp(16),
  },
  availContent: {
    color: theme.colors.text,
    position: "absolute",
    paddingVertical: wp(23),
    fontSize: 13,
    fontWeight: "regular",
  },
  transText: {
    fontWeight: "semibold",
    fontSize: 13,
    color: "white",
  },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#19173D",
    borderRadius: 35,
    borderWidth: 1,
    borderColor: "#39375B",
    padding: 15,
    marginBottom: 15,
  },
  transactionLogo: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionName: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  transactionDate: {
    color: "#a0a0d0",
    fontSize: 14,
  },
  transactionAmount: {
    color: "white",
    fontSize: 13,
    fontWeight: "regular",
    textAlign: "right", // Aligns the text to the right
    width: "100%", // Ensures the text takes full width of the container
  },
  amountContainer: {
    borderRadius: 35,
    borderWidth: 1,
    borderColor: "#39375B",
    padding: 12,
    width: 100, // Set a fixed width for consistency
    alignItems: "center", // Align the amount to the end (right)
    justifyContent: "center", // Vertically center the text
  },
  button: {
    margin: 20,
  },
});

export default index;
