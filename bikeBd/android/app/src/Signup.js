import React, { useState } from 'react';
import { View, Button, Alert } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const Signup = () => {
    const [otpCode, setOtpCode] = useState('');

    const handleOtpCodeChange = (code) => {
        setOtpCode(code);
    };

    const handleVerify = () => {
        // Perform your OTP verification logic here
        if (otpCode === '1234') {
            Alert.alert('Success', 'OTP verification successful!');
        } else {
            Alert.alert('Error', 'Invalid OTP code');
        }
    };

    return (
        <View>
            <OTPInputView
                style={{ width: '80%', height: 200 }}
                pinCount={4}
                code={otpCode}
                onCodeChanged={handleOtpCodeChange}
                autoFocusOnLoad
                secureTextEntry
            />
            <Button title="Verify" onPress={handleVerify} />
        </View>
    );
};

export default Signup;
