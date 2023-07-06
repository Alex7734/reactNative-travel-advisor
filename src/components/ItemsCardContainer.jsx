import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

function ItemsCardContainer({ imageSrc, title, location, data }) {
  
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity
     onPress={() => navigation.navigate("ItemScreen", {param: data})} 
     className="w-[45%] rounded-sm border border-gray-300 space-y-2 px-3 py-2"
    >
      <Image
        source={{ uri: imageSrc }}
        className="w-full h-40 rounded-md object-cover"
      />

      {title && location && (
        <>
          <Text className="text-[#428288] text-[18px] font-bold">
            {title?.length > 14 ? `${title.slice(0, 14)}...` : title}
          </Text>

          <View className="items-center space-x-1 flex-row">
            <FontAwesome name="map-marker" size={24} color="#8597A2" />
            <Text className="text-[#428288] text-[14px] font-bold">
              {location?.length > 14 ? `${location.slice(0, 14)}...` : location}
            </Text>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
}

export default ItemsCardContainer;
