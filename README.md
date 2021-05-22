# React Native News API

# Marvin Banton

# Brief

  - Our client wants an app where user's can check a hub of news articles in their app, read a short description, and then navigate to the article itself.


# Feature requirements

 - App will have 2 screens ( Home , Details )
 - The app will start on the Home screen
 - Home screen will pull a list of articles for the current day from NewsAPI (Subject/query is not important).
 - Home screen render the list of articles with each article showing the image, title, author, description, and the date it was published.
 - Home screen will have pull-to-refresh to query the NewsAPI again
 - Pressing an article on the Home screen will open it up on the Details screen.
 - Details screen will display the articles image, title, author, date published, url to the article, and the content.
 - Pressing the article's title on the Details screen will open the article's url in the device's browser.
 - Article dates should be displayed in a user friendly format.
 - Styling should be appealing.
 - The app should build without issue on Android and iOS

# Packages used
  
  - react-navigation - moving between screens
  - react-navigation-stack - moving between screens
  - react-native-gesture-handler
  - momentjs - for time format
