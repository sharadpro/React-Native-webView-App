
import React from 'react';
import WebView from 'react-native-webview';
import {
  Alert,
  Text,
  View,
  Image,
  BackHandler,
  ActivityIndicator,
} from 'react-native';

export default class Incentivo extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isLoading: true, canGoBack: false };
  }
  onButtonPress = () => {
    this.backHandler = BackHandler.exitApp();
  };
  handleBackPress = () => {
    if (this.state.canGoBack) {
      this.refWeb.goBack();
    } else {
      Alert.alert(
        '',
        'Do You Want To Exit',
        [
          { text: 'Yes', onPress: () => this.onButtonPress() },
          {
            text: 'No',
            onPress: () => console.log('No'),
            style: 'cancel',
          },
        ],
        { cancelable: false }
      );
    }
    return true;
  };
  async componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);

    // try {
    //   const response = await fetch('http://192.168.2.26:9080/PCMS/');
    //http://192.168.2.40:8080/PCMS_V2_HomeLoan/
    //   this.setState(
    //     {
    //       isLoading: false,
    //     },

    //     function() {}
    //   );
    // } catch (error) {
    //   console.error(error);
    // }
  }
  onNavigationStateChange(navState) {
    this.setState({
      canGoBack: navState.canGoBack,
    });
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  render() {
   

    return (
      <View style={{ flex: 1}}>
        <WebView
          ref={myWeb => (this.refWeb = myWeb)}
          onNavigationStateChange={this.onNavigationStateChange.bind(this)}
          source={{ uri: 'http://192.168.2.42:8080/PCMS_V2_HomeLoan/' }}
          style={{ flex: 1 }}
        />
      </View>
    );
  }
}
//marginTop: 20,, backgroundColor: 'royalblue'  