import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {color} from '../../../styles/color';
import Divider from '../divider/Divider';

interface Props {
  title: string;
  onPress?: () => void;
}
function SectionTitle({title, onPress}: Props) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>

        <Pressable onPress={onPress}>
          <Icon name="navigate-next" size={24} color={color.sub} />
        </Pressable>
      </View>

      <Divider />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    rowGap: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: color.main,
  },
});

export default SectionTitle;
