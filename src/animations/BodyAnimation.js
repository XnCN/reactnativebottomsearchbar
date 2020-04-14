import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Dimensions, Animated, Easing} from 'react-native';
import {Store} from '../store';

const opennedHeight = Dimensions.get('window').height - 200;
const BodyAnimation = ({children, styles}) => {
  const {state} = useContext(Store);
  const {isOpen, customCss} = state;
  //StartAnimation
  const [defaultHeight, setDefaultHeight] = useState();
  const [animatedHeightValue, setAnimatedHeightValue] = useState();
  const onLayoutHandler = event => {
    if (animatedHeightValue == undefined) {
      const initialHeight = event.nativeEvent.layout.height;
      setDefaultHeight(initialHeight);
      setAnimatedHeightValue(new Animated.Value(initialHeight));
    }
  };
  useEffect(() => {
    if (isOpen) {
      Animated.timing(animatedHeightValue, {
        toValue: opennedHeight,
        duration: 230,
        useNativeDriver: false,
        easing: Easing.elastic(),
      }).start();
    } else if (!isOpen && animatedHeightValue != undefined) {
      Animated.timing(animatedHeightValue, {
        toValue: defaultHeight,
        duration: 200,
        easing: Easing.exp,
        useNativeDriver: false,
      }).start();
    }
  }, [isOpen]);
  return (
    <Animated.View
      style={[styles.body, customCss.body, {height: animatedHeightValue}]}
      onLayout={onLayoutHandler}>
      {children}
    </Animated.View>
  );
};

export default BodyAnimation;

const styles = StyleSheet.create({});
