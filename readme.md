# React Native Bottom Search Bar Component

![](https://s5.gifyu.com/images/bottomgif.gif)

You can easily add animated search box for your application using this package.

### How do i use it?

This package needs react-native-svg package first you install it , you can install with npm i react-native-svg.
[You can watch(3 min) on youtube how to setup bottom search bar component.](https://youtu.be/UuX9kjc5L1c)

```javascript
npm install bottomsearchbar
```

Simple Use

```javascript
<BottomSearchBar />
```

### Component Props And Sample Prop Datas

| Prop Name              | Description                                                                                                                           |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| customCss              | You can put your own styles                                                                                                           |
| searchResultOnPress    | This parameter accepts a function, when the user clicks on the search result, the data of the clicked result is sent to this function |
| onSearchTextChange     | This function is triggered when the user types in the search box and returns the text written by the user.                            |
| data                   | Array containing data to search.                                                                                                      |
| placeHolderText        | Search input placeholder text                                                                                                         |
| cancelText             | Text of search box closing button                                                                                                     |
| customSearchResultItem | You can change search result component with this prop                                                                                 |
| icon                   | You can use your icon component                                                                                                       |

#### Custom Css Sample Object

```javascript
const customCss = {
  body: {},
  search: {},
  searchInput: {},
  searchResults: {},
  item: {},
  closeButtonColor: '',
};
<BottomSearchBar customCss={customCss} />;
```

#### searchResultOnPress Function Sample

```javascript
<BottomSearchBar searchResultOnPress={(item) => console.log(item)} />
```

#### onSearchTextChange Event Sample

```javascript
<BottomSearchBar onSearchTextChange={(text) => console.log(text)} />
```

#### Search Data Object Sample

**İmportant : The default search result component shows "title" property on the screen, you need to write the custom search result component to change it.
**

```javascript
const data =[
    {
      id: '0',
      title: 'Street Image',
      download_url:
        'https://unsplash.com/photos/lIVYk4qacSQ/download?force=true&w=640',
    }
  ]
 <BottomSearchBar
	data={data}
 />
```

#### customSearchResultItem Component Sample

```javascript
const customSearchResultItem = ({item, id}) => {
  console.log(item);
  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  );
};
<BottomSearchBar customSearchResultItem={customSearchResultItem} />;
```

#### Icon Sample

```javascript
const icon = <YourIconComponent />;
<BottomSearchBar icon={icon} />;
```

#### Search Input Placeholder Text Sample

```javascript
<BottomSearchBar placeHolderText={'Search'} />
```

#### Search Cancel Button Text Sample

```javascript
<BottomSearchBar cancelText={'Cancel'} />
```

## How can add my components in Bottom Search Bar component?

Thats is simple you can review this code.

```javascript
<BottomSearchBar>
  <View>
    <Text>My component</Text>
  </View>
</BottomSearchBar>
```

## How do i add my own components under the bottom searchbar component?

```javascript
<BottomSearchBar/>
<YourComponent/>
```

I thank JetBrains for their support to students.
