import React from 'react';
import {View, Text} from 'react-native'
import { Feather } from '@expo/vector-icons';

const LoginScreen = ()=>{
    return(
        <View style={{flexDirection:"row",padding:20, marginTop:30, justifyContent:"space-between"}}>
            <View>
                <Feather
                name="align-left"
                color="black"
                size={24}/>
            </View>
            <View>
                <Text style={{fontSize:30, fontWeight:"bold"}}>Grand News</Text>
            </View>
            <View>
                <Feather
                name="bell"
                color="black"
                size={24}/>
            </View>
        </View>
    )
}

export default LoginScreen;