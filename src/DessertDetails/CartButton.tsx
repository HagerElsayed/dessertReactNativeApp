import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {commonStyle} from './SingleDeteailsInfoView';

const CartButton = () => {
  return (
    <TouchableOpacity style={[styles.addToCart, commonStyle.itemPadding]}>
      <Text style={styles.addToCartText}> Add to cart</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addToCart: {
    backgroundColor: '#5A4682',
    borderRadius: 25,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  addToCartText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
export default CartButton;
