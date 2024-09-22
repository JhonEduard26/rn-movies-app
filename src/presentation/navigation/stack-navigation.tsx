import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/home';
import { DetailsScreen } from '../screens/details/details';

export type RootStackParamList = {
  Home: undefined;
  Details: { movieId: number };
}

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}