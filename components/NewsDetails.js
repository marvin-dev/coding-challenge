import React, {PureComponent} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  Linking,
} from 'react-native';
import moment from 'moment';

class News extends PureComponent {
  const = ({title, source, description, date, author, link} =
    this.props.navigation.state.params.param);

  loadInBrowser = () => {
    Linking.openURL(link).catch(err =>
      console.error("Couldn't load news", err),
    );
  };
  render() {
    return (
      <View>
        <View style={styles.MainContainer}>
          <View style={{paddingHorizontal: 20, marginTop: 20}}>
            <TouchableWithoutFeedback onPress={this.loadInBrowser}>
              <Text style={styles.TextWhite1}>{title}</Text>
            </TouchableWithoutFeedback>
            <View
              style={{height: 0.5, backgroundColor: 'grey', marginVertical: 15}}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 21,
              }}>
              <Image style={styles.AuthorImage} source={{uri: source}} />
              <View style={{flexDirection: 'column', width: '70%'}}>
                <Text style={styles.TextWhite2}>
                  {author == null ? 'No author' : author}
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={styles.MetaTextSource}> CNN</Text>
                  <Text style={styles.TextWhite2}>
                    {' '}
                    • {moment(date).fromNow()}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Image source={{uri: source}} style={styles.ImageContainer} />
          <View style={{paddingHorizontal: 20, marginTop: 20}}>
            <Text style={styles.content}>{description}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default News;

const styles = StyleSheet.create({
  MainContainer: {
    width: Dimensions.get('window').width,
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

  ImageContainer: {
    height: '55%',
    width: '100%',
  },

  TextWhite1: {
    fontSize: 17,
    color: '#000',
    fontWeight: '700',
  },
  TextWhite2: {
    fontSize: 10,
    color: '#222525',
    alignContent: 'center',
    alignItems: 'center',
    marginLeft: 7,
  },
  content: {
    fontSize: 14.5,
    color: '#222525',
    letterSpacing: 0.5,
  },
});
