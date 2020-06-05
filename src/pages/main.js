import React, { Component } from 'react';

import { View, Text, Image, ImageBackground, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default class Main extends Component {
    static navigationOptions = {
        title: 'Resgate de Pets'
    };

    state = {
        data: []
    };

    componentDidMount() {
        this.loadOptions();
    };

    loadOptions = () => {
        this.setState({
            data: [
                {
                    id: 'dog',
                    name: 'Adote um cão',
                    image: require('../images/dog.png')
                },
                {
                    id: 'cat',
                    name: 'Adote um gato',
                    image: require('../images/cat.png')
                },
                {
                    id: 'other',
                    name: 'Outro bichinho...',
                    image: require('../images/other.png')
                },
            ]
        });
    }

    renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => {
                this.props.navigation.navigate('Search', { search: item });
            }}
        >
            <View style={styles.itemContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.itemImage}
                        source={item.image}
                    />
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.itemName}>{item.name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={{ uri: 'https://d339b5nop2tkmp.cloudfront.net/assets/ui-redesign/homepage-banners/banner-4-3c8f1da93f501f150b77ffe81f2ecf135d849720502b3a5af564827823744be7.jpg' }}
                    style={styles.image}>
                    <FlatList
                        contentContainerStyle={styles.list}
                        data={this.state.data}
                        keyExtractor={item => item.id}
                        renderItem={this.renderItem}
                    />
                </ImageBackground>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },

    list: {
        padding: 20
    },

    itemContainer: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#003226',
        padding: 20,
        marginBottom: 20,
    },

    imageContainer: {
        backgroundColor: '#68B403',
        borderWidth: 5,
        borderRadius: 50,
        borderColor: '#003226',
        padding: 5
    },

    nameContainer: {
        justifyContent: 'center',
        marginLeft: 20
    },

    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#003226'
    },
});