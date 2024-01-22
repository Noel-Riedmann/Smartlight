import React from "react";
import { StyleSheet, Image } from "react-native";
import RNPickerSelect, { PickerSelectProps } from "react-native-picker-select";
import { Text, View } from "../../components/Themed";

export default function IconAndDropdownCard(props: {
  icon: any;
  dropdownOptions: string[];
}) {
  const items = props.dropdownOptions.map((value) => ({ label: value, value }));

  return (
    <View style={styles.container}>
      <Image source={props.icon} />
      <View style={styles.dropdownField}>
        <RNPickerSelect
          placeholder={{ label: "Select an option", value: null }}
          items={items}
          style={pickerSelectStyles}
          onValueChange={(value) => {
            // Handle the selected value as needed
            console.log(value);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2D3142",
    width: "90%",
    padding: 20,
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
  },
  dropdownField: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "transparent",
    alignItems: "center",
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "white",
    paddingRight: 30,
  },
  inputAndroid: {
    backgroundColor: "#2D3142",
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "white",
    paddingRight: 30,
  },
});
