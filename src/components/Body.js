import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
  Button,
  Easing,
  Text,
} from 'react-native';
import Search from './Search';
import {Store} from '../store';
import BodyAnimation from '../animations/BodyAnimation';
import BodyChildrenAnimation from '../animations/BodyChildrenAnimation';
import SearchResults from './SearchResults';

function Body({
  customCss,
  placeHolderText,
  cancelText,
  customSearchResultItem,
  icon,
  searchResultOnPress,
  onSearchTextChange,
  data,
  children,
}) {
  const {state, dispatch} = useContext(Store);
  const {isOpen, searchText, searchResultPressedItem} = state;

  //Props
  useEffect(() => {
    if (placeHolderText != undefined)
      dispatch({type: 'placeHolderText', placeHolderText});
    if (cancelText != undefined) dispatch({type: 'cancelText', cancelText});
    if (customCss) dispatch({type: 'customCss', customCss});
  }, [placeHolderText, cancelText, customCss]);

  useEffect(() => {
    dispatch({type: 'data', data});
  }, [data]);

  useEffect(() => {
    if (searchText != '' && onSearchTextChange != undefined)
      onSearchTextChange(searchText);
  }, [searchText]);

  useEffect(() => {
    if (
      searchResultPressedItem != undefined &&
      searchResultOnPress != undefined
    ) {
      searchResultOnPress(searchResultPressedItem);
    }
  }, [searchResultPressedItem]);

  useEffect(() => {
    if (icon != undefined) dispatch({type: 'icon', icon});
  }, [icon]);

  useEffect(() => {
    if (customSearchResultItem != undefined)
      dispatch({type: 'customSearchResultItem', customSearchResultItem});
  }, [customSearchResultItem]);

  return (
    <BodyAnimation styles={styles}>
      <Search />
      <BodyChildrenAnimation>{children}</BodyChildrenAnimation>
      {isOpen && <SearchResults />}
    </BodyAnimation>
  );
}
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#FFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignSelf: 'flex-end',
    width: '100%',
  },
});
export default Body;
