import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "FoodScreen",
  },
];
const NavOptions = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      className="ml-3"
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          className="p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40"
        >
          <Image
            className="w-32 h-32"
            style={{ resizeMode: "contain" }}
            source={{ uri: item.image }}
          />
          <Text className="mt-2 text-lg font-semibold">{item.title}</Text>
          <Icon
            name="arrowright"
            color="white"
            type="antdesign"
            className="p-2 bg-black w-10 mt-4 rounded-full"
          />
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
