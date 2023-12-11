import * as React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, FlatList, TouchableOpacity, TextInput, Button, Modal, Dimensions, SubText, HeadingText } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFonts } from 'expo-font';
import { useCallback, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import styles from './styles/home.style';
import Profile from './Profile';
import DropDownPicker from 'react-native-dropdown-picker';

SplashScreen.preventAutoHideAsync();
Feather.loadFont();
MaterialCommunityIcons.loadFont();

export default Home = ({ navigation }) => {
    const windowHeight = Dimensions.get('window').height;
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Profile', value: 'profile' },
        { label: 'Settings', value: 'settings' },
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

    let [fontsLoaded] = useFonts({
        "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
        "Montserrat-Medium": require("../assets/fonts/Montserrat-Medium.ttf"),
        "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
        "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
        "CrimsonText-Bold": require("../assets/fonts/CrimsonText-Bold.ttf")
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    if (!fontsLoaded) return null;

    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
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
                        labelStyle= {{color: "red"}}
                        containerStyle={styles.dropdownContainer}
                        selectedLabelStyle={{ textStyle: { color: 'white' } }}
                    />
                </View>
            </SafeAreaView>

            <View style={styles.titleWrapper}>
                <Text style={styles.appTitle}>App Name</Text>
            </View>

            <View style={styles.homeButtons}>
                <TouchableOpacity style={styles.casualtyHeader} onPress={() => navigation.navigate("Casualties")}>
                    <Text style={styles.casualtyTitle}>Casualties</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.recordsHeader} onPress={() => navigation.navigate("Records")}>
                    <Text style={styles.recordsTitle}>Records</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.emergencyHeader}>
                    <Text style={styles.emergencyTitle}>Emergencies</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

