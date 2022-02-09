import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {StyleSheet,Image} from 'react-native';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const InfoCard = (props) => (
  
  <Card style={styles.row}>
    {/* <Card.Title title={props.title} subtitle={props.subtitle} left={LeftContent} /> */}
    <Card.Content>
    <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Title>{props.title}</Title>
      <Paragraph>{props.content}</Paragraph>
    </Card.Content>
    {/* <Card.Cover source={{ uri: 'https://picsum.photos/500' }} /> */}
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>

    );
const styles = StyleSheet.create({
  row: {
   
    flexDirection: 'row',
    marginTop: 4,
    marginLeft:5,
    marginRight:5,
    padding:6,
    alignItems:'center',
    alignSelf:'center'
  },
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  }

})
export default InfoCard;