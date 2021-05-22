import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

const NewsCellBig = ({source, title, date, author}) => (
  <View style={styles.MainContainer}>
    <View style={{width: '75%'}}>
      <Text numberOfLines={2} ellipsizeMode={'tail'} style={styles.TextWhite1}>
        {title}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 5,
          marginBottom: 21,
        }}>
        <Image style={styles.AuthorImage} source={{uri: source}} />
        <View style={{flexDirection: 'column', width: '70%'}}>
          <Text style={styles.TextWhite2}>
            {author == null ? 'No author' : author}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.MetaTextSource}> CNN</Text>
            <Text style={styles.TextWhite2}> • {date}</Text>
          </View>
        </View>
      </View>
    </View>
    <View style={{width: 3}} />
    <View style={{width: '25%'}}>
      <Image
        source={{uri: source}}
        style={{width: 80, height: 80, borderRadius: 8}}
      />
    </View>
  </View>
);

export default NewsCellBig;

const styles = StyleSheet.create({
  MainContainer: {
    height: 120,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  MetaTextSource: {
    fontSize: 10,
    lineHeight: 15,
    color: '#222525',
    marginLeft: 7,
  },
  AuthorImage: {
    width: 27,
    height: 27,
    borderRadius: 15,
  },
  TextWhite1: {
    fontSize: 16,
    color: '#000',
    marginRight: 3,
  },
  TextWhite2: {
    fontSize: 10,
    color: '#222525',
    alignContent: 'center',
    alignItems: 'center',
    marginLeft: 7,
  },
});
