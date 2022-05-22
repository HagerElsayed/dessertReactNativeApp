import {StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import SearchBox from './SearchBox';
import desserts from './Data/Desserts';
import DessertSection from './DessertSection';
import {StackScreenProps} from '@react-navigation/stack';
const DessertsList = ({navigation}: StackScreenProps<{Details: any}>) => {
  return (
    <View style={styles.mainContainer}>
      <SearchBox />
      <FlatList
        style={styles.dessertList}
        data={desserts}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Details', item)}>
            <DessertSection
              name={item.name}
              type={item.type}
              price={item.price}
              image={item.image}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: '#F5F7FF',
  },
  dessertList: {
    paddingVertical: 10,
  },
});
export default DessertsList;
