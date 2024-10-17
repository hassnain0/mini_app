import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React from "react";
import { router } from "expo-router";
import Screenwrapper from "../../components/Screenwrapper";
import { hp, wp } from "../../helper/common";
// Import SVG elements
import Svg, { Path } from "react-native-svg";
const index = () => {
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
  return (
    <Screenwrapper bg={"#19173D"}>
      <View style={{ margin: 10 }}>
        <View style={styles.header}>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ marginVertical: hp(1) }}
              source={require("../../assets/Images/Avatar.png")}
            />
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
      </View>
      <View style={styles.topCurve}>
        <Svg
          height="100%"
          width="100%"
          viewBox="0 0 375 150"
          style={styles.curveSvg}
        >
          <Path
            fill="#262450" // Background color for the curve
            d="M0 0 C75 100 300 100 375 0 L375 150 L0 150 Z"
          />
        </Svg>
        <View style={styles.transactionsContainer}>
          <Text style={styles.transactionHeader}>My transaction</Text>
          <FlatList
            data={transactions}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.transactionItem}>
                <Image source={item.logo} style={styles.transactionLogo} />
                <View style={styles.transactionDetails}>
                  <Text style={styles.transactionName}>{item.name}</Text>
                  <Text style={styles.transactionDate}>{item.date}</Text>
                </View>
                <View
                  style={{
                    borderWidth: 2, // Consistent border width
                    borderColor: "#2F2B72", // Border color
                    borderRadius: 50, // Rounded corners
                    padding: 10, // Padding inside the view
                    width: 120, // Fixed width for all items
                    height: 50, // Fixed height for all items
                    justifyContent: "center", // Center content vertically
                    alignItems: "center", // Center content horizontally
                    marginVertical: 5,
                  }}
                >
                  <Text style={styles.transactionAmount}>{item.amount}</Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>

      {/* Content below the curve */}
    </Screenwrapper>
  );
};
const styles = StyleSheet.create({
  bottom: {
    backgroundColor: "#262450",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: wp(2),
    justifyContent: "space-between",
  },
  headerText: {
    color: "white",
    fontSize: 20,
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
    fontSize: 15,
    fontWeight: "regular",
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
    marginVertical: wp(16),
  },
  availContent: {
    color: "gray",
    position: "absolute",
    paddingVertical: wp(23),
    fontSize: 16,
    fontWeight: "300",
  },
  topCurve: {
    height: "100%", // Adjust this height for the curve size
    backgroundColor: "#262450",
  },

  curveSvg: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  transactionsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: wp(20),
  },
  transactionHeader: {
    color: "white",
    fontWeight: "600",
    fontSize: 20,
    marginBottom: 20,
    marginTop: -60, // Adjust to overlap the curve slightly
  },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#19173D",
    borderRadius: 50,
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
  },
});

export default index;
