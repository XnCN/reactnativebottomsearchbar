import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import BottomSearchBar from './src';

const initialData = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false,
  },
];
function App() {
  const [data, setData] = useState(initialData);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#c7d0cc'}}>
      <BottomSearchBar data={data} />
    </SafeAreaView>
  );
}
export default App;
