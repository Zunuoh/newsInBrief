import React from 'react';
import {View, Text, Image} from 'react-native'

const EntertainmentScreen = ()=>{
    return(
        <View style={{flex:1, padding:20, backgroundColor:"#0C204E"}}>
        <View style={{}}>
            <Text style={{fontSize:30, color:"white"}}>ENTERTAINMENT NEWS</Text>
        </View>

        <View style={{height:250, width:320, backgroundColor:"white", margin:10, borderRadius:10}}>
            <Image source={require('../../../assets/blouse3.jpeg')} style={{height:160, width:300, borderRadius:10}}/>
            <View style={{padding:10}}>
            <Text>kjdmd</Text>
            </View>
 
        </View>
    </View>
    )
}

export default EntertainmentScreen;