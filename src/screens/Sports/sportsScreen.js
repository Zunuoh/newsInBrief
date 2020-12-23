import React from 'react';
import {View, Text, Image} from 'react-native'

const SportsScreen = ()=>{
    return(
        <View style={{flex:1, padding:20, backgroundColor:"#0C204E"}}>
        <View style={{}}>
            <Text style={{fontSize:40, color:"white"}}>SPORTS NEWS</Text>
        </View>

        <View style={{flexDirection:"row", borderBottomWidth:1, borderBottomColor:"white", height:150}}>
            <View style={{paddingTop:20}}>
                <Image source={require('../../../assets/blouse3.jpeg')} style={{width:100, height:120}}/>
            </View>
            <View style={{paddingTop:20, paddingLeft:20}}>
                <Text style={{color:"white", fontSize:20}}>jfknm</Text>
            </View>

        </View>
    </View>
    )
}

export default SportsScreen;