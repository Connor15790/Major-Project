import * as React from 'react';
import { useCallback, useState, useMemo } from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, FlatList, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform, Modal, Pressable } from 'react-native';
import styles from '../styles/casualties2.style';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default DisplayModal = (props) => {
    return (
        <View style={styles.centeredView}>
            <Text>wrgwregrwgrwgrw</Text>
            {/* <Modal
                animationType="slide"
                transparent={true}
                visible={!modalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Form has been submitted!</Text>
                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal> */}
        </View>
    )
}