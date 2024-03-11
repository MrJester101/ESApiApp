import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './Screens/HomePage';
import SamplePosts from './Screens/SamplePosts';

import * as Font from 'expo-font';



const Stack = createStackNavigator();

export default class App extends React.Component {
  state = {
    isFontLoaded: false
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Bold': require('./Screens/fonts/Montserrat-ExtraBold.otf'),
      'Medium': require('./Screens/fonts/Montserrat-Medium.otf'),
      'Regular': require('./Screens/fonts/Montserrat-Regular.otf'),
    });
    this.setState({ isFontLoaded: true })
  }

  render() {
    return (
      <NavigationContainer>
        {this.state.isFontLoaded ? (
          <Stack.Navigator>

          <Stack.Screen
              name="SamplePosts"
              component={SamplePosts}
              options={{ headerShown: false }}
            /> 
            
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{ headerShown: false }}
            />
            {/* Add more screens here */}
          
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    );
  }
}
