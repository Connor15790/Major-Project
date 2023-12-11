import * as React from 'react';
import { useCallback, useState, useMemo } from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, FlatList, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform, Modal, Pressable } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import { SelectList } from 'react-native-dropdown-select-list'
import styles from './styles/casualties2.style';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { apiPost, apiGet } from './common/axios';

SplashScreen.preventAutoHideAsync();
Feather.loadFont();
MaterialCommunityIcons.loadFont();

export default Casualties2 = ({ route, navigation, props }) => {
    const { synopsis, selectedId, name, bloodGroup, age } = route.params;

    const [timeselected, setTimeSelected] = useState("");
    // const [siteselected, setSiteSelected] = useState("");
    const [symptoms, setSymptoms] = useState("");
    const [allergies, setAllergies] = useState("");
    const [prevmed, setPrevmed] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

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

    const submitForm = async () => {
        try {
            const formData = {
                primarySynopsis: synopsis,
                patientName: name,
                gender: "Male",
                timeOfAccident: timeselected,
                // siteselected,
                bloodGroup,
                symptoms,
                allergies,
                age,
                previousMedications: prevmed
            }

            const response = await apiPost('/casuality/patientDetails', formData);
            if (response.status == 200) {
                setModalVisible(!modalVisible)
            } else {
                alert(response.message)
            }

            // If the login is successful, you can handle the response here.
            // For example, you might save the token in AsyncStorage and navigate to the home screen.
            if (response.status == 200) {
                navigation.navigate("Casualties2")
            }

            console.log('Login success:', response.data);

        } catch (error) {
            // Handle login failure
            console.error('Login failed:', error);
        }
    }

    return (

        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text style={styles.titleText}>{synopsis}</Text>
            </View>
            <ScrollView>
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

                {/* <View style={styles.siteWrapper}>
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
                </View> */}

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

                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Form has been submitted!</Text>
                                <TouchableOpacity
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.textStyle}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>

                <View style={styles.nextContainer}>
                    <TouchableOpacity style={styles.nextBtn} onPress={submitForm}>
                        <Text style={styles.nextBtnText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>

    )
}