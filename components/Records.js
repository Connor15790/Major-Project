import * as React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, FlatList, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFonts } from 'expo-font';
import { useCallback, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import styles from './styles/records.style';

SplashScreen.preventAutoHideAsync();
Feather.loadFont();
MaterialCommunityIcons.loadFont();

export default Records = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.headerWrapper}>
                    <Image
                        source={require('../assets/images/Sam.jpg')}
                        style={styles.profileImage}
                    />
                </View>
            </View>
        </ScrollView>
    )
}