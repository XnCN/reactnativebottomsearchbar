import React, {useContext} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import SearchResultItem from './SearchResultItem';
import {Store} from '../store';

function SearchResults() {
  const {state} = useContext(Store);
  const {data, customSearchResultItem, customCss} = state;
  return (
    <FlatList
      style={customCss.searchResults}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({item, index}) =>
        customSearchResultItem == undefined ? (
          <SearchResultItem item={item} index={index} />
        ) : (
          customSearchResultItem({item, index})
        )
      }
    />
  );
}

export default SearchResults;

const styles = StyleSheet.create({});
