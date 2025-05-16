import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function NotFoundScreen() {
  return (
    <>
      <View style={styles.container}>
        <Text>Página não existente.</Text>
        <TouchableOpacity style={styles.link}>
          <Link href={"/"} style={styles.btn}>Voltar</Link>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#696969'
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  btn: {
    borderRadius: 999,
    backgroundColor: '#778899',
    padding: 10
  }
});
