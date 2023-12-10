import * as React from 'react';
import { useCallback, useState } from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, FlatList, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles/auth.style';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFonts } from 'expo-font';
import { showToast } from './common/Toast';
import * as SplashScreen from 'expo-splash-screen';
import { apiPost } from './common/axios';

SplashScreen.preventAutoHideAsync();
Feather.loadFont();
MaterialCommunityIcons.loadFont();

export default Auth = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin() {
        fetch('http://localhost:3000/api/login')
            .then(response => console.log("data got"))
            .then(data => console.log("bdc"))
            .catch(error => console.error('Error in API request:', error));
        // console.log(response)
        // console.log('Login button pressed')
        //     const formData = {
        //         username,
        //         password,
        //     }

        //     const response = await apiPost('/login', formData);
        //     if (response.status == 200) {
        //         navigation.navigate("Register")
        //         showToast('success', 'Success', 'This is a success message');
        //     } 

    };

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.header}>
                <View style={styles.backWrapper}>
                    <TouchableOpacity>
                        <Feather name='chevron-left' size={24} style={{ color: "black" }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.homeWrapper}>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <Feather name='home' size={24} style={{ color: "white" }} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

            <View style={styles.loginHeader}>
                <Text style={styles.loginText}>Login</Text>
            </View>

            <View style={styles.usernameSearchContainer}>
                <Text style={styles.usernameHeader}>Username*:</Text>
                <View style={styles.usernameSearchWrapper}>
                    <TextInput
                        style={styles.usernameSearchInput}
                        value={username}
                        onChangeText={(usernameInput) => setUsername(usernameInput)}
                        placeholder='Username'
                    />
                </View>
            </View>

            <View style={styles.passwordSearchContainer}>
                <Text style={styles.passwordHeader}>Password*:</Text>
                <View style={styles.passwordSearchWrapper}>
                    <TextInput
                        style={styles.passwordSearchInput}
                        value={password}
                        onChangeText={(passwordInput) => setPassword(passwordInput)}
                        placeholder='Password'
                    />
                </View>
            </View>

            <View style={styles.loginBtn}>
                <TouchableOpacity 
                    style={[styles.loginWrapper, {
                        backgroundColor: !username || !password ? "#B7BCB5" : "black",
                        borderWidth: !username || !password ? 0 : 1,
                    }]} 
                    
                    onPress={handleLogin}
                    
                    disabled={!username || !password ? true : false}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.regFP}>
                <TouchableOpacity style={styles.fpBtn}>
                    <Text style={styles.fpText}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.regBtn}
                    // onPress={handleLogin}
                    onPress={() => navigation.navigate("Register")}
                >
                    <Text style={styles.regText}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}