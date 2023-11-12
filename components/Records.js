import * as React from 'react';
import { useCallback, useState, useMemo } from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, FlatList, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import RadioGroup from 'react-native-radio-buttons-group';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFonts } from 'expo-font'; import * as SplashScreen from 'expo-splash-screen';
import styles from './styles/records.style';

SplashScreen.preventAutoHideAsync();
Feather.loadFont();
MaterialCommunityIcons.loadFont();

export default Records = () => {
    const [selectedId, setSelectedId] = useState();
    const [name, setName] = useState("")

    const radioButtons = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Male',
            value: 'option1'
        },
        {
            id: '2',
            label: 'Female',
            value: 'option2'
        },
        {
            id: '3',
            label: 'Trans',
            value: 'option3'
        }
    ]), []);

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.headerWrapper}>
                    <Image
                        source={require('../assets/images/Sam.jpg')}
                        style={styles.profileImage}
                    />
                </View>

                <View style={styles.synopsisContainer}>
                    <Text style={styles.synopsisHeader}>Date: 6 Nov, 2023</Text>
                </View>

                <View style={styles.nameSearchContainer}>
                    <View style={styles.nameSearchWrapper}>
                        <TextInput
                            style={styles.nameSearchInput}
                            value={name}
                            onChangeText={(inputText) => setName(inputText)}
                            placeholder='Search'
                        />
                    </View>
                </View>

                <View style={styles.bulletContainer}>
                    <View style={styles.patientContainer}>
                        <Text style={styles.patientText}>1. Patient 1, M, 21</Text>
                        <Text style={styles.patientText}>2. Patient 2, F, 20</Text>
                        <Text style={styles.patientTextLast}>3. Patient 3, M, 32</Text>
                    </View>
                </View>

                {/* <View style={styles.genderContainer}>
                    <Text style={styles.genderHeader}>Gender*:</Text>
                    <View style={styles.genderChoices}>
                        <Text  style={styles.choice}>1. Patient 1, gender: M, 32</Text>
                        <Text  style={styles.choice}>2. Patient 2, gender: F, 23</Text>
                        <Text  style={styles.choice}>3. Patient 3, gender: M, 50</Text>
                    </View>
                </View> */}
            </View>
        </ScrollView>
    )
}