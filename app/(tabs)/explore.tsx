import { Text } from '@react-navigation/elements';
import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

export default function TabTwoScreen() {
  return (
    <Text></Text>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
