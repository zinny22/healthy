import {StyleSheet, View} from 'react-native';
import {color} from '../../../styles/color';

interface Props {
  width?: number;
}
function Divider({width = 1}: Props) {
  return <View style={[styles.divider, {borderBottomWidth: width}]} />;
}

const styles = StyleSheet.create({
  divider: {
    borderBottomColor: color.divider,
  },
});

export default Divider;
