import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, FlatList, TouchableOpacity, TextInput, Button, Modal, Dimensions, SubText, HeadingText, ScrollView, ImageBackground } from 'react-native';
import styles from './styles/emergencies.style';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default Emergencies = ({ navigation, prop }) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.emerbuttons} onPress={() => alert('Button 1 pressed')}>
                        <Text>Buton1</Text>
                        <ImageBackground
                            source={require('../assets/images/blood.jpg')} // or use a URL: {uri: 'https://example.com/image.jpg'}
                            style={styles.imageBackground}
                            imageStyle={styles.imageStyle} // Optional: to add border radius or other styles to the image
                        >
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.emerbuttons} onPress={() => alert('Button 1 pressed')}>
                        <Text>Buton1</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.emerbuttons} onPress={() => alert('Button 1 pressed')}>
                        <Text>Buton1</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.emerbuttons} onPress={() => alert('Button 1 pressed')}>
                        <Text>Buton1</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.emerbuttons} onPress={() => alert('Button 1 pressed')}>
                        <Text>Buton1</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.emerbuttons} onPress={() => alert('Button 1 pressed')}>
                        <Text>Buton1</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.emerbuttons} onPress={() => alert('Button 1 pressed')}>
                        <Text>Buton1</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.emerbuttons} onPress={() => alert('Button 1 pressed')}>
                        <Text>Buton1</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.emerbuttons} onPress={() => alert('Button 1 pressed')}>
                        <Text>Buton1</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.emerbuttons} onPress={() => alert('Button 1 pressed')}>
                        <Text>Buton1</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}