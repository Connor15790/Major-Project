import * as React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, FlatList, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useCallback, useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import styles from './styles/changepass.style';

SplashScreen.preventAutoHideAsync();

export default Changepass = () => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.changepassHeader}>
                <Text style={styles.changepassText}>Change Password</Text>
            </View>

            <View style={styles.newPassSearchContainer}>
                <Text style={styles.newPassHeader}>New password:</Text>
                <View style={styles.newPassSearchWrapper}>
                    <TextInput
                        style={styles.newPassSearchInput}
                        value={newPassword}
                        onChangeText={(inputText) => setNewPassword(inputText)}
                    />
                </View>
            </View>

            <View style={styles.confirmNewPassSearchContainer}>
                <Text style={styles.confirmNewPassHeader}>Confirm password:</Text>
                <View style={styles.confirmNewPassSearchWrapper}>
                    <TextInput
                        style={styles.confirmNewPassSearchInput}
                        value={confirmNewPassword}
                        onChangeText={(inputText) => setConfirmNewPassword(inputText)}
                    />
                </View>
            </View>

            <View style={styles.loginBtn}>
                <TouchableOpacity
                    style={[styles.loginWrapper, {
                        backgroundColor: !newPassword || !confirmNewPassword ? "#B7BCB5" : "black",
                        borderWidth: !newPassword || !confirmNewPassword ? 0 : 1,
                    }]}

                    onPress={{}}

                    disabled={!newPassword || !confirmNewPassword ? true : false}>
                    <Text style={styles.loginButtonText}>Change Password</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}