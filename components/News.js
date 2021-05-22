import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import NewsCell from './NewsCell';

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      refresh: false,
    };
  }

  componentDidMount = () => {
    this.fetchNews();
  };

  fetchNews = () => {
    fetch(
      'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ae059ade70684c5c94d4e6dc70096443',
    )
      .then(res => res.json())
      .then(res => this.setState({news: res.articles}));
  };

  onRefresh = () => {
    this.setState({refresh: true});
    setTimeout(() => {
      this.fetchNews();
    }, 300);
    this.setState({refresh: false});
  };

  _renderNews = ({item, index}) => {
    return (
      <View style={{}}>
        <TouchableOpacity
          key={index}
          onPress={() => {
            this.props.navigation.navigate('NewsDetails', {
              param: {
                id: item.id,
                source: item.urlToImage,
                title: item.title,
                link: item.url,
                date: item.publishedAt,
                author: item.author,
                description: item.description,
              },
            });
          }}>
          <NewsCell
            source={item.urlToImage}
            title={item.title}
            description={item.description}
            date={moment(item.publishedAt).fromNow()}
            author={item.author}
          />
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={{}}>
        <Text style={{fontSize: 30, margin: 18, fontWeight: 'bold'}}>
          News today
        </Text>
        <FlatList
          data={this.state.news}
          renderItem={this._renderNews}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => this.onRefresh()}
            />
          }
          extraData={this.state}
        />
      </View>
    );
  }
}

export default News;
