import { StyleSheet, Dimensions } from 'react-native';


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: Dimensions.get('window').height
    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        // zIndex: 100
    },
    content: {
        height: '100%',
        justifyContent: 'flex-end'
    },
    bottomContainer: {
        padding: 10,
        paddingBottom: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    userName: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 10,
    },
    rightContainer: {
        height: 250,
        justifyContent: 'space-between',
        alignSelf: 'flex-end',
        marginRight: 5
    },
    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#FFFFFF'
    },
    iconContainer: {
        alignItems: 'center'
    },
    statsLabel: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        marginTop: 5,
    }
});

export default styles;