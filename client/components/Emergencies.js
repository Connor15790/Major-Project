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
                    <TouchableOpacity style={styles.emerbuttons} onPress={() => navigation.navigate("Blood_Loss")}>
                        <Text>Blood Loss</Text>
                        <ImageBackground
                            source={require('../assets/images/blood.jpg')} // or use a URL: {uri: 'https://example.com/image.jpg'}
                            style={styles.imageBackground}
                            imageStyle={styles.imageStyle} // Optional: to add border radius or other styles to the image
                        >
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.emerbuttons} onPress={() => navigation.navigate("Cuts")}>
                        <Text>Cuts & Bruises</Text>
                        <ImageBackground
                            source={require('../assets/images/cuts.jpg')} // or use a URL: {uri: 'https://example.com/image.jpg'}
                            style={styles.imageBackground}
                            imageStyle={styles.imageStyle} // Optional: to add border radius or other styles to the image
                        >
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.emerbuttons} onPress={() => navigation.navigate("Fractures")}>
                        <Text>Fractures</Text>
                        <ImageBackground
                            source={require('../assets/images/fracture.jpg')} // or use a URL: {uri: 'https://example.com/image.jpg'}
                            style={styles.imageBackground}
                            imageStyle={styles.imageStyle} // Optional: to add border radius or other styles to the image
                        >
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.emerbuttons} onPress={() => navigation.navigate("Allergies")}>
                        <Text>Allergies</Text>
                        <ImageBackground
                            source={require('../assets/images/allergy.jpg')} // or use a URL: {uri: 'https://example.com/image.jpg'}
                            style={styles.imageBackground}
                            imageStyle={styles.imageStyle} // Optional: to add border radius or other styles to the image
                        >
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.emerbuttons} onPress={() => navigation.navigate("Infections")}>
                        <Text>Infections</Text>
                        <ImageBackground
                            source={require('../assets/images/infection.jpg')} // or use a URL: {uri: 'https://example.com/image.jpg'}
                            style={styles.imageBackground}
                            imageStyle={styles.imageStyle} // Optional: to add border radius or other styles to the image
                        >
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.emerbuttons} onPress={() => navigation.navigate("Drowning")}>
                        <Text>Drowning</Text>
                        <ImageBackground
                            source={require('../assets/images/drowning.jpg')} // or use a URL: {uri: 'https://example.com/image.jpg'}
                            style={styles.imageBackground}
                            imageStyle={styles.imageStyle} // Optional: to add border radius or other styles to the image
                        >
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.emerbuttons} onPress={() => navigation.navigate("Heart_Attack")}>
                        <Text>Heart Attack</Text>
                        <ImageBackground
                            source={require('../assets/images/heart_attack.jpg')} // or use a URL: {uri: 'https://example.com/image.jpg'}
                            style={styles.imageBackground}
                            imageStyle={styles.imageStyle} // Optional: to add border radius or other styles to the image
                        >
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.emerbuttons} onPress={() => navigation.navigate("Choking")}>
                        <Text>Choking</Text>
                        <ImageBackground
                            source={require('../assets/images/choking.jpg')} // or use a URL: {uri: 'https://example.com/image.jpg'}
                            style={styles.imageBackground}
                            imageStyle={styles.imageStyle} // Optional: to add border radius or other styles to the image
                        >
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.emerbuttons} onPress={() => navigation.navigate("Strokes")}>
                        <Text>Strokes</Text>
                        <ImageBackground
                            source={require('../assets/images/Stroke.jpg')} // or use a URL: {uri: 'https://example.com/image.jpg'}
                            style={styles.imageBackground}
                            imageStyle={styles.imageStyle} // Optional: to add border radius or other styles to the image
                        >
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.emerbuttons} onPress={() => navigation.navigate("Overdose")}>
                        <Text>Overdose</Text>
                        <ImageBackground
                            source={require('../assets/images/overdose.jpg')} // or use a URL: {uri: 'https://example.com/image.jpg'}
                            style={styles.imageBackground}
                            imageStyle={styles.imageStyle} // Optional: to add border radius or other styles to the image
                        >
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}