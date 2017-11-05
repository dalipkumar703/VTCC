import React from 'react';
import checkAadharSubmit from '../../api/getUserDetail';
import {View, Image,Text,StyleSheet} from 'react-native';
import {Button,Header,Content,Container} from 'native-base';
import store from '../../store';
class Vote extends React.Component {
   constructor(props){
     super(props);
     var login=store.getState();
     checkAadharSubmit(login.login[0].email).then((res)=>{
       console.log("result :",res);
     });
   }
render(){
  return (
      <Container >

        <Content>
        <Image
              style={{flex:1,height:200,width:null,margin:10}}
              source={{uri: 'http://ladasinghasan.weebly.com/uploads/8/0/3/8/8038657/aadhar_card_back.jpg'}}
            />
          <Button block info>
            <Text>Upload Aadhar</Text>
          </Button>
        </Content>
      </Container>
  )
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Vote
