import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
  Button,
  Easing,
} from 'react-native';

import {Store} from '../store';

function BodyChildrenAnimation({children}) {
  const {state, dispatch} = useContext(Store);
  const {isOpen, customCss} = state;
  const [animatedOpacity] = useState(new Animated.Value(1));
  useEffect(() => {
    if (!isOpen) {
      Animated.timing(animatedOpacity, {
        toValue: 1,
        duration: 400,
        easing: Easing.cubic,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animatedOpacity, {
        toValue: 0,
        duration: 1,
        useNativeDriver: false,
      }).start();
    }
  }, [isOpen]);
  return (
    <Animated.View
      style={[{opacity: animatedOpacity}, styles.children, customCss.children]}>
      {children}
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  children: {
    paddingTop: 10,
  },
});
export default BodyChildrenAnimation;
