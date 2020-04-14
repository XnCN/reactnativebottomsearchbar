import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Animated, Easing} from 'react-native';

import {Store} from '../store';

function BodyChildrenAnimation({children}) {
  const {state} = useContext(Store);
  const {isOpen, customCss} = state;
  const [animatedOpacity] = useState(new Animated.Value(1));
  const [height, setHeight] = useState();
  useEffect(() => {
    if (!isOpen) {
      setHeight({});
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
      }).start(() => setHeight({height: 0}));
    }
  }, [isOpen]);
  return (
    <Animated.View
      style={[
        {opacity: animatedOpacity},
        height,
        styles.children,
        customCss.children,
      ]}>
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
