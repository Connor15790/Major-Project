import * as React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, FlatList, TouchableOpacity, TextInput, ScrollView, Dimensions, Modal } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFonts } from 'expo-font';
import { useCallback, useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import styles from './styles/records.style';
import CheckBox from 'react-native-check-box';
import { format } from 'date-fns';
import { apiPost, apiGet } from './common/axios';


SplashScreen.preventAutoHideAsync();
Feather.loadFont();
MaterialCommunityIcons.loadFont();

export default Records = () => {
    const [name, setName] = useState("");
    const [checkedItems, setCheckedItems] = useState(false);
    const [patientModalVisible, setPatientModalVisible] = useState(false);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [cardData, setCardData] = useState([]);
    const [originalCardData, setOriginalCardData] = useState([]);
    const [itemToDelete, setItemToDelete] = useState(null);

    useEffect(() => {
        async function fetchPatientData() {
            const response = await apiGet('/casuality/getPatient')
            setCardData(response.data)
            setOriginalCardData(response.data);
            console.log(response.data)
        }
        fetchPatientData()
    }, [])

    // Update the cardData when the user types in the search field
    useEffect(() => {
        if (name.trim() === "") {
            setCardData(originalCardData);
        } else {
            // Filter the card data based on the search input
            setCardData((prevData) =>
                prevData.filter(
                    (item) =>
                        item.patientName.toLowerCase().includes(name.toLowerCase()) ||
                        item.primarySynopsis.toLowerCase().includes(name.toLowerCase())
                )
            );
        }
    }, [name]);



    //function to toggle different checkboxes
    const toggleCheckbox = (itemId) => {
        setCheckedItems((prevCheckedItems) => ({
            ...prevCheckedItems,
            [itemId]: !prevCheckedItems[itemId],
        }));
    };

    // Function to filter cardData based on the search name
    const filterCardData = () => {
        if (name === '') {
            return cardData;
        } else {
            return cardData.filter(
                (item) =>
                    item.patientName.toLowerCase().includes(name.toLowerCase()) ||
                    item.primarySynopsis.toLowerCase().includes(name.toLowerCase())
            );
        }
    };

    //function to delete a patient
    const handleDelete = (itemId) => {
        setItemToDelete(itemId);
        setDeleteModalVisible(true);
    };

    const confirmDelete = async () => {
        console.log("Confirm btn pressed")
        try {
            // Perform the deletion logic, you can use your API endpoint here
            // For now, I'll just log a message
            console.log(`Deleting item with id: ${itemToDelete}`);
            const deleteResponse = await apiPost('/casuality/deletePatient');

            // Assuming you want to update the cardData after deletion, you can fetch the updated data
            // const response = await apiGet('/casuality/getPatient');
            // setCardData(response.data);

            // Close the modal after deletion
            setDeleteModalVisible(false);
        } catch (error) {
            console.error('Error deleting item:', error);
            // Handle error, show an alert, etc.
        }
    };

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
                        placeholder="Search Patient"
                    />
                </View>

                <TouchableOpacity
                    style={styles.searchBtn}
                    onPress={() => {
                        // Update cardData based on the search name
                        setCardData(filterCardData());
                    }}>
                    <Image
                        source={require('../assets/icons/search.png')}
                        resizeMode="contain"
                        style={styles.searchBtnImage}
                    />
                </TouchableOpacity>
            </View>


            <Modal
                animationType="slide"
                transparent={true}
                visible={patientModalVisible}
                backdropOpacity={0.5}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Roronoa Zoro</Text>
                        <Text>Age: 22</Text>
                        <Text>Gender: Male</Text>
                        <Text>Blood Group: O+</Text>
                        <Text>Synopsis: Location disorder, boozen addiction</Text>
                        <View style={styles.closeBtn}>
                            <TouchableOpacity
                                style={[styles.button0, styles.buttonClose0]}
                                onPress={() => setPatientModalVisible(!patientModalVisible)}>
                                <Text style={styles.textStyle0}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={deleteModalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Are you sure?</Text>
                        <View style={styles.deleteButtons}>
                            <TouchableOpacity
                                style={[styles.button1, styles.buttonConfirm]}
                                onPress={confirmDelete}>
                                <Text style={styles.textStyle1}>Confirm</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => setDeleteModalVisible(!deleteModalVisible)}>
                                <Text style={styles.textStyle2}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <ScrollView>
                {(name.trim() === ''
                    ? cardData
                    : cardData.filter(
                        (item) =>
                            item.patientName.toLowerCase().includes(name.toLowerCase()) ||
                            item.primarySynopsis.toLowerCase().includes(name.toLowerCase())
                    )
                ).map((item) => (
                    <TouchableOpacity
                        key={item._id} // Make sure to use a unique key for each item
                        onPress={() => setPatientModalVisible(true)}
                    >
                        <View style={styles.cardContainer}>
                            <View style={styles.dateContainer}>
                                <Text style={styles.dateText}>
                                    {format(new Date(item.injuryDetails.dateOfCreation), 'd MMM, yyyy')}
                                </Text>
                                <Text style={styles.timeText}>
                                    {format(new Date(item.injuryDetails.dateOfCreation), 'h:mm a')}
                                </Text>
                            </View>
                            <View style={styles.patientDetails}>
                                <Text style={styles.patientName}>{item.patientName}</Text>
                                <Text style={styles.patientAge}>Age: {item.age}</Text>
                                <Text style={styles.patientGender}>Gender: {item.gender}</Text>
                                <Text style={styles.patientSynopsis}>{item.primarySynopsis}</Text>
                            </View>
                            <View style={styles.checkPart}>
                                <CheckBox
                                    style={styles.check}
                                    isChecked={checkedItems[item._id] || false}
                                    onClick={() => toggleCheckbox(item._id)}
                                />
                                <View style={styles.editnDelete}>
                                    <TouchableOpacity style={styles.editBtn} onPress={() => { }}>
                                        <Image
                                            source={require('../assets/icons/edit.png')}
                                            resizeMode='contain'
                                            style={styles.editBtnImage}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.delBtn}
                                        onPress={() => handleDelete(item._id)}
                                    >
                                        <Image
                                            source={require('../assets/icons/trash-2.png')}
                                            resizeMode='contain'
                                            style={styles.delBtnImage}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
                {cardData.length === 0 && (
                    <View style={styles.noUsersContainer}>
                        <Text style={styles.noUsersText}>No results Found</Text>
                    </View>
                )}
            </ScrollView>


        </View>

    )
}