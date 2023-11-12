import * as React from 'react';
import { useCallback, useState, useMemo } from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, FlatList, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import { SelectList } from 'react-native-dropdown-select-list'
import styles from './styles/casualties2.style';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
Feather.loadFont();
MaterialCommunityIcons.loadFont();

export default Casualties2 = ({ route, navigation }) => {
    const { synopsis, selectedId, name } = route.params;

    const [timeselected, setTimeSelected] = useState("");
    const [siteselected, setSiteSelected] = useState("");
    const [symptoms, setSymptoms] = useState("");
    const [allergies, setAllergies] = useState("");
    const [prevmed, setPrevmed] = useState("");

    const timedata = [
        { key: '1', value: '10M-30M' },
        { key: '2', value: '30M-1H' },
        { key: '3', value: '1H-2H' },
        { key: '4', value: '2H-4H' },
        { key: '5', value: '4H-6H' },
        { key: '6', value: 'More than 6H' },
    ]

    const sitedata = [
        { key: '1', value: '' },
        { key: '2', value: '' },
        { key: '3', value: '' },
        { key: '4', value: '' },
        { key: '5', value: '' },
        { key: '6', value: '' },
    ]

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.titleText}>{synopsis}</Text>
                </View>

                <View style={styles.timeWrapper}>
                    <Text style={styles.timeText}>Time of accident:</Text>
                </View>

                <View style={styles.timeddWrapper}>
                    <SelectList
                        setSelected={(val) => setTimeSelected(val)}
                        data={timedata}
                        save="value"
                        maxHeight={100}
                        boxStyles={styles.timeBox}
                        inputStyles={{ paddingHorizontal: 0 }}
                        dropdownStyles={styles.timeDropdown}
                    />
                </View>

                <View style={styles.siteWrapper}>
                    <Text style={styles.siteText}>Site of injury:</Text>
                </View>

                <View style={styles.siteddWrapper}>
                    <SelectList
                        setSelected={(val) => setSiteSelected(val)}
                        data={sitedata}
                        save="value"
                        maxHeight={100}
                        boxStyles={styles.siteBox}
                        inputStyles={{ paddingHorizontal: 0 }}
                        dropdownStyles={styles.siteDropdown}
                    />
                </View>

                <View style={styles.symptomsTitleWrapper}>
                    <Text style={styles.symptomsTitleText}>Symptoms:</Text>
                </View>

                <KeyboardAvoidingView enabled={true} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                    <View style={styles.symptomsWrapper}>
                        <TextInput
                            style={styles.symptomsInput}
                            value={symptoms}
                            onChangeText={(inputText) => setSymptoms(inputText)}
                            multiline={true}
                            numberOfLines={4}
                        />
                    </View>
                </KeyboardAvoidingView>

                <View style={styles.allergiesTitleWrapper}>
                    <Text style={styles.allergiesTitleText}>Allergies:</Text>
                </View>

                <KeyboardAvoidingView enabled={true} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                    <View style={styles.allergiesWrapper}>
                        <TextInput
                            style={styles.allergiesInput}
                            value={allergies}
                            onChangeText={(inputText) => setAllergies(inputText)}
                            multiline={true}
                            numberOfLines={4}
                        />
                    </View>
                </KeyboardAvoidingView>

                <View style={styles.prevmedTitleWrapper}>
                    <Text style={styles.prevmedTitleText}>Previous medications:</Text>
                </View>

                <KeyboardAvoidingView enabled={true} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                    <View style={styles.prevmedWrapper}>
                        <TextInput
                            style={styles.prevmedInput}
                            value={prevmed}
                            onChangeText={(inputText) => setPrevmed(inputText)}
                            multiline={true}
                            numberOfLines={4}
                        />
                    </View>
                </KeyboardAvoidingView>

                <View style={styles.nextContainer}>
                    <TouchableOpacity style={styles.nextBtn} onPress={() => navigation.navigate("Casualties3")}>
                        <Text style={styles.nextBtnText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}