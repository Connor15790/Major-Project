import { StyleSheet, Dimensions } from "react-native";

const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 50,
        alignItems: "center",
        marginRight: 310
    },
    profileImage: {
        width: 45,
        height: 45,
        borderRadius: 40
    },
    dateWrapper: {
        justifyContent: "left",
        flexDirection: "row",
        marginTop: 50,
        paddingHorizontal: 35,
    },
    dateHeader: {
        fontSize: 16,
        fontWeight: "bold",
        paddingTop: 3
    },
    searchContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 20,
        height: 50,
        paddingHorizontal: 20,
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: "white",
        marginRight: 12,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        height: "80%",
    },
    searchInput: {
        width: "100%",
        height: "100%",
        paddingHorizontal: 16,
    },
    searchBtn: {
        width: 45,
        height: "80%",
        backgroundColor: "black",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    searchBtnImage: {
        width: "50%",
        height: "50%",
        tintColor: "white",
    },
    cardContainer: {
        flexDirection: "row",
        backgroundColor: "white",
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 10,
        height: 120,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOpacity: 0.75,
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowRadius: 5,
        elevation: 7
    },
    dateContainer: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        marginVertical: 15,
        width: "28%",
        marginLeft: 10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOpacity: 0.75,
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowRadius: 5,
        elevation: 6,
        paddingTop: 5,
    },
    patientDetails: {
        paddingTop: 13,
        paddingHorizontal: 15,
        // backgroundColor: "red",
        width: 150
    },
    patientName: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 12
    },
    patientAge: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 12
    },
    patientGender: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 12
    },
    patientSynopsis: {
        marginTop: 5,
        fontFamily: "Montserrat-SemiBold",
        fontSize: 12
    },
    dateText: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 12
    },
    timeText: {
        marginTop: 10
    },
    checkPart: {
        // backgroundColor: "red",
        width: "25%",
        paddingVertical: 10,
    },
    editBtn: {
        paddingTop: 45,
        alignItems: "left"
    },
    editBtnImage: {

    },
    check: {
        alignItems: "flex-end",
        paddingRight: 10
    },
    editnDelete: {
        flex: 1,
        flexDirection: "row",
        paddingHorizontal: 20
    },
    delBtn: {
        paddingTop: 45,
        alignItems: "flex-end",
        paddingLeft: 10
    },
    delBtnImage: {

    },
})

export default styles;