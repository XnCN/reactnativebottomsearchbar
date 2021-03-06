import React, {useContext} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import {Store} from '../store';

function SearchResultItem({item, index}) {
  const calculatedStyle = index % 2 == 0 ? styles.striped : {};
  const {state, dispatch} = useContext(Store);
  const {customCss, customSearchResultItem} = state;
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        dispatch({
          type: 'searchResultPressedItem',
          searchResultPressedItem: {item, index},
        });
        dispatch({
          type: 'close',
        });
      }}>
      {customSearchResultItem == undefined ? (
        <View style={[styles.item, calculatedStyle, customCss.item]}>
          <Text>{item.title}</Text>
        </View>
      ) : (
        customSearchResultItem({item, index, dispatch})
      )}
    </TouchableWithoutFeedback>
  );
}

export default SearchResultItem;

const styles = StyleSheet.create({
  striped: {
    backgroundColor: 'rgba(243, 243, 245, 0.7)',
  },
  item: {
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
  },
});
