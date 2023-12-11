import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titleWrapper: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        marginTop: 70,
        flexDirection: "row"
    },
    settingsLogo: {
        // flex: 1,
        width: 22,
        height: 22,
        marginHorizontal: 5
    },
    titleText: {
        color: "black",
        fontSize: 26,
    },
    aboutContainer: {
        flexDirection: "row",
        paddingHorizontal: 20,
        // alignItems: "center",
        marginTop: 20,
        // backgroundColor: "red",
        // flex: 1
    },
    infoIcon: {
        alignItems: "flex-start"
    },
    aboutText: {
        fontSize: 18,
        paddingLeft: 10,
        paddingRight: 250
    },
    rightIcon: {

    },
})

export default styles;