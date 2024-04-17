import {View} from 'react-native';
import {Text} from 'react-native-paper';

interface DetailProps {
  route: {
    params: {
      name: string;
    };
  };
}
function Detail(props: DetailProps) {
  console.log(props.route.params.name);
  return (
    <View>
      <Text>디테일 페이지 </Text>
    </View>
  );
}

export default Detail;
