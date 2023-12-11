import * as React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, FlatList, TouchableOpacity, TextInput, Button, Modal, Dimensions, SubText, HeadingText } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useCallback, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import styles from './styles/home.style';
import DropDownPicker from 'react-native-dropdown-picker';

SplashScreen.preventAutoHideAsync();
Feather.loadFont();

export default Navbar = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Profile', value: 'profile' },
        { label: 'Settings', value: 'settings' },
        { label: 'Logout', value: 'logout', },
    ]);

    const handleDropdownChange = (item) => {
        // Handle actions based on selected dropdown item
        // console.log('Selected:', item);

        if (item === 'profile') {
            navigation.navigate('Profile');
        } 
    
        // Close the dropdown after selection
        setOpen(false);
    };

    return (
        <SafeAreaView>
            <View style={styles.headerWrapper}>
                <Image
                    source={require('../assets/images/Sam.jpg')}
                    style={styles.profileImage}
                />
                <View style={styles.menuContainer}>
                    <TouchableOpacity
                        style={styles.menuBtn}
                        onPress={() => setOpen((prevOpen) => !prevOpen)}
                    >
                        <Image source={require('../assets/icons/menu.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.dropdownWrapper}>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    onCh
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    onChangeValue={handleDropdownChange}
                    zIndex={1000} // Adjust zIndex as needed
                    style={styles.dropdown}
                    labelStyle={{ color: "red" }}
                    containerStyle={styles.dropdownContainer}
                    selectedLabelStyle={{ textStyle: { color: 'white' } }}
                />
            </View>
        </SafeAreaView>
    )
}