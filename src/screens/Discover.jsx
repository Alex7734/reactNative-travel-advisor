import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Avatar } from "../../assets";

const Discover = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      <View className="flex-row items-center justify-between px-8">
        <View>
          <Text className="text-[#0B646B] text-[36px] font-bold">Discover</Text>
          <Text className="text-[#527283] text-[36px]">new places with us</Text>
        </View>

        <View className="w-12 h-12 ml-6 bg-gray-400 shadow-lg rounded-md items-center justify-center">
          <Image source={Avatar} className="w-full h-full rounded-md object-cover" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Discover;
