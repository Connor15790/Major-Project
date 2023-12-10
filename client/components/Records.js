import * as React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, FlatList, TouchableOpacity, TextInput, ScrollView, Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFonts } from 'expo-font';
import { useCallback, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import styles from './styles/records.style';
import CheckBox from 'react-native-check-box';

SplashScreen.preventAutoHideAsync();
Feather.loadFont();
MaterialCommunityIcons.loadFont();

export default Records = () => {
    const [name, setName] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <Image
                    source={require('../assets/images/Sam.jpg')}
                    style={styles.profileImage}
                />
            </View>

            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value={name}
                        onChangeText={(inputText) => setName(inputText)}
                        placeholder='Search Patient'
                    />
                </View>

                <TouchableOpacity style={styles.searchBtn} onPress={() => { }}>
                    <Image
                        source={require('../assets/icons/search.png')}
                        resizeMode='contain'
                        style={styles.searchBtnImage} />
                </TouchableOpacity>
            </View>

            <ScrollView>
                <View style={styles.cardContainer}>
                    <View style={styles.dateContainer}>
                        <Text style={styles.dateText}>9 Dec, 2023</Text>
                        <Text style={styles.timeText}>10:00 pm</Text>
                    </View>
                    <View style={styles.patientDetails}>
                        <Text style={styles.patientName}>Roronoa Zoro</Text>
                        <Text style={styles.patientAge}>Age: 22</Text>
                        <Text style={styles.patientGender}>Gender: Male</Text>
                        <Text style={styles.patientSynopsis}>Location disorder,
                            booze addiction</Text>
                    </View>
                    <View style={styles.checkPart}>
                        <CheckBox style={styles.check} isChecked={isChecked} onClick={() => setIsChecked(!isChecked)} />
                        <View style={styles.editnDelete}>
                            <TouchableOpacity style={styles.editBtn} onPress={() => { }}>
                                <Image
                                    source={require('../assets/icons/edit.png')}
                                    resizeMode='contain'
                                    style={styles.editBtnImage} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.delBtn} onPress={() => { }}>
                                <Image
                                    source={require('../assets/icons/trash-2.png')}
                                    resizeMode='contain'
                                    style={styles.delBtnImage} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.cardContainer}>
                    <View style={styles.dateContainer}>
                        <Text style={styles.dateText}>9 Dec, 2023</Text>
                        <Text style={styles.timeText}>10:00 pm</Text>
                    </View>
                    <View style={styles.patientDetails}>
                        <Text style={styles.patientName}>Roronoa Zoro</Text>
                        <Text style={styles.patientAge}>Age: 22</Text>
                        <Text style={styles.patientGender}>Gender: Male</Text>
                        <Text style={styles.patientSynopsis}>Location disorder,
                            booze addiction</Text>
                    </View>
                    <View style={styles.checkPart}>
                        <CheckBox style={styles.check} isChecked={isChecked} onClick={() => setIsChecked(!isChecked)} />
                        <View style={styles.editnDelete}>
                            <TouchableOpacity style={styles.editBtn} onPress={() => { }}>
                                <Image
                                    source={require('../assets/icons/edit.png')}
                                    resizeMode='contain'
                                    style={styles.editBtnImage} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.delBtn} onPress={() => { }}>
                                <Image
                                    source={require('../assets/icons/trash-2.png')}
                                    resizeMode='contain'
                                    style={styles.delBtnImage} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.cardContainer}>
                    <View style={styles.dateContainer}>
                        <Text style={styles.dateText}>9 Dec, 2023</Text>
                        <Text style={styles.timeText}>10:00 pm</Text>
                    </View>
                    <View style={styles.patientDetails}>
                        <Text style={styles.patientName}>Roronoa Zoro</Text>
                        <Text style={styles.patientAge}>Age: 22</Text>
                        <Text style={styles.patientGender}>Gender: Male</Text>
                        <Text style={styles.patientSynopsis}>Location disorder,
                            booze addiction</Text>
                    </View>
                    <View style={styles.checkPart}>
                        <CheckBox style={styles.check} isChecked={isChecked} onClick={() => setIsChecked(!isChecked)} />
                        <View style={styles.editnDelete}>
                            <TouchableOpacity style={styles.editBtn} onPress={() => { }}>
                                <Image
                                    source={require('../assets/icons/edit.png')}
                                    resizeMode='contain'
                                    style={styles.editBtnImage} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.delBtn} onPress={() => { }}>
                                <Image
                                    source={require('../assets/icons/trash-2.png')}
                                    resizeMode='contain'
                                    style={styles.delBtnImage} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.cardContainer}>
                    <View style={styles.dateContainer}>
                        <Text style={styles.dateText}>9 Dec, 2023</Text>
                        <Text style={styles.timeText}>10:00 pm</Text>
                    </View>
                    <View style={styles.patientDetails}>
                        <Text style={styles.patientName}>Roronoa Zoro</Text>
                        <Text style={styles.patientAge}>Age: 22</Text>
                        <Text style={styles.patientGender}>Gender: Male</Text>
                        <Text style={styles.patientSynopsis}>Location disorder,
                            booze addiction</Text>
                    </View>
                    <View style={styles.checkPart}>
                        <CheckBox style={styles.check} isChecked={isChecked} onClick={() => setIsChecked(!isChecked)} />
                        <View style={styles.editnDelete}>
                            <TouchableOpacity style={styles.editBtn} onPress={() => { }}>
                                <Image
                                    source={require('../assets/icons/edit.png')}
                                    resizeMode='contain'
                                    style={styles.editBtnImage} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.delBtn} onPress={() => { }}>
                                <Image
                                    source={require('../assets/icons/trash-2.png')}
                                    resizeMode='contain'
                                    style={styles.delBtnImage} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.cardContainer}>
                    <View style={styles.dateContainer}>
                        <Text style={styles.dateText}>9 Dec, 2023</Text>
                        <Text style={styles.timeText}>10:00 pm</Text>
                    </View>
                    <View style={styles.patientDetails}>
                        <Text style={styles.patientName}>Roronoa Zoro</Text>
                        <Text style={styles.patientAge}>Age: 22</Text>
                        <Text style={styles.patientGender}>Gender: Male</Text>
                        <Text style={styles.patientSynopsis}>Location disorder,
                            booze addiction</Text>
                    </View>
                    <View style={styles.checkPart}>
                        <CheckBox style={styles.check} isChecked={isChecked} onClick={() => setIsChecked(!isChecked)} />
                        <View style={styles.editnDelete}>
                            <TouchableOpacity style={styles.editBtn} onPress={() => { }}>
                                <Image
                                    source={require('../assets/icons/edit.png')}
                                    resizeMode='contain'
                                    style={styles.editBtnImage} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.delBtn} onPress={() => { }}>
                                <Image
                                    source={require('../assets/icons/trash-2.png')}
                                    resizeMode='contain'
                                    style={styles.delBtnImage} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.cardContainer}>
                    <View style={styles.dateContainer}>
                        <Text style={styles.dateText}>9 Dec, 2023</Text>
                        <Text style={styles.timeText}>10:00 pm</Text>
                    </View>
                    <View style={styles.patientDetails}>
                        <Text style={styles.patientName}>Roronoa Zoro</Text>
                        <Text style={styles.patientAge}>Age: 22</Text>
                        <Text style={styles.patientGender}>Gender: Male</Text>
                        <Text style={styles.patientSynopsis}>Location disorder,
                            booze addiction</Text>
                    </View>
                    <View style={styles.checkPart}>
                        <CheckBox style={styles.check} isChecked={isChecked} onClick={() => setIsChecked(!isChecked)} />
                        <View style={styles.editnDelete}>
                            <TouchableOpacity style={styles.editBtn} onPress={() => { }}>
                                <Image
                                    source={require('../assets/icons/edit.png')}
                                    resizeMode='contain'
                                    style={styles.editBtnImage} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.delBtn} onPress={() => { }}>
                                <Image
                                    source={require('../assets/icons/trash-2.png')}
                                    resizeMode='contain'
                                    style={styles.delBtnImage} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.cardContainer}>
                    <View style={styles.dateContainer}>
                        <Text style={styles.dateText}>9 Dec, 2023</Text>
                        <Text style={styles.timeText}>10:00 pm</Text>
                    </View>
                    <View style={styles.patientDetails}>
                        <Text style={styles.patientName}>Roronoa Zoro</Text>
                        <Text style={styles.patientAge}>Age: 22</Text>
                        <Text style={styles.patientGender}>Gender: Male</Text>
                        <Text style={styles.patientSynopsis}>Location disorder,
                            booze addiction</Text>
                    </View>
                    <View style={styles.checkPart}>
                        <CheckBox style={styles.check} isChecked={isChecked} onClick={() => setIsChecked(!isChecked)} />
                        <View style={styles.editnDelete}>
                            <TouchableOpacity style={styles.editBtn} onPress={() => { }}>
                                <Image
                                    source={require('../assets/icons/edit.png')}
                                    resizeMode='contain'
                                    style={styles.editBtnImage} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.delBtn} onPress={() => { }}>
                                <Image
                                    source={require('../assets/icons/trash-2.png')}
                                    resizeMode='contain'
                                    style={styles.delBtnImage} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.cardContainer}>
                    <View style={styles.dateContainer}>
                        <Text style={styles.dateText}>9 Dec, 2023</Text>
                        <Text style={styles.timeText}>10:00 pm</Text>
                    </View>
                    <View style={styles.patientDetails}>
                        <Text style={styles.patientName}>Roronoa Zoro</Text>
                        <Text style={styles.patientAge}>Age: 22</Text>
                        <Text style={styles.patientGender}>Gender: Male</Text>
                        <Text style={styles.patientSynopsis}>Location disorder,
                            booze addiction</Text>
                    </View>
                    <View style={styles.checkPart}>
                        <CheckBox style={styles.check} isChecked={isChecked} onClick={() => setIsChecked(!isChecked)} />
                        <View style={styles.editnDelete}>
                            <TouchableOpacity style={styles.editBtn} onPress={() => { }}>
                                <Image
                                    source={require('../assets/icons/edit.png')}
                                    resizeMode='contain'
                                    style={styles.editBtnImage} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.delBtn} onPress={() => { }}>
                                <Image
                                    source={require('../assets/icons/trash-2.png')}
                                    resizeMode='contain'
                                    style={styles.delBtnImage} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>

    )
}