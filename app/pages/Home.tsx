import {Button, StyleSheet, Text, View} from 'react-native';

function Home() {
  return (
    <View style={styles.warp}>
      <Text style={styles.title}>내 채질 찾기</Text>

      <View style={styles.buttonWrapper}>
        <Button title="태음인" onPress={() => console.log('태음인')} />
        <Button title="태음인" onPress={() => console.log('태음인')} />
        <Button title="태음인" onPress={() => console.log('태음인')} />
        <Button title="태음인" onPress={() => console.log('태음인')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  warp: {
    justifyContent: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: 32,
  },
  buttonWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    width: 300,
  },
});
export default Home;
