import React, { useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, Image, Animated, Dimensions, Easing, Text, ImageBackground, TextInput } from 'react-native';
import styles from './styles';
import images from '../../config/images';

const { height } = Dimensions.get("screen");

const LogIn = () => {

    let screenAnimation = new Animated.Value(height);

    const animateContainer = () => {
        Animated.timing(screenAnimation, {
            toValue: height / 3,
            duration: 1000,
            useNativeDriver:false,
            easing: Easing.elastic(1.3)
        }).start();
    };

    useEffect(() => {
        animateContainer();
    }, []);

    return (
        <View style={{height:height, backgroundColor: 'white'}}>
        <Animated.View style={[styles.container, { height: screenAnimation }]}>
            <View
            style={[styles.centerAlign, { height: '100%'}]}>
            <Image
                source={images.logo}
                style={styles.logo}
            />
            </View>
            </Animated.View>
            <View style={styles.contentBackground}>
                    <Text style={styles.text}>
                        SIGN IN
                    </Text>
                    <View>
                        {/* <TextInput placeholder='username'
                        style={}>

                        </TextInput> */}
                    </View>
            </View>
        
         </View>
    );


}


export default LogIn;

