import {Image, ImageSourcePropType, StyleSheet, View, Text} from 'react-native';

const DessertSection: React.FC<{
  name: string;
  type: string;
  price: string;
  image: ImageSourcePropType;
}> = ({name, type, price, image}) => {
  return (
    <View style={styles.dessertInfoView}>
      <Image style={styles.dessertImage} source={image} />
      <View style={styles.sectionContainer}>
        <Text style={styles.dessertName}>{name}</Text>
        <Text style={styles.dessertType}>{type}</Text>
        <Text style={styles.dessertPrice}>{price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dessertImage: {
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    marginTop: 20,
    zIndex: 1,
    marginLeft: 10,
    marginRight: -50,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 25,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    flex: 1,
    marginRight: 10,
    paddingTop: 20,
  },
  dessertInfoView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  dessertName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#5A4682',
    paddingLeft: 30,
    paddingBottom: 10,
  },
  dessertType: {
    fontSize: 12,
    fontWeight: '500',
    color: '#CAC4D5',
    paddingLeft: 30,
    paddingBottom: 10,
  },
  dessertPrice: {
    fontSize: 12,
    fontWeight: '500',
    color: '#151515',
    paddingLeft: 30,
    paddingBottom: 10,
  },
});
export default DessertSection;
