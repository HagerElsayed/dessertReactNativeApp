import {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const SearchBox = () => {
  const [text, setText] = useState('');
  return (
    <View style={styles.searchSection}>
      <Icon style={styles.icon} name="search" size={15} color="#030303" />
      <TextInput
        style={styles.input}
        placeholder="Search dessert.."
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchSection: {
    height: 50,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius: 25,
    marginHorizontal: 30,
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    padding: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#424242',
    height: 40,
    marginRight: 20,
  },
});
export default SearchBox;
