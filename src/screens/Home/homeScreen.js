import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import {View, Text, Image} from 'react-native';
import * as appConst from '../../axios/axios';

const HomeScreen = ()=>{
    const[news, setNews] = useState(null);
    const[loading, setLoading] = useState(false);
     const apiKey = '6737ee12d7e84595a1a27282d5c6f9c9'

 const newsUrl = "https://newsapi.org/v2/top-headlines?category=sports&country=us&apiKey=" + apiKey

  useEffect(()=>{
      setLoading(true)
      axios.get("newsUrl")
      .then(function(response){
          setLoading(false)
          setNews(response.data.results.slice(0,20));
          console.log(response.data.results);
         
      })
      .catch(function(error){
          console.log(error)
      })
  })

// useEffect(()=>{
//     async function fetchData(){
//         const request = await axios.get(fetchUrl);
//         console.log(request);
//         return request;
//     }
//     fetchData();
// }, []);

    return(
        <View style={{flex:1, padding:20, backgroundColor:"#0C204E"}}>
            <View style={{}}>
                <Text style={{fontSize:40, color:"white"}}>LATEST NEWS</Text>
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

export default HomeScreen;