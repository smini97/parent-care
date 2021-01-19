import React, {useState, useEffect} from 'react';
import { StyleSheet, StatusBar, Text, View, Dimensions, ScrollView, TouchableOpacity, ImageBackground, Share} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import CommentLine from "../components/CommentLine"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ContentView({navigation, route}) {
  const {media, title, tags, img_url} = route.params
  const [likeState,setLikeState] = useState([])
  const [likeColorState,setLikeColorState] = useState([])
  const isLiked = async() => {
    if(likeState == "hearto"){
      setLikeState("heart")
      setLikeColorState("#ff4747")
      console.log("liked")
    } else{
      setLikeState("hearto")
      setLikeColorState("black")
      console.log("unliked")
    }
  }
  useEffect(()=>{
    isLiked();
  },[])

  const goMain = () => {
    navigation.navigate("Main")
}
  const doShare = () => {
    Share.share({
        message:`대치케어에서 <${title}> 를 확인해보세요! \n\n ${img_url[0]}`,
    });
}

  const profile = "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/images%2Fuser.png?alt=media&token=563356e6-3e65-44cb-a392-7d5817114008"
  const commentExList = [{"profile": profile,
"name": "수밍맘", "comment":"저도 이런 경험이 있어서 와닿았습니다"},
{"profile":profile, "name":"콩이파파", "comment":"저만 그런 게 아닌가보군요..^^"}, 
{"profile":profile, "name":"현서맘", "comment":"저에게 딱 필요한 말이었어요. 위안이 되네요..."},
{"profile":profile, "name":"현민맘", "comment":"딸에게 보여줬더니 공감을 많이 하더라구요. ^^"}]
return (
    <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.contentsBox}>
                <View style={styles.titleBox}><Text style={styles.titleText}>{title}</Text></View>
                <View style={styles.mediaBox}>
                  <Text style={styles.mediaText}>{media}</Text>
                  </View>
                <View style={styles.tagBox}><Text style={styles.tagText}>{tags}</Text></View>
          </View>
        </View>

        <ScrollView style={styles.mainContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={true} scrollEventThrottle={1} pagingEnabled={true} indicatorStyle={"white"}>
              {img_url.map((data,i)=>{
                return <ImageBackground key={i} source={{url: data}} resizeMode="cover" style={styles.imageBox}></ImageBackground>
              })}
            </ScrollView>
            
            

        

            <View style={styles.menuBox}>
              <TouchableOpacity style={styles.buttonBox} onPress ={()=>isLiked()}>
              <AntDesign name={likeState} size={24} color={likeColorState} />
                <Text style={styles.buttonText}>좋아요</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonBox} onPress ={()=>goMain()}>
                <AntDesign name="home" size={24} color="black" />
                <Text style={styles.buttonText}>메인으로</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonBox} onPress ={()=>doShare()}>
                <AntDesign name="sharealt" size={24} color="black" />
                <Text style={styles.buttonText}>공유하기</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.commentBox}>
              <View><Text style={{margin:5, marginBottom:20,color:"grey"}}>댓글 1216개 보기...</Text></View>
              {commentExList.map((data,i)=>{
                return <CommentLine key={i} profile={data.profile} name={data.name} comment={data.comment}/>
              })}

            </View>

           

              
        </ScrollView>
    
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    backgroundColor: "#fff",
  },
  header: {
    marginTop:10,
    paddingTop:10,
    justifyContent: "center",
    alignContent: "center",
  },
  mainContainer:{
    flex:1,
    paddingTop: 10
  },
  imageBox:{
    width: windowWidth,
    height: windowWidth,
  },
  contentsBox:{
    justifyContent:"center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    padding:20,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1
  },
  titleBox:{
    marginBottom: 5
  },
  titleText:{
    fontWeight:"700", 
    fontSize:17,
  },
  mediaBox:{
    borderColor: "grey",
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    marginBottom: 5,
    marginHorizontal:5
  },
  mediaText:{
    fontWeight:"500", 
    fontSize:13,
    color:"grey"
  },
  tagBox:{
    marginBottom: 5,
  },
  tagText:{
    fontWeight:"300", 
    fontSize:13,
    color:"grey"
  },
  menuBox:{
    flexDirection:"row",
    alignItems: "center",
    justifyContent:"center"
  },
  buttonBox:{
    width:windowWidth/5,
    height:windowWidth/5,
    margin:10,
    marginTop:15,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: 'lightgrey',
        shadowOffset: {
          width: 5,
          height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
  },
  buttonText:{
    padding:10,
    fontWeight:'500',
    fontSize:13
  },
  commentBox:{
    marginTop: 10,
    padding:10,
    marginBottom: 30
  }
  

  
  
  




});