import React, {useState} from 'react';
import {Pressable, Text, View, Image} from 'react-native';
import {BorderedText, FlexedView, MarginView, StyledImage} from '../../styles';

const ThecondScreenElement = ({
  productID,
  productColor,
  productSize,
  productCount,
  productPicture,
}) => {
  const [deleteStatus, setDeleteStatus] = useState(true);

  const deleteStatusF = () => {
    setDeleteStatus(!deleteStatus);
  };
  return (
    <Pressable onPress={deleteStatusF}>
      <FlexedView marginL="10px" marginR="10px" marginT="20px">
        <FlexedView>
          {deleteStatus ? (
            <View>
              <StyledImage
                width="80px"
                height="100px"
                source={{uri: productPicture}}
              />
            </View>
          ) : (
            <></>
          )}
          <MarginView marginL="10px">
            <Text>{productID}</Text>
            <FlexedView marginT="10px" width="70px">
              <Text>{productColor}</Text>
              <Text>{productSize}</Text>
            </FlexedView>
          </MarginView>
        </FlexedView>

        <View>
          <BorderedText
            width="100px"
            backgroundColor="green"
            borderRadius="20px">
            {productCount}
          </BorderedText>
        </View>
        {deleteStatus ? (
          <></>
        ) : (
          <Pressable>
            <BorderedText
              backgroundColor="red"
              width="80px"
              height="50px"
              paddingT="12px">
              Delete
            </BorderedText>
          </Pressable>
        )}
      </FlexedView>
    </Pressable>
  );
};

export default ThecondScreenElement;
