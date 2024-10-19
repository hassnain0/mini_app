import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { router } from "expo-router";
import Screenwrapper from "../../components/Screenwrapper";
import { hp, wp } from "../../helper/common";
  // Import SVG elements
import { FlatList } from "react-native-gesture-handler";
import Svg, { Path } from "react-native-svg";
const index = () => {

  const transactions = [
    { id: '1', name: 'Amazon', date: 'May 24, 2022', amount: '-$103.56', logo: require('../../assets/Images/amazon.png') },
    { id: '2', name: 'McDonalds', date: 'May 12, 2022', amount: '-$34.78', logo: require('../../assets/Images/mcdonalds.png') },
    { id: '3', name: 'Apple', date: 'May 8, 2022', amount: '-$1,000.97', logo: require('../../assets/Images/apple.png') },
    { id: '4', name: 'Starbucks', date: 'May 5, 2022', amount: '-$15.30', logo: require('../../assets/Images/starbucks.png') },
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
      <View style={styles.topCurve}>
        <Svg
          height="100%"
          width="100%"
          viewBox="0 0 1440 320"
          style={styles.curveSvg}
        >
          <Path
            fill="#1c1e3f" // Background color for the curve
            d="M0,224L60,192C120,160,240,96,360,74.7C480,53,600,75,720,101.3C840,128,960,160,1080,181.3C1200,203,1320,213,1380,218.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </Svg>
      </View>

      {/* Content below the curve */}
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
              <Text style={styles.transactionAmount}>{item.amount}</Text>
            </View>
          )}
        />
      </View>
    </Screenwrapper>
  );
};
const styles = StyleSheet.create({
  bottom: {
    backgroundColor: "#262450",
   
  },
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
    fontSize: 16,
    fontWeight: "300",
  },
  topCurve: {
    height: 250, // Adjust this height for the curve size
    backgroundColor: '#1c1e3f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  curveSvg: {
    position: 'absolute',
    top: 0,
  },
  transactionsContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  transactionHeader: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
    marginBottom: 20,
    marginTop: -60, // Adjust to overlap the curve slightly
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2d2f59',
    borderRadius: 20,
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
    color: '#ff4d4d',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default index;
