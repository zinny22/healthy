import {StyleSheet, Text, View} from 'react-native';
import {BodyTypeKey, FoodType} from '../../../schema/bodyType.schema';
import {color} from '../../../styles/color';
import SectionTitle from '../../atoms/sectionTitle/SectionTitle';

interface Props {
  item: {
    title: BodyTypeKey;
    data: FoodType;
  };
}
function ItemCard({item}: Props) {
  return (
    <View key={item.title}>
      <SectionTitle title={item.title} />

      {Object.entries(item.data).map(([key, value], index) => (
        <View key={index} style={styles.sunContainer}>
          <Text style={styles.subTitle}>{key}</Text>

          <View style={styles.list}>
            {value.map((item, index) => (
              <Text key={item} style={styles.item}>
                {item}
              </Text>
            ))}
          </View>
        </View>
      ))}

      {/* <Divider width={20} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  sunContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 14,
    gap: 30,
  },
  subTitle: {
    fontSize: 14,
    color: color.main,
    fontFamily: 'Pretendard-SemiBold',
  },
  list: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 25,
  },
  item: {
    fontSize: 14,
    color: '#676767',
    fontFamily: 'Pretendard-Regular',
  },
});

export default ItemCard;
