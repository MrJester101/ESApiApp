

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from '../Screens/HomePage';
// import Detail from '../Screens/Detail';
// import AddPost from '../Screens/AddPost';
// import SocialLogin from '../Screens/SocialLogin';

const stackNavigatorOptions = {
  headerShown: false,
};

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    // Detail: { screen: Detail },
    // AddPost: { screen: AddPost },
    // SocialLogin:{screen:SocialLogin},
  },
  {
    defaultNavigationOptions: stackNavigatorOptions,
  }
);

export default createAppContainer(AppNavigator);