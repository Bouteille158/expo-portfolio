import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import HorizontalSeparator from "../components/HorizontalSeparator";
import { data } from "../data";
import { useState } from "react";

export default function PortfolioScreen() {
  const [categoryIndex, setCategoryIndex] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.profileCard}>
        <View style={styles.profilePicture}>
          <Image
            style={{ height: "100%", width: "100%" }}
            source={{
              uri: "https://www.pokekalos.fr/assets/images/jeux/or-argent/starters/hericendre.png",
            }}
          />
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Alexandre BENALI</Text>
          <Text style={styles.profileDesc}>
            Developpeur backend chez QwestTV
          </Text>
        </View>
      </View>
      <HorizontalSeparator />
      <View style={styles.categorySelector}>
        {data.categories.map((category, index) => (
          <Pressable
            key={index}
            style={[
              styles.categoryButton,
              {
                backgroundColor:
                  index === categoryIndex ? "#d6d6d6" : "#efefef",
              },
            ]}
            onPress={() => {
              setCategoryIndex(index);
              console.log(index);
            }}
          >
            <Text>{category.name}</Text>
          </Pressable>
        ))}
      </View>
      <HorizontalSeparator />
      <View style={styles.category}>
        <Text style={styles.categoryTitle}>
          {data.categories[categoryIndex].name}
        </Text>
        {data.categories[categoryIndex].list.map((item, index) => (
          <View key={index}>
            <Text>{/* Empty box */}</Text>
            <Text style={styles.categoryText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  categorySelector: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  category: {
    width: "90%",
    alignItems: "center",
  },
  categoryButton: {
    padding: 10,
    borderWidth: 2,
    borderColor: "lightgrey",
    backgroundColor: "#efefef",
    borderRadius: 5,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  categoryText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
    marginHorizontal: 50,
  },
  profileCard: {
    marginTop: 10,
    width: "90%",
    flexDirection: "row",
  },
  profilePicture: {
    width: 110,
    height: 110,
    backgroundColor: "white",
    padding: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "black",
  },
  profileInfo: {
    paddingLeft: 10,
    flexShrink: 1,
  },
  profileName: { fontSize: 28, fontWeight: "bold" },
  profileDesc: {
    fontSize: 17,
    lineHeight: 24,
  },
});
