import React,{Component,useState,useEffect} from 'react'


import {Linking,View,Text,Image,TextInput,Dimensions,TouchableOpacity} from 'react-native'

const {width,height}=Dimensions.get("window")

import {Navbar} from './navbar'



import {sendEmail} from 'react-native-email-action'


export const Contact=({navigation})=>{


    const [name,setName]=useState('')

    const [email,setEmail]=useState('')
    
    const [message,setMessage]=useState('')

    const [phone,setPhone]=useState('')
    
    const [notification,setNotification]=useState('')
    
     
   
    
    
    
    const handlePress=({navigation})=>{
  
    
    const options={
      to:email,
      subject:name,
      body:message
    }
    if(name.length && email.length){

        sendEmail(options).then(data=>{

            setNotification(name +', your message is sent')
        }

        )}else{
            setNotification('Enter your details properly.')
        }
    
    
    setInterval(()=>{
      setNotification('')
    
    },3000)
      setName('')
      setEmail('')
      setMessage('')
      setPhone('')
    
    }
    
        return(
  
<View>

<Navbar navigation={navigation}/>

<View style={{height:height,width:width,backgroundColor:'blue',borderLeftColor:'white',borderWidth:1,position:'absolute',top:height*0.1}}>


            <View style={{  justifyContent:'center',alignItems:'center',flex:1,backgroundColor:'black',color:'white',borderWidth:1,borderLeftColor:'black',width:width,height:height}}>
           
            <Image source= {require('../kits/contact.jpg')} style={{position:'absolute',height:height,zIndex:-1,width: width*1,bottom:0,top:0,right:-40,left:0,opacity:0.12}} resizeMode={'cover'} />


          <Text style={{color:'white',fontSize:20,fontWeight:'bold',marginTop:-18}}>
Get in touch

          </Text>


          <Text style={{color:'white',fontSize:15,marginTop:10,fontWeight:'bold'}}>
{notification}
          </Text>





          <Text style={{marginTop:5,margin:10,marginRight:70,color:'white',fontSize:20}}>
Name         
 </Text>

<TextInput 
value={name}
onChangeText={text=>setName(text)}

style={{color:'white',width:width*0.3,height:40,borderWidth:2,borderColor:'white'}}/>


<Text style={{margin:10,marginTop:10,marginRight:80,color:'white',fontSize:20}}>
Email
 </Text>

<TextInput 
value={email}
onChangeText={text=>setEmail(text)}

style={{color:'white',width:width*0.3,height:40,borderWidth:2,borderColor:'white'}}/>



<Text style={{margin:10,marginTop:10,marginRight:40,color:'white',fontSize:20}}>
Phone no.
 </Text>

<TextInput 
value={phone}
onChangeText={text=>setPhone(text)}

style={{color:'white',width:width*0.3,height:40,borderWidth:2,borderColor:'white'}}/>



<Text style={{margin:10,marginTop:10,marginRight:50,color:'white',fontSize:20}}>
Message
 </Text>

<TextInput 
value={message}
onChangeText={text=>setMessage(text)}

multiline={true} style={{color:'white',width:width*0.3,height:70,borderWidth:2,borderColor:'white'}}/>

<TouchableOpacity 
onPress={handlePress}
style={{color:'white',marginTop:15,marginBottom:5,borderRadius:10,height:40,width:80,alignItems:'center',justifyContent:'center',borderColor:'white',borderWidth:3}}>
<Text style={{color:'white',fontWeight:'bold'}}>
  Submit
</Text>

</TouchableOpacity>

<View style={{flexDirection:'row'}}>

<View>
<TouchableOpacity style={{margin:5}} 
onPress={()=>{
  Linking.openURL('https://www.linkedin.com/in/ijayalani')
}}

>
<Text style={{color:'white',fontWeight:'bold',margin:5}}>
  Linkedin
</Text>
</TouchableOpacity>
</View>


<View>
<TouchableOpacity style={{margin:5}}

onPress={()=>{
  Linking.openURL('https://twitter.com/ijayalani?s=09')
}}

>
<Text style={{color:'white',fontWeight:'bold',margin:5}}>
Twitter  
</Text>
</TouchableOpacity>
</View>

<View>
<TouchableOpacity style={{margin:5}} 

onPress={()=>{
  Linking.openURL('https://instagram.com/ijayalani')
}}

>
<Text style={{color:'white',fontWeight:'bold',margin:5}}>
Instagram  
</Text>
</TouchableOpacity>
</View>

<View>
<TouchableOpacity style={{margin:5}}

onPress={()=>{
  Linking.openURL('https://m.facebook.com/Theparanormalboy/')
}}


>
<Text style={{color:'white',fontWeight:'bold',margin:5}}>
Facebook
</Text>
</TouchableOpacity>
</View>


</View>

<Text style={{color:'white',fontWeight:'bold'}}>
 Jay Alani 💖 2020 . All rights reserved
   </Text> 
            </View>

       

</View>     



</View> 

        )
}