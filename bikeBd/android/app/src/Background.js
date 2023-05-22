import React from 'react';
import {ImageBackground, ScrollView, View} from "react-native";

const Background = ({children}) => {
    return (
        <View>

            <ScrollView>
            <ImageBackground  source={require("./Image/mukta.jpg")}
                              style={{height:'100%'}}/>
            <ImageBackground source={require("./Image/du image.jpg")} style={{height:'100%'}}/>
            <ImageBackground  source={require("./Image/du image2.jpg")}
                              style={{height:'100%'}}/>

            <View style={{position: "absolute"}}>
                {children}

            </View>
            </ScrollView>

        </View>
    );
};

export default Background;