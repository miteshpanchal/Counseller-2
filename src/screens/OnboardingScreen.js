import { Image,StyleSheet } from 'react-native';
import React from 'react';

import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => (
    <Onboarding
        onDone={() => navigation.navigate('LoginScreen')}
        pages={[
            {
                backgroundColor: '#a6d4e0',
                image: <Image source={require('../assets/onboarding1.jpg')} style={styles.image} />,
                title: 'GOVERNMENT SCHEMES',
                subtitle: 'get details of all the government schemes for which you are eligible in one click'.toUpperCase(),
            },
            {
                backgroundColor: '#2596be',
                image: <Image source={require('../assets/onboarding2.jpg')} style={styles.image} />,
                title: 'GOVT EXAMS'.toUpperCase(),
                subtitle: 'know about every upcoming exam you are eligible for according to your profile and get notified till you have not filled the form.'.toUpperCase(),
            },
            {
                backgroundColor: '#05447a',
                image: <Image source={require('../assets/onboarding2.jpg')}  style={styles.image} />,
                title: 'Prepare for exams'.toUpperCase(),
                subtitle: "we provide prepration guide for each and every exam".toUpperCase(),
            },
        ]}
    />
);

const styles = StyleSheet.create({
    image: {
       width:200,
       height:112,
       alignContent:'center'
    }
})


export default OnboardingScreen;