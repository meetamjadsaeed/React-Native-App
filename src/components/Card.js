import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ title }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 150,
        height: 150,
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        margin: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Card;
