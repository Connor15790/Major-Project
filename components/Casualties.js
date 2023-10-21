import * as React from 'react';
import { useCallback, useState, useMemo } from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, FlatList, TouchableOpacity, TextInput } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import { SelectList } from 'react-native-dropdown-select-list'
import styles from './styles/casualties.style';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
Feather.loadFont();
MaterialCommunityIcons.loadFont();

export default Casualties = ({ navigation }) => {
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
    
    const [selectedId, setSelectedId] = useState();
    const [ageselected, setAgeSelected] = useState("");
    const [bgselected, setBgSelected] = useState("");
    const [synopsisselected, setSynopsisSelected] = useState("");
    const [name, setName] = useState("")

    const agedata = [
        { key: '1', value: '1-3 Y' },
        { key: '2', value: '4-7 Y' },
        { key: '3', value: '8-14 Y' },
        { key: '4', value: '15-20 Y' },
        { key: '5', value: '21-35 Y' },
        { key: '6', value: '36-60 Y' },
        { key: '7', value: '61-80 Y' },
    ]

    const bgdata = [
        { key: '1', value: 'A+' },
        { key: '2', value: 'A-' },
        { key: '3', value: 'B+' },
        { key: '4', value: 'B-' },
        { key: '5', value: 'O+' },
        { key: '6', value: 'O-' },
        { key: '7', value: 'AB+' },
        { key: '8', value: 'AB-' },
    ]

    const synopsisdata = [
        { key: '1', value: 'Leg Fracture' },
        { key: '2', value: 'Dog Bite' },
        { key: '3', value: 'Snake Bite' },
        { key: '3', value: 'Heart Attack' },
        { key: '3', value: 'Stroke' },
    ]

    return (
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <Image
                    source={require('../assets/images/Sam.jpg')}
                    style={styles.profileImage}
                />
            </View>

            <View style={styles.titleWrapper}>
                <Text style={styles.titleText}>Patient Details</Text>
            </View>

            <View style={styles.synopsisContainer}>
                <Text style={styles.synopsisHeader}>Primary Synopsis*:</Text>
            </View>

            <View style={styles.psContainer}>
                <SelectList
                    setSelected={(val) => setSynopsisSelected(val)}
                    data={synopsisdata}
                    save="value"
                    maxHeight={100}
                    boxStyles={styles.synopsisBox}
                    inputStyles={{ paddingHorizontal: 0 }}
                    dropdownStyles={styles.synopsisDropdown}
                />
            </View>

            <View style={styles.nameSearchContainer}>
                <Text style={styles.nameHeader}>Name*:</Text>
                <View style={styles.nameSearchWrapper}>
                    <TextInput
                        style={styles.nameSearchInput}
                        value={name}
                        onChangeText={(inputText) => setName(inputText)}
                        placeholder='Name'
                    />
                </View>
            </View>

            <View style={styles.genderContainer}>
                <Text style={styles.genderHeader}>Gender*:</Text>
                <RadioGroup
                    style={styles.genderChoices}
                    radioButtons={radioButtons}
                    onPress={setSelectedId}
                    selectedId={selectedId}
                    layout='row'
                />
            </View>

            <View style={styles.ageSearchContainer}>
                <Text style={styles.ageHeader}>Age:</Text>
                <View style={styles.ageSearchWrapper}>
                    <SelectList
                        setSelected={(val) => setAgeSelected(val)}
                        data={agedata}
                        save="value"
                        maxHeight={100}
                        boxStyles={styles.ageBox}
                        inputStyles={{ paddingHorizontal: 0 }}
                        dropdownStyles={styles.ageDropdown}
                    />
                </View>
            </View>

            <View style={styles.bgContainer}>
                <Text style={styles.bgHeader}>Blood* {"\n"}Group:</Text>
                <View style={styles.bgWrapper}>
                    <SelectList
                        setSelected={(val) => setBgSelected(val)}
                        data={bgdata}
                        save="value"
                        maxHeight={100}
                        boxStyles={styles.bgBox}
                        inputStyles={{ paddingHorizontal: 0 }}
                        dropdownStyles={styles.bgDropdown}
                    />
                </View>
            </View>

            <View style={styles.nextContainer}>
                <TouchableOpacity 
                    style={[styles.nextBtn, {
                        backgroundColor: !selectedId || !name || !bgselected || !synopsisselected ? "#B7BCB5" : "black",
                        borderWidth: !selectedId || !name || !bgselected || !synopsisselected ? 0 : 1
                    }]} 

                    onPress={() => navigation.navigate("Casualties2", {
                        synopsis: synopsisselected, 
                        selectedId: selectedId,
                        name: name
                    })} 

                    disabled={!selectedId || !name || !bgselected || !synopsisselected ? true : false}>
                    <Text style={styles.nextBtnText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}