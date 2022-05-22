import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Dimensions, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DessertDetails from './DessertDetails/DessertDetails';
import DessertsList from './DessertsList/DessertsList';

const Stack = createStackNavigator();
const MenuIcon = () => {
  return <Icon style={styles.menuIcon} name="bars" size={20} color="#363636" />;
};

const HeartIcon = () => {
  return (
    <Icon style={styles.menuIcon} name="heart" size={20} color="#363636" />
  );
};
const DessertApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{
            title: 'Home',
            headerTitleAlign: 'center',
            headerLeft: () => <MenuIcon />,
            headerTransparent: true,
            cardStyle: {height: Dimensions.get('window').height},
          }}
          name={'Home'}
          key={'Home'}
          component={DessertsList}
        />
        <Stack.Screen
          options={({navigation}) => ({
            title: '',
            headerTransparent: true,
            cardStyle: {height: Dimensions.get('window').height},
            headerLeft: () => (
              <Icon
                style={styles.menuIcon}
                name="angle-left"
                size={30}
                color="#363636"
                onPress={() => navigation.pop()}
              />
            ),
            headerRight: () => <HeartIcon />,
          })}
          name={'Details'}
          key={'Details'}
          component={DessertDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  menuIcon: {
    padding: 20,
  },
});
export default DessertApp;
