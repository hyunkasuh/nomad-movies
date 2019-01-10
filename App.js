import React from 'react';
import { AppLoading, Font } from "expo";
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import Asset from 'expo-asset/src/Asset';

export default class App extends React.Component {
  state = {
    loaded: false
  };

  handleError = (error) => console.log(error);

  handleLoaded = () => this.setState({ loaded: true });

  loadeAssets = async () => {
    throw new Error("Im hungry!!!");
    await Font.loadAsync({
      ...Iconicons.font
    });
    // await Asset.loadAsync([
    //   require("images/icon.png")
    // ])
  };

  render() {
    const { loaded } = this.state;
    if (loaded) {
      return (
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      );
    } else {
      return (
        <AppLoading
          startAsync={this.loadAssets}
          onFinish={this.handleLoaded}
          onError={this.handleError}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
