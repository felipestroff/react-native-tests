import React, { Component } from 'react';
import api from '../services/api';

import { View, Text } from 'react-native';

export default class Search extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.search.name
    });

    state = {
        total: 0,
        data: [],
        page: 1
    };
    
    componentDidMount() {
        this.loadPets();
    };

    loadPets = async (page = 1) => {
        try {
            const response = await api.get(`/dogs/page=${page}`);

            console.log(response);

            /*const { data } = response, total = response.length;

            this.setState({
                data: [...this.state.data, ...data],
                total,
                page
            });*/
        }
        catch (error) {
            console.log(error);
        }
    };

    render() {
        return (
            <View>
                <Text>Teste</Text>
            </View>
        );
    };
}