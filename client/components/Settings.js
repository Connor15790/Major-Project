import * as React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, FlatList, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useCallback, useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import styles from './styles/settings.style';

SplashScreen.preventAutoHideAsync();

export default Settings = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Image
                    source={require("../assets/icons/settings.png")}
                    style={styles.settingsLogo}
                />
                <Text style={styles.titleText}>Settings</Text>
            </View>

            <View style={styles.aboutContainer}>
                <View>
                    <Image
                        source={require("../assets/icons/info.png")}
                        resizeMode='contain'
                        style={styles.infoIcon}
                    />
                </View>
                <Text style={styles.aboutText}>About</Text>
                <View style={{alignItems: "flex-end", justifyContent: "flex-end"}}>
                    <Image
                        source={require("../assets/icons/chevron-right.png")}
                        resizeMode='contain'
                        style={styles.rightIcon}
                    />
                </View>
            </View>
        </View>
    )
}