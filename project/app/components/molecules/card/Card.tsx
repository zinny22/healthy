import {StyleSheet, Text, View} from 'react-native';
import {BodyTypeKey} from '../../../schema/bodyType.schema';
import Divider from '../../atoms/divider/Divider';
import SectionTitle from '../../atoms/sectionTitle/SectionTitle';

interface Props {
  item: {
    title: BodyTypeKey;
    data: string[];
  };
}

function Card({item}: Props) {
  return (
    <View>
      <SectionTitle title={item.title} />

      <View style={styles.list}>
        {item.data.map(_item => (
          <Text key={_item} style={styles.item}>
            - {_item}
          </Text>
        ))}
      </View>

      <Divider width={20} />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    gap: 25,
    padding: 16,
  },
  item: {
    fontSize: 14,
    color: '#676767',
  },
});

export default Card;
