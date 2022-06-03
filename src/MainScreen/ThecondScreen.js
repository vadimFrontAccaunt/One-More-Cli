import {View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import ThecondScreenElement from './ThecondScreenElement';

export const ThecondScreen = () => {
  const id = useSelector(state => state.opendCartoon);
  const prod = useSelector(state => state.cartoons[id]?.products);

  const isEmpty = prod.length;

  return (
    <View>
      {isEmpty ? (
        prod.map(el => (
          <ThecondScreenElement
            key={el.productID}
            productID={el.productID}
            productColor={el.productColor}
            productSize={el.productSize}
            productCount={el.productCount}
            productPicture={el.productPicture}
          />
        ))
      ) : (
        <View>
          <Text>Sorry, my state is empty</Text>
        </View>
      )}
    </View>
  );
};
