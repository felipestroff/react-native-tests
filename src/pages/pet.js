import React from 'react';

import { WebView } from 'react-native-webview';

const Pet = ({ navigation }) => (
    <WebView source={{ /*uri: navigation.state.params.pet*/ }} />
);

Pet.navigationOptions = ({ navigation }) => ({
    //title: navigation.state.params.pet
});

export default Pet;