import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {color} from '../styles/color';

type Detail = {
  name: string;
};

type navigatorType = {
  Detail: Detail;
};

function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<navigatorType>>();

  const [containerWidth, setContainerWidth] = useState(0);

  const numColumns = 2;

  const list = ['태음인', '태양인', '소음인', '소양인'];
  return (
    <View style={styles.warp}>
      <View style={styles.banner}>
        <Text style={styles.title}>당신의 체질은</Text>
        <Text style={styles.title}>무엇인가요?</Text>
      </View>

      <FlatList
        data={list}
        columnWrapperStyle={styles.columnWrapper}
        onLayout={e => setContainerWidth(e.nativeEvent.layout.width)}
        numColumns={numColumns}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => {
              navigation.push('Detail', {name: item});
            }}>
            <View style={styles.circle} />
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  warp: {
    justifyContent: 'center',
  },

  logo: {
    fontWeight: '500',
    fontSize: 16,
    color: 'white',
    position: 'absolute',
    top: 40,
  },
  banner: {
    height: '40%',
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 28,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 40,
    color: color.main,
    fontFamily: 'Pretendard-Bold',
  },

  columnWrapper: {
    gap: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  touchable: {
    gap: 10,
    alignItems: 'center',
    paddingVertical: 10,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: color.sub,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Pretendard-regular',
  },
});
export default HomeScreen;
