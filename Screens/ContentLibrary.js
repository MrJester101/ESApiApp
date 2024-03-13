import React from 'react';
import {View,Text,Image,ImageBackground,TouchableOpacity} from 'react-native';
import {ScrollView,TextInput} from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/Entypo';
import ContentPosts from '../Screens/ContentPosts';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';





export default class ContentLibrary extends React.Component{
    state={
        popularSelected:true
    }
    onTabPressed=()=>{
        this.setState({popularSelected:!this.state.popularSelected})
    }
    render(){
       

        return(
            <LinearGradient
            colors={['#4B39EF', '#FF5963', '#EE8B60']}
            // colors={['#000000', '#000000', '#000000']}
            start={[0, 0]}
            end={[1, 0]}
            style={{
              flex: 1,
              width: '100%',
            //   paddingHorizontal: 10,
            }}
          >




            <View style={{
                flex:1,
                width:"100%",
            }}>


                <View style={{
                    flexDirection:"row",
                    width:"100%",
                    paddingTop:40,
                    alignItems:"center",
                     paddingHorizontal:10
                }}>
                    <View style={{
                       width:"20%",
                    height:50,
                       alignItems:"flex-end",
                    }}>
                        <Image source={require('../images/p2.jpg')}
                          style={{alignSelf:"flex-start",marginLeft:7,width:50,height:50,   borderRadius:25,
                          borderWidth:3,
                          borderColor:"#044244",}}/>
                    </View>

                    <View style={{
                       width:"60%",
                    height:50,
                       alignItems:"flex-end",
                    }}>
                       
                           </View>



                    <View style={{
                        width:"20%",
                        alignItems:"flex-end",
                    }}>
                        <Icon name = "dots-three-vertical"
                          size={22}
                          color="#d2d2d2"
                          style={{
                              marginRight:-7,
                              marginTop:7
                          }}/>
                    </View>





                </View>


              <Text style={{
                  fontFamily:"Bold",
                  fontSize:25,
                  alignSelf:"center",
                  color:"#FFF",
                  paddingTop:7,
                  paddingBottom:7
              }}>DICHOTOMY</Text>


         


            <View style={{
                  backgroundColor:"#eaeaea",
                  borderTopLeftRadius:40,
                  borderTopRightRadius:40,
                  flex:1,
                //   borderWidth:15,
                //   borderColor:"#fff",
                //   paddingHorizontal:15
              }}>


            <View style={{
                      flexDirection:"row",
                      paddingTop:20,
                      backgroundColor:"#fff",
                      borderTopLeftRadius:20,
                      paddingHorizontal:15,
                      borderTopRightRadius:20
                  }}>
                      <TouchableOpacity
                          //  onPress={()=>this.props.navigation.navigate('ContentPosts')}
                        style={{
                            borderBottomColor:this.state.popularSelected ? "#044244":"#FFF",
                            borderBottomWidth:4,
                            paddingVertical:6
                        }}
                      >
                        

                       <Image  source={require('../images/trending.png')}
                       style={{
                        height:30,
                        width:30,

                       }}>

                       </Image>
                       <Text style={{
                        color:"#000000",
                        fontSize:10,

                       }}>
                        Trending
                       </Text>

                      </TouchableOpacity>


                      <TouchableOpacity
                        onPress={this.onTabPressed}
                        style={{
                            borderBottomColor:this.state.popularSelected ? "#FFF":"#044244",
                            borderBottomWidth:4,
                            paddingVertical:6,
                            marginLeft:30
                        }}
                      >
                         <Image  source={require('../images/film.png')}
                       style={{
                        height:30,
                        width:30,

                       }}>

                       </Image>
                       <Text style={{
                        color:"#000000",
                        fontSize:10,

                       }}>
                        Cinema
                       </Text>
                          
                      </TouchableOpacity>
                  </View>



            <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
               flex:1,
              
            
               
            }}
          >
          
          

                       <ContentPosts
                        // onPress={()=>this.props.navigation.navigate('SampleContentPosts')}
                        name="TheUncomplicated"
                        time="5458 mins ago"
                        photos={['https://www.zdnet.com/a/img/resize/605df164b50d7127344cce4c41e5e2a36ac951b4/2023/04/05/e0478a88-b3ed-4516-8459-e0b919b4b2bc/artificial-intelligence.jpg?auto=webp&width=1280', 'https://www.zdnet.com/a/img/resize/605df164b50d7127344cce4c41e5e2a36ac951b4/2023/04/05/e0478a88-b3ed-4516-8459-e0b919b4b2bc/artificial-intelligence.jpg?auto=webp&width=1280', 'https://www.zdnet.com/a/img/resize/605df164b50d7127344cce4c41e5e2a36ac951b4/2023/04/05/e0478a88-b3ed-4516-8459-e0b919b4b2bc/artificial-intelligence.jpg?auto=webp&width=1280','https://www.hocalwire.com/h-upload/uid/UrqcwKUWdSIBFwKspwg7hiPlTyX5TAoB7033284.jpg','https://blog.hubspot.com/hs-fs/hubfs/parts-url_1.webp?width=595&height=400&name=parts-url_1.webp']}
                        question="What's your view on the following Ram Mandir inauguration ?"
                        profile='https://www.zdnet.com/a/img/resize/605df164b50d7127344cce4c41e5e2a36ac951b4/2023/04/05/e0478a88-b3ed-4516-8459-e0b919b4b2bc/artificial-intelligence.jpg?auto=webp&width=1280'
                        // photo='https://www.zdnet.com/a/img/resize/605df164b50d7127344cce4c41e5e2a36ac951b4/2023/04/05/e0478a88-b3ed-4516-8459-e0b919b4b2bc/artificial-intelligence.jpg?auto=webp&width=1280'
      
                        option1="Oportunity to capitalize"
                        option2="Waste of Money"
                        option3="Political Agenda"
                        option4="Cultural Restoration"
                      />



                   
                      {/* <ContentPosts
                        onPress={()=>this.props.navigation.navigate('Detail')}
                        name="@LoneWol080"
                        time="45 min ago"
                        question="Politics and religion should not be mixed together? What is your saying?"
                        profile='https://www.zdnet.com/a/img/resize/605df164b50d7127344cce4c41e5e2a36ac951b4/2023/04/05/e0478a88-b3ed-4516-8459-e0b919b4b2bc/artificial-intelligence.jpg?auto=webp&width=1280'
                        // photo='https://www.zdnet.com/a/img/resize/605df164b50d7127344cce4c41e5e2a36ac951b4/2023/04/05/e0478a88-b3ed-4516-8459-e0b919b4b2bc/artificial-intelligence.jpg?auto=webp&width=1280'
                        photo={['https://www.zdnet.com/a/img/resize/605df164b50d7127344cce4c41e5e2a36ac951b4/2023/04/05/e0478a88-b3ed-4516-8459-e0b919b4b2bc/artificial-intelligence.jpg?auto=webp&width=1280', 'https://www.zdnet.com/a/img/resize/605df164b50d7127344cce4c41e5e2a36ac951b4/2023/04/05/e0478a88-b3ed-4516-8459-e0b919b4b2bc/artificial-intelligence.jpg?auto=webp&width=1280']}
                        option1="Yes"
                        option2="No"
                        option3="LMKIC"
                     
                       
                      /> */}


                    

        
                     
                


                  </ScrollView>


              </View>

         


            </View>

            </LinearGradient>



       
        )
    }
}