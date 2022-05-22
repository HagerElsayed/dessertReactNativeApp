import {
  Dimensions,
  Image,
  StyleSheet,
  View,
  ScrollView,
  Text,
} from 'react-native';
import AmountView from './AmountView';
import CartButton from './CartButton';
import SingleDeteailsInfoView, {commonStyle} from './SingleDeteailsInfoView';

const DessertDetails = ({route}: {route: any}) => {
  const item = route.params;
  return (
    <View style={styles.mainViewContainer}>
      <ScrollView style={styles.scrollView}>
        <View>
          <Image style={styles.banner} source={item.image} />
          <Text style={[styles.dessertName, commonStyle.itemPadding]}>
            {item.name}
          </Text>

          <View style={[styles.mainAmountView, commonStyle.rowView]}>
            <Text style={[styles.dessertPrice, commonStyle.itemPadding]}>
              {item.price}
            </Text>
            <View style={commonStyle.rowView}>
              <AmountView operation="-" />
              <Text style={styles.amountText}>1</Text>
              <AmountView operation="+" />
            </View>
          </View>
          <View style={[styles.mainInfoView, commonStyle.rowView]}>
            <SingleDeteailsInfoView
              info="100 Calories"
              image={require('../Assets/gym.png')}
            />
            <SingleDeteailsInfoView
              info="Free Delivery"
              image={require('../Assets/delivery.png')}
            />
            <SingleDeteailsInfoView
              info="20 - 30 min"
              image={require('../Assets/time.png')}
            />
          </View>
          <Text style={commonStyle.itemPadding}>Description:</Text>
          <Text style={[commonStyle.itemPadding, styles.description]}>
            {item.description}
          </Text>
          <CartButton />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 10,
  },
  scrollView: {
    flex: 1,
  },
  banner: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.5,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    resizeMode: 'cover',
  },
  dessertName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5A4682',
    paddingLeft: 30,
    paddingTop: 20,
  },
  dessertPrice: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#151515',
  },
  mainAmountView: {
    justifyContent: 'space-between',
  },
  amountText: {
    padding: 5,
  },
  mainInfoView: {
    padding: 16,
    paddingVertical: 20,
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    color: '#707070',
  },
});
export default DessertDetails;
