import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 50,
        alignItems: "center"
    },
    profileImage: {
        width: 45,
        height: 45,
        borderRadius: 40
    },
    synopsisContainer: {
        justifyContent: "left",
        flexDirection: "row",
        marginTop: 50,
        paddingHorizontal: 35,
    },
    synopsisHeader: {
        fontSize: 26,
        fontWeight: "bold",
        paddingTop: 3
    },
    genderContainer: {
        display: "flex",
        justifyContent: "start",
        alignItems: "start",
        marginTop: 40,
        height: 150,
        paddingHorizontal: 35
    },
    genderHeader: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 20
    },
    genderChoices: {
        paddingRight: 250,
        width: 400
    },
    choice: {
        backgroundColor: 'red',
        width: '100%',
    },
    nameSearchContainer: {
        justifyContent: "left",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 20,
        height: 60,
        paddingHorizontal: 35
    },
    nameSearchWrapper: {
        flex: 1,
        backgroundColor: "white",
        marginLeft: 0,
        justifyContent: "center",
        paddingLeft: 5,
        borderRadius: 3,
        height: "80%",
    },
    nameSearchInput: {
        height: 20,
        fontSize: 16
    },
    bulletContainer: {
        paddingHorizontal: 35,
        marginTop: 15
    },
    bullets: {
        fontSize: 22
    },
    patientText: {
        fontSize: 18,
        paddingHorizontal: 20,
        paddingTop: 40
    },
    patientTextLast: {
        fontSize: 18,
        paddingHorizontal: 20,
        paddingVertical: 40
    },
    patientContainer: {
        backgroundColor: "white"
    }
})

export default styles;