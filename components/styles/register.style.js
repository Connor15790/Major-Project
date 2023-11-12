import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    registerHeader: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        marginTop: 80
    },
    registerText: {
        color: "#51B209",
        fontSize: 32,
        fontFamily: "Montserrat-Bold",
        textDecorationLine: "underline"
    },
    usernameSearchContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 30,
        height: 40,
        paddingHorizontal: 35
    },
    usernameHeader: {
        fontSize: 16,
        fontWeight: "bold"
    },
    usernameSearchWrapper: {
        flex: 1,
        backgroundColor: "white",
        marginLeft: 10,
        justifyContent: "center",
        paddingLeft: 5,
        borderRadius: 3,
        height: "80%",
    },
    usernameSearchInput: {
        height: 20,
        fontSize: 16
    },
    professionSearchContainer: {
        justifyContent: "left",
        flexDirection: "row",
        marginTop: 40,
        paddingHorizontal: 35,
    },
    professionHeader: {
        fontSize: 16,
        fontWeight: "bold",
        paddingTop: 3
    },
    professionSearchWrapper: {
        width: 150,
        marginLeft: 40,
    },
    professionBox: {
        backgroundColor: "white",
        height: 30,
        borderWidth: 0,
        borderRadius: 3,
        paddingVertical: 0,
        alignItems: 'center'
    },
    professionDropdown: {
        height: 200
    },
    loginBtn: {
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
    },
    loginWrapper: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderColor: "black",
        borderWidth: 1,
        marginTop: 40,
        borderRadius: 5,
        backgroundColor: "#BBC7B8",
    },
    loginButtonText: {
        fontSize: 20,
        fontFamily: "Montserrat-Medium"
    },
})

export default styles;