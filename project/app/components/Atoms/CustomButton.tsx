import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

interface CustomButtonProps {
  label: string;
  onPress: () => void;
}

function CustomButton({onPress, label}: CustomButtonProps) {
  return (
    <Pressable style={[styles.button]} onPress={onPress}>
      <Text style={[styles.label]}>{label}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 5,
  },
  label: {
    fontSize: 15,
  },
});

export default CustomButton;
