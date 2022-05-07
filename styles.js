import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    homeContainer: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#ce93d8',
        height: '100%',
    },

    footer: {
        flex: 1,
        position: 'absolute',
        top: screenHeight - (screenHeight/6),
        width: screenWidth,
        left: 0,
        right: 0,
        height: 80,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: "#34515e",
    },

    box: {
        width: 85,
        height: 85,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: "#455a64",
        margin: 10,
    },

    boxText: {
        color: "#c63f17",
        fontWeight: "bold"
    },

    boxContainer: {
        height: "100%",
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        backgroundColor: "#ff7043",
        ...Platform.select({
            ios: {paddingTop: 32},
            android: {paddingTop: StatusBar.currentHeight}
        })
    },

    title: {
        color: '#6ec6ff',
        fontSize: 50,
        fontWeight: "bold",
        marginBottom: 80,
    },

    description: {
        color: '#62727b',
        fontSize: 30,
    },

    homeTitle: {
        color: '#00796b',
        fontSize: 80,
        fontWeight: "bold",
        marginBottom: 100,
    }
})