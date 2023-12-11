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
        { label: 'Logout', value: 'logout' },
        { label: 'Profile', value: 'profile' },
        { label: 'Settings', value: 'settings' },
    ]);


    const handleDropdownChange = (item) => {
        // Handle actions based on selected dropdown item
        console.log('Selected:', item.value);

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

                        <DropDownPicker
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            onChangeValue={handleDropdownChange}
                            zIndex={1000} // Adjust zIndex as needed
                            style={styles.dropdown}
                            containerStyle={styles.dropdownContainer}
                            itemStyle={styles.dropdownItem}
                            labelStyle={styles.dropdownLabel}
                        />
                    </View>
                    {/* <Modal
                        animationType="slide"
                        transparent={true}
                        visible={isBottomSheetOpen}
                        onRequestClose={handleCloseBottomSheet} >
                        <View style={[styles.bottomSheet, { height: windowHeight * 0.6 }]}>
                            <View style={{ flex: 0, width: '100%', justifyContent: 'space-between', flexDirection: 'row' }}>
                                <SubText text={'Preview'} family={'Poppins-med'} size={16} color={'#86827e'} />
                                <TouchableOpacity onPress={handleCloseBottomSheet}>
                                    <Image source={require('../assets/icons/x.png')} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ paddingVertical: 16 }}>
                                <SubText text={'Unyime Emmanuel'} family={'PoppinsSBold'} color={'#292929'} size={18} />
                                <SubText text={`I'm a Software Engineer and Technical Writer, I've had the TypeScript epiphany!. Oh, I play Chess too!`} family={'Poppins'} color={'#86827e'} size={14} />

                                <View style={{ opacity: .2, height: 1, borderWidth: 1, borderColor: '#86827e', marginVertical: 16 }} />
                                <View style={{ flex: 0, justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center' }}>
                                    <SubText text={'24'} color={'#292929'} family={'PoppinsSBold'} size={24} />
                                    <SubText text={' articles written'} color={'#86827e'} size={14} family={'Poppins-med'} />
                                </View>

                                <View style={{ paddingTop: 16 }}>
                                    <SubText text={'Views (30 days)'} color={'#86827e'} size={12} family={'Poppins-med'} />
                                    <SubText text={'4,904'} color={'#292929'} family={'PoppinsSBold'} size={18} />
                                </View>

                                <View style={{ paddingTop: 16 }}>
                                    <SubText text={'Views (30 days)'} color={'#86827e'} size={12} family={'Poppins-med'} />
                                    <HeadingText text={'4,904'} color={'#292929'} family={'PoppinsSBold'} size={18} />
                                </View>

                                <View style={{ paddingTop: 16 }}>
                                    <SubText text={'Reads (30 days)'} color={'#86827e'} size={12} family={'Poppins-med'} />
                                    <HeadingText text={'3038'} color={'#292929'} family={'PoppinsSBold'} size={18} />
                                </View>

                                <View style={{ paddingTop: 16, flex: 0, flexDirection: 'row' }}>
                                    <Image source={require('../assets/icons/map-pin.png')} />
                                    <View style={{ paddingLeft: 12 }} />
                                    <SubText text={'Medium'} color={'#86827e'} size={14} family={'Poppins-med'} />
                                </View>
                            </View>
                        </View>
                    </Modal> */}
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

