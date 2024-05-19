import React, { useState } from 'react';
import { SafeAreaView, View, Button, Alert, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

const App = () => {
  const [view, setView] = useState('map'); // 'map' or 'list'
  const [region, setRegion] = useState({
    latitude: 22.990278,
    longitude: 72.654927,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const mapStyle = []; // Define your custom map style if any

  const coordinates = [
    { latitude: 22.990278, longitude: 72.654927, name: 'Location 1' },
    { latitude: 23.0225, longitude: 72.5714, name: 'Location 2' },
    { latitude: 23.0396, longitude: 72.5660, name: 'Location 3' },
  ];

  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleViewChange('list')}>
          <Text style={styles.buttonText}>Show List of Places</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleViewChange('map')}>
          <Text style={styles.buttonText}>Show Map</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        {view === 'map' ? (
          <MapView
            style={styles.mapStyle}
            initialRegion={region}
          >
            {coordinates.map((coord, index) => (
              <Marker
                key={index}
                draggable
                coordinate={{ latitude: coord.latitude, longitude: coord.longitude }}
                onDragEnd={(e) => Alert.alert(JSON.stringify(e.nativeEvent.coordinate))}
                title={`Marker ${index + 1}`}
                description={coord.name}
              />
            ))}
            <Polyline
              coordinates={coordinates}
              strokeColor="#000"
              strokeWidth={4}
            />
          </MapView>
        ) : (
          <FlatList
            data={coordinates}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                <Text style={styles.listItemText}>{item.name}</Text>
                <Text style={styles.listItemText}>Latitude: {item.latitude}</Text>
                <Text style={styles.listItemText}>Longitude: {item.longitude}</Text>
              </View>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mapStyle: {
    width: '100%',
    height: '100%',
  },
  listItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  listItemText: {
    fontSize: 16,
  },
});

export default App;
