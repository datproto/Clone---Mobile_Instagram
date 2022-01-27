import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";
import { USERS } from "../../data/users";

const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View key={index} style={{ alignItems: "center" }}>
            <Image source={{ uri: story.picture }} style={styles.story} />
            <Text style={{ color: "white" }}>
              {story.firstName.length + story.lastName.length > 10
                ? story.firstName.toLowerCase() +
                  " " +
                  story.lastName.toLowerCase() +
                  "..."
                : story.firstName.toLowerCase() +
                  " " +
                  story.lastName.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 2,
    borderColor: "#ff8501",
  },
});

export default Stories;
