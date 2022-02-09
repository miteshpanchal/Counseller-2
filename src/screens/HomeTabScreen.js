import * as React from 'react';
import { BottomNavigation, Text,Button } from 'react-native-paper';
import Dashboard from './Dashboard';
import  AppBar  from '../components/AppBar';

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const TabsView = ({ navigation }) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'govt', title: 'Govt Schemes', icon: 'account-child-circle' },
    { key: 'albums', title: 'Exams', icon: 'book-open-outline' },
    { key: 'recents', title: 'Recents', icon: 'history' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    govt: Dashboard,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  return (
    <>
    <AppBar></AppBar>
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
    </>
  );
};

export default TabsView;