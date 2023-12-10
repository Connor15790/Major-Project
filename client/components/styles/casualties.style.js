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
    titleWrapper: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        marginTop: 40
    },
    titleText: {
        color: "#51B209",
        fontSize: 26,
        fontFamily: "Montserrat-Bold",
        textDecorationLine: "underline"
    },
    nameSearchContainer: {
        justifyContent: "left",
        alignItems: "left",
        marginTop: 20,
        height: 40,
        paddingHorizontal: 20
    },
    nameHeader: {
        fontSize: 16,
        fontWeight: "bold"
    },
    nameSearchWrapper: {
        flex: 1,
        backgroundColor: "white",
        marginTop: 10,
        justifyContent: "center",
        paddingLeft: 10,
        borderRadius: 3,
        height: "80%",
        paddingVertical: 20
    },
    nameSearchInput: {
        height: 20,
        fontSize: 16
    },
    genderContainer: {
        justifyContent: "left",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 50,
        height: 40,
        paddingHorizontal: 20
    },
    genderHeader: {
        fontSize: 16,
        fontWeight: "bold"
    },
    genderChoices: {
        flexDirection: "row"
    },
    ageSearchContainer: {
        justifyContent: "left",
        marginTop: 15,
        paddingHorizontal: 20,
    },
    ageHeader: {
        fontSize: 16,
        fontWeight: "bold",
        paddingTop: 3
    },
    ageSearchWrapper: {
        width: 150,
        marginLeft: 0,
        marginTop: 10
    },
    ageBox: {
        backgroundColor: "white",
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 0,
        alignItems: 'center'
    },
    ageDropdown: {
        height: 200
    },
    bgContainer: {
        justifyContent: "left",
        marginTop: 20,
        paddingHorizontal: 20,
    },
    bgHeader: {
        fontSize: 16,
        fontWeight: "bold",
        paddingTop: 3
    },
    bgWrapper: {
        width: 150,
        marginLeft: 0,
        marginTop: 7
    },
    bgBox: {
        backgroundColor: "white",
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 0,
        alignItems: 'center'
    },
    bgDropdown: {
        height: 200
    },
    synopsisContainer: {
        justifyContent: "left",
        flexDirection: "row",
        marginTop: 50,
        paddingHorizontal: 20,
    },
    synopsisHeader: {
        fontSize: 16,
        fontWeight: "bold",
        paddingTop: 3
    },
    psContainer: {
        justifyContent: "left",
        marginTop: 10,
        paddingHorizontal: 20,
    },
    synopsisBox: {
        backgroundColor: "white",
    },
    synopsisDropdown: {
        height: 200
    },
    nextContainer: {
        marginTop: 40,
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
    },
    nextBtn: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderColor: "black",
        borderWidth: 2,
        marginTop: 30,
        borderRadius: 10,
        marginLeft: 260,
        backgroundColor: "black"
    },
    nextBtnText: {
        fontFamily: "Montserrat-SemiBold",
        color: "white"
    },
})

export default styles;