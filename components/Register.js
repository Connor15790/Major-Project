import * as React from 'react';
import { useCallback, useState } from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, FlatList, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import styles from './styles/register.style';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
Feather.loadFont();
MaterialCommunityIcons.loadFont();

export default Register = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [idnumber, setIdNumber] = useState("");
    const [licenceno, setLicenceno] = useState("");
    const [profession, setProfession] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phoneno, setPhoneno] = useState("");

    const professiondata = [
        { key: '1', value: 'Doctor' },
        { key: '2', value: 'Nurse' },
        { key: '3', value: 'Manager' },
    ]

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.registerHeader}>
                    <Text style={styles.registerText}>Register</Text>
                </View>

                <View style={styles.usernameSearchContainer}>
                    <Text style={styles.usernameHeader}>Name*:</Text>
                    <View style={styles.usernameSearchWrapper}>
                        <TextInput
                            style={styles.usernameSearchInput}
                            value={name}
                            onChangeText={(nameInput) => setName(nameInput)}
                            placeholder='Name'
                        />
                    </View>
                </View>

                <View style={styles.usernameSearchContainer}>
                    <Text style={styles.usernameHeader}>Username*:</Text>
                    <View style={styles.usernameSearchWrapper}>
                        <TextInput
                            style={styles.usernameSearchInput}
                            value={username}
                            onChangeText={(usernameInput) => setUsername(usernameInput)}
                            placeholder='Username'
                        />
                    </View>
                </View>

                <View style={styles.usernameSearchContainer}>
                    <Text style={styles.usernameHeader}>Id No.*:</Text>
                    <View style={styles.usernameSearchWrapper}>
                        <TextInput
                            style={styles.usernameSearchInput}
                            value={idnumber}
                            onChangeText={(idnumberInput) => setIdNumber(idnumberInput)}
                            placeholder='Id No.'
                        />
                    </View>
                </View>

                <View style={styles.usernameSearchContainer}>
                    <Text style={styles.usernameHeader}>Licence No.*:</Text>
                    <View style={styles.usernameSearchWrapper}>
                        <TextInput
                            style={styles.usernameSearchInput}
                            value={licenceno}
                            onChangeText={(licenceno) => setLicenceno(licenceno)}
                            placeholder='Licence No.'
                        />
                    </View>
                </View>

                <View style={styles.professionSearchContainer}>
                    <Text style={styles.professionHeader}>Age:</Text>
                    <View style={styles.professionSearchWrapper}>
                        <SelectList
                            setSelected={(val) => setProfession(val)}
                            data={professiondata}
                            save="value"
                            maxHeight={100}
                            boxStyles={styles.professionBox}
                            inputStyles={{ paddingHorizontal: 0 }}
                            dropdownStyles={styles.professionDropdown}
                        />
                    </View>
                </View>

                <View style={styles.usernameSearchContainer}>
                    <Text style={styles.usernameHeader}>Password*:</Text>
                    <View style={styles.usernameSearchWrapper}>
                        <TextInput
                            style={styles.usernameSearchInput}
                            value={password}
                            onChangeText={(password) => setPassword(password)}
                            placeholder='Password'
                        />
                    </View>
                </View>

                <View style={styles.usernameSearchContainer}>
                    <Text style={styles.usernameHeader}>Confirm {"\n"}Password*:</Text>
                    <View style={styles.usernameSearchWrapper}>
                        <TextInput
                            style={styles.usernameSearchInput}
                            value={confirmpassword}
                            onChangeText={(confirmpassword) => setConfirmPassword(confirmpassword)}
                            placeholder='Confirm password'
                        />
                    </View>
                </View>

                <View style={styles.usernameSearchContainer}>
                    <Text style={styles.usernameHeader}>Email*:</Text>
                    <View style={styles.usernameSearchWrapper}>
                        <TextInput
                            style={styles.usernameSearchInput}
                            value={email}
                            onChangeText={(email) => setEmail(pasemailsword)}
                            placeholder='Email'
                        />
                    </View>
                </View>

                <View style={styles.usernameSearchContainer}>
                    <Text style={styles.usernameHeader}>Phone No.*:</Text>
                    <View style={styles.usernameSearchWrapper}>
                        <TextInput
                            style={styles.usernameSearchInput}
                            value={phoneno}
                            onChangeText={(phoneno) => setPhoneno(phoneno)}
                            placeholder='Phone No.'
                        />
                    </View>
                </View>

                <View style={styles.loginBtn}>
                    <TouchableOpacity style={styles.loginWrapper}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}