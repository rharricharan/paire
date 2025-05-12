import React from "react";
import { Text, ScrollView, View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SearchPage() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{paddingHorizontal: 16 }}>
                <View style={{
                    flex: 1,
                    width: "100%",
                }}>
                    <Text>Search</Text>
                    <TextInput
                        style={{
                            borderWidth: 1,
                            borderColor: "#ccc",
                            borderRadius: 8,
                            padding: 12,
                            marginTop: 8
                        }}
                        placeholder="Search"
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}