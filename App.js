import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
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
  {
    userId: 1,
    id: 4,
    title: 'et porro tempora',
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: 'qui ullam ratione quibusdam voluptatem quia omnis',
    completed: false,
  },
  {
    userId: 1,
    id: 7,
    title: 'illo expedita consequatur quia in',
    completed: false,
  },
  {
    userId: 1,
    id: 8,
    title: 'quo adipisci enim quam ut ab',
    completed: true,
  },
  {
    userId: 1,
    id: 9,
    title: 'molestiae perspiciatis ipsa',
    completed: false,
  },
  {
    userId: 1,
    id: 10,
    title: 'illo est ratione doloremque quia maiores aut',
    completed: true,
  },
  {
    userId: 1,
    id: 11,
    title: 'vero rerum temporibus dolor',
    completed: true,
  },
  {
    userId: 1,
    id: 12,
    title: 'ipsa repellendus fugit nisi',
    completed: true,
  },
  {
    userId: 1,
    id: 13,
    title: 'et doloremque nulla',
    completed: false,
  },
  {
    userId: 1,
    id: 14,
    title: 'repellendus sunt dolores architecto voluptatum',
    completed: true,
  },
  {
    userId: 1,
    id: 15,
    title: 'ab voluptatum amet voluptas',
    completed: true,
  },
  {
    userId: 1,
    id: 16,
    title: 'accusamus eos facilis sint et aut voluptatem',
    completed: true,
  },
  {
    userId: 1,
    id: 17,
    title: 'quo laboriosam deleniti aut qui',
    completed: true,
  },
  {
    userId: 1,
    id: 18,
    title: 'dolorum est consequatur ea mollitia in culpa',
    completed: false,
  },
  {
    userId: 1,
    id: 19,
    title: 'molestiae ipsa aut voluptatibus pariatur dolor nihil',
    completed: true,
  },
  {
    userId: 1,
    id: 20,
    title: 'ullam nobis libero sapiente ad optio sint',
    completed: true,
  },
  {
    userId: 2,
    id: 21,
    title: 'suscipit repellat esse quibusdam voluptatem incidunt',
    completed: false,
  },
  {
    userId: 2,
    id: 22,
    title: 'distinctio vitae autem nihil ut molestias quo',
    completed: true,
  },
  {
    userId: 2,
    id: 23,
    title: 'et itaque necessitatibus maxime molestiae qui quas velit',
    completed: false,
  },
  {
    userId: 2,
    id: 24,
    title: 'adipisci non ad dicta qui amet quaerat doloribus ea',
    completed: false,
  },
  {
    userId: 2,
    id: 25,
    title: 'voluptas quo tenetur perspiciatis explicabo natus',
    completed: true,
  },
];
function App() {
  const [data, setData] = useState(initialData);
  const searchTextChange = (text) => {
    const searchData = Array.from(initialData).filter((i) =>
      i.title.toLocaleLowerCase('tr').includes(text.toLocaleLowerCase('tr')),
    );
    setData(searchData);
  };
  const searchResultOnPress = (item) => {
    console.log(item, 'zaaaaa');
  };
  const icon = <Text>icon</Text>;
  const customSearchResultItem = ({item, id}) => {
    console.log(item);
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  };
  const customCss = {
    body: {
      backgroundColor: '#202024',
    },
    search: {
      backgroundColor: '#141416',
    },
    searchInput: {
      color: 'red',
    },
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#c7d0cc'}}>
      <Text>deneme</Text>
      <BottomSearchBar
        //customSearchResultItem={customSearchResultItem}
        //customCss={customCss}
        icon={icon}
        searchResultOnPress={searchResultOnPress}
        onSearchTextChange={searchTextChange}
        data={data}>
        <Text>deneme</Text>
      </BottomSearchBar>
    </SafeAreaView>
  );
}
export default App;
