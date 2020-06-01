import React from 'react';

import { Text, WebView } from 'react-native-webview';

const Project = ({ navigation }) => (
    <WebView source={{ uri: navigation.state.params.project.web_url }} />
);

Project.navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.project.name
});

export default Project;