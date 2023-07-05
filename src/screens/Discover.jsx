import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Attractions, Avatar, Hotels, Restaurants } from "../../assets";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MenuContainer from "../components/MenuContainer";

const Discover = () => {
  const navigation = useNavigation();
  const [type, setType] = React.useState("restaurants");

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
          <Image
            source={Avatar}
            className="w-full h-full rounded-md object-cover"
          />
        </View>
      </View>

      <View className="flex-row itmes-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4">
        <GooglePlacesAutocomplete
          placeholder="Search"
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          fetchDetails={true}
          onPress={(data, details = null) => {
            console.log(details?.geometry?.viewport);
          }}
          query={{
            key: "AIzaSyBbtHHUDEKg_U7IK-dkeX9x72wI3T5Xuhg",
            language: "en",
          }}
        />
      </View>

      <View className="flex-row items-center justify-between px-8 mt-8">
        <MenuContainer
          key={"hotel"}
          title={"Hotels"}
          imageSrc={Hotels}
          type={type}
          setType={setType}
        />

        <MenuContainer
          key={"attractions"}
          title={"Attractions"}
          imageSrc={Attractions}
          type={type}
          setType={setType}
        />

        <MenuContainer
          key={"restaurants"}
          title={"Restaurants"}
          imageSrc={Restaurants}
          type={type}
          setType={setType}
        />
      </View>
    </SafeAreaView>
  );
};

export default Discover;
