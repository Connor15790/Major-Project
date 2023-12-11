import * as React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, FlatList, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useCallback, useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import styles from './styles/profile.style';

SplashScreen.preventAutoHideAsync();

export default Profile = () => {

    // const [userData, setUserData] = useState([]);

    // useEffect(() => {
    //     async function fetchUserData() {
    //         const response = await apiPost('/register', formData);
    //     }
    // })

    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text style={styles.titleText}>Profile</Text>
            </View>

            <View style={styles.headerWrapper}>
                <Image
                    source={require('../assets/images/doctor.jpg')}
                    style={styles.profileImage}
                />
            </View>

            <View style={styles.synopsisContainer}>
                <Text style={styles.synopsisHeader}>Roronoa Zoro</Text>
                <Text style={styles.usernameHeader}>@roronoazoro</Text>
            </View>

            <ScrollView>
            <View style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 2,
                    marginTop: 40,
                    marginHorizontal: 50
                }}>
                </View>

                <View style={styles.idContainer}>
                    <Text style={styles.idText}>ID Number</Text>
                </View>

                <View style={styles.idnoContainer}>
                    <Text style={styles.idnoText}>001</Text>
                </View>

                <View style={{
                    borderBottomColor: '#D8DDD6',
                    borderBottomWidth: 1.5,
                    marginTop: 5,
                    marginHorizontal: 30
                }}>
                </View>

                <View style={styles.licenseContainer}>
                    <Text style={styles.licenseText}>License Number</Text>
                </View>

                <View style={styles.licensenoContainer}>
                    <Text style={styles.licensenoText}>AMC-672878</Text>
                </View>

                <View style={{
                    borderBottomColor: '#D8DDD6',
                    borderBottomWidth: 1.5,
                    marginTop: 5,
                    marginHorizontal: 30
                }}>
                </View>

                <View style={styles.profContainer}>
                    <Text style={styles.profText}>Profession</Text>
                </View>

                <View style={styles.professionContainer}>
                    <Text style={styles.professionText}>Doctor</Text>
                </View>

                <View style={{
                    borderBottomColor: '#D8DDD6',
                    borderBottomWidth: 1.5,
                    marginTop: 5,
                    marginHorizontal: 30
                }}>
                </View>

                <View style={styles.emContainer}>
                    <Text style={styles.emText}>Email</Text>
                </View>

                <View style={styles.emailContainer}>
                    <Text style={styles.emailText}>zorororonoa123@gmail.com</Text>
                </View>

                <View style={{
                    borderBottomColor: '#D8DDD6',
                    borderBottomWidth: 1.5,
                    marginTop: 5,
                    marginHorizontal: 30
                }}>
                </View>

                <View style={styles.phoneContainer}>
                    <Text style={styles.phoneText}>Phone Number</Text>
                </View>

                <View style={styles.phonenoContainer}>
                    <Text style={styles.phonenoText}>+91 8638064514</Text>
                </View>

                <View style={{
                    borderBottomColor: '#D8DDD6',
                    borderBottomWidth: 1.5,
                    marginTop: 5,
                    marginHorizontal: 30
                }}>
                </View>

                <View style={styles.logoutContainer}>
                    <TouchableOpacity style={styles.logoutBtn}>
                        <Text style={styles.logoutText}>Logout</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
        </View>
    )
}