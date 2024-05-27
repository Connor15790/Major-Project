import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center', 
        alignItems: 'center',
        marginTop: 50
    },
    row: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
        marginHorizontal: 9,
    },
    emerbuttons: {
        borderColor: "black",
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: "white",
        width: 180,
        height: 100,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: 20
    },
    imageBackground: {
        // flex: 1,
        justifyContent: "flex-end",
        alignItems: 'flex-end',
        width: 50,
        height: 50
    },
    imageStyle: {
        borderRadius: 10,
    }
})

export default styles;