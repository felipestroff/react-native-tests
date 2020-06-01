import React, { Component } from 'react';
import api from '../services/api';

import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default class Main extends Component {
    static navigationOptions = {
        title: 'React Native Tests'
    };

    state = {
        total: 0,
        data: [],
        page: 1
    };

    componentDidMount() {
        this.loadProjects();
    };

    loadProjects = async (page = 1) => {
        try {
            const response = await api.get(`/projects?per_page=3&page=${page}`);

            console.log(response);

            const { data } = response, total = response.length;

            this.setState({
                data: [...this.state.data, ...data],
                total,
                page
            });
        }
        catch (error) {
            console.log(error);
        }
    };

    loadMore = () => {
        const { page, total } = this.state;

        if (page === total) return;

        const pageNumber = page + 1;

        this.loadProjects(pageNumber);
    }

    renderItem = ({ item }) => (
        <View style={styles.projectContainer}>
            <Text style={styles.projectTitle}>{item.name}</Text>
            <Text style={styles.projectDescription}>{item.description}</Text>

            <TouchableOpacity
                style={styles.projectButton}
                onPress={() => {
                    this.props.navigation.navigate('Project', { project: item });
                }}>
                <Text style={styles.projectButtonText}>Acessar</Text>
            </TouchableOpacity>
        </View>
    )

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    contentContainerStyle={styles.list}
                    data={this.state.data}
                    keyExtractor={item => item.id.toString()}
                    renderItem={this.renderItem}
                    onEndReached={this.loadMore}
                    onEndReachedThreshold={0.1}
                />
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA'
    },

    list: {
        padding: 20
    },

    projectContainer: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 5,
        padding: 20,
        marginBottom: 20
    },

    projectTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333'
    },

    projectDescription: {
        fontSize: 16,
        color: '#999',
        marginTop: 5,
        lineHeight: 24
    },

    projectButton: {
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#DA552F',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },

    projectButtonText: {
        fontSize: 16,
        color: '#DA552F',
        fontWeight: 'bold'
    }
});