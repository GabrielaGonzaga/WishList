// In your StackNavigator.tsx

import { createStackNavigator } from '@react-navigation/stack';
import WishList from '../Pages/WishList';
import Items from '../Pages/Items';
import AddItems from '../Pages/AddItems';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen  name="ITEMS" component={Items} /> 
      <Stack.Screen name="WISHLIST" component={WishList} />
      <Stack.Screen name="ADDITEMS" component={AddItems} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
