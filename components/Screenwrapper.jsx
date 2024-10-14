import { SafeAreaView } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Screenwrapper = ({ children, bg }) => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 5 : 30;

  return (
    <SafeAreaView style={{ flex: 1, paddingTop, backgroundColor: bg }}>
      {children}
    </SafeAreaView>
  );
};

export default Screenwrapper;
