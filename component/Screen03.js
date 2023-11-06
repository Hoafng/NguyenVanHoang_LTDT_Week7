import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-web';
import { TextInput } from "react-native-paper";
export default function Screen03({navigation}) {
    const [email,setEmail] = useState('');
    return (
        <View style={styles.container}>           
           
            <Text style={styles.txtManage}>ADD YOUR JOB</Text>
            <SafeAreaView>
                <TextInput
                    placeholder='input your job'
                    style={styles.txtEmail}
                    onChangeText={setEmail}
                    value={email}
                    left={<TextInput.Icon icon="clipboard-list-outline" />}
                    keyboardType='default'
                />
            </SafeAreaView>
            <TouchableOpacity style={styles.buttonStart} 
                onPress={() =>{
                    navigation.navigate('Screen01');
                }}
                >
                <Text style={styles.txtButton} >Finish &rarr;</Text>
                
            </TouchableOpacity>
            <View style={styles.containerImgBike}>
                <Image style={{ width: '300px',height: '250px',}}
                    source={require('../assets/Image 95.png')} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        alignItems: 'center',
    },txtManage:{
        fontSize:30,
        width:'220px',
        textAlign:'center',
        color:'purple',
        
    },txtEmail:{
        borderColor:'black',
        borderWidth:'1px',
        width:'300px',
        backgroundColor:'white'
    }
    ,buttonStart: {
        width: '200px',
        backgroundColor: '#00BDD6',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    txtButton:{
        fontSize:15,
        padding: 15,
        borderRadius:30,
        backgroundColor:'#00BDD6',
        color:'white',
        
    },
});