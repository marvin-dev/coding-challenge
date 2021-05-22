import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import News from './components/News';
import NewsDetails from './components/NewsDetails';

const screens = {
  News: {
    screen: News,
    navigationOptions: () => {
      return {
        header: null,
      };
    },
  },
  NewsDetails: {
    screen: NewsDetails,
    navigationOptions: () => {
      return {
        headerTitle: null,
      };
    },
  },
};

const Stack = createStackNavigator(screens);
const Routes = createAppContainer(Stack);

export class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Routes />
      </SafeAreaView>
    );
  }
}

export default App;
