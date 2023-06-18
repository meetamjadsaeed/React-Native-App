import React, { useState, useEffect } from "react";
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Card from '../components/Card';

import AppService from '../services/appServices';

// Import your custom marker image
import MarkerImage from '../../assets/marker/marker1.png';

const locations = [
    { id: 1, latitude: 37.78825, longitude: -122.4324, title: 'Markergjh 1' },
    { id: 2, latitude: 37.785, longitude: -122.435, title: 'Markersds 2' },
    { id: 3, latitude: 37.785, longitude: -122.435, title: 'Marker 3' },
    { id: 4, latitude: 37.785, longitude: -122.435, title: 'Marker 4' },
    { id: 5, latitude: 37.785, longitude: -122.435, title: 'Marker 5' },
    { id: 6, latitude: 37.785, longitude: -122.435, title: 'Marker 6' },

    // Add more locations as needed
];

const CustomMarker = () => (
    <Image source={MarkerImage} style={styles.markerImage} />
);

const HomeScreen = () => {
    const [getVenues, setVenues] = useState([]);
    const [getLocations, setLocations] = useState([]);
    const [loading, setLoading] = useState(true);

    const getAllVenues = async () => {
        try {
            setLoading(true);
            const apiResp = await AppService.allVenues();
            const response = apiResp?.data;
            console.log(response, "response");
            setVenues(response);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllVenues();
    }, []);

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {locations?.map((location) => (
                    <Marker
                        key={location.id}
                        coordinate={{ latitude: location?.latitude, longitude: location?.longitude }}
                        title={location?.title}
                    // image={CustomMarker} 
                    />
                ))}
            </MapView>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {locations?.map((location) => (
                    <Card key={location?.id} title={location?.title} />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    markerImage: {
        width: 32,
        height: 32,
    },
});

export default HomeScreen;
