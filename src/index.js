import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {StoreProvider, Store} from './store';
import Body from './components/Body';

function BottomSearchBar({
  customCss,
  icon,
  customSearchResultItem,
  searchResultOnPress,
  onSearchTextChange,
  data,
  placeHolderText,
  cancelText,
  children,
}) {
  return (
    <StoreProvider>
      <View style={styles.container}>
        <Body
          customCss={customCss}
          placeHolderText={placeHolderText}
          cancelText={cancelText}
          customSearchResultItem={customSearchResultItem}
          data={data}
          icon={icon}
          searchResultOnPress={searchResultOnPress}
          onSearchTextChange={onSearchTextChange}
          children={children}
        />
      </View>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
});

export default BottomSearchBar;
