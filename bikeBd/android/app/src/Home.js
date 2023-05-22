import React from 'react';
import {ScrollView, Text, View} from "react-native";
import Background from "./Background";
import Btn from "./Btn";
import {darkGreen} from "./Constants";

const Home = (props) => {
    return (
        <ScrollView>
        <Background>
         <View style={{marginHorizontal:40,marginVertical:100}}>
             <Text style={{color:'white',fontSize:64}}
             >Les's start</Text>
             <Text style={{color:'white',fontSize:45,marginBottom:40}}
             >BikeBd Apps</Text>
             <Btn bgColor={darkGreen} textColor='whiwe' btnLabel="Login" Press={()=> props.navigation.navigate("Login")}/>
             <Btn bgColor='white' textColor={darkGreen} btnLabel="Signup" Press={()=> props.navigation.navigate("Signup")}/>

         </View>
        </Background>
        </ScrollView>
    );
};

export default Home;