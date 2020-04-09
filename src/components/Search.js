import React, {useContext, useRef, useEffect, useState, memo} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Animated,
} from 'react-native';
import {Store} from '../store';

function Search() {
  const {state, dispatch} = useContext(Store);
  const {isOpen, icon, placeHolderText, cancelText, customCss} = state;
  const searchInputRef = useRef();
  console.log('search render');
  return (
    <View style={styles.container}>
      <View style={[styles.search, customCss.search]}>
        {icon}
        <TextInput
          onFocus={() => dispatch({type: 'open'})}
          style={[styles.searchInput, customCss.searchInput]}
          placeholder={placeHolderText ? placeHolderText : 'Search'}
          ref={searchInputRef}
          onChangeText={searchText =>
            dispatch({type: 'searchText', searchText})
          }
        />
      </View>
      {isOpen && (
        <Button
          color={customCss.closeButtonColor}
          onPress={() => {
            dispatch({type: 'close'});
            searchInputRef.current.blur();
          }}
          title={cancelText ? cancelText : 'Close'}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f3f5',
    borderRadius: 5,
    flex: 1,
  },
  searchInput: {
    padding: 13,
    flex: 1,
  },
});
export default Search;
