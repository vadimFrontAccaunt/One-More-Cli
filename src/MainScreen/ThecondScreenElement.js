import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {StyledBlock} from '../SimpleComponents/Block';
import {ImageDefault} from '../SimpleComponents/StyledImage';
import {StyledText} from '../SimpleComponents/Text';

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
      <StyledBlock
        ml="10px"
        mr="10px"
        mt="20px"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <StyledBlock
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center">
          {(deleteStatus && (
            <View>
              <ImageDefault
                width="80px"
                height="100px"
                source={{uri: productPicture}}
              />
            </View>
          )) ||
            null}
          <StyledBlock ml="10px">
            <Text>{productID}</Text>
            <StyledBlock mt="10px" width="70px">
              <Text>{productColor}</Text>
              <Text>{productSize}</Text>
            </StyledBlock>
          </StyledBlock>
        </StyledBlock>

        <View>
          <StyledText
            width="100px"
            bgc="green"
            br="20px"
            textAlign="center"
            fz="20px">
            {productCount}
          </StyledText>
        </View>
        {deleteStatus ? (
          <></>
        ) : (
          <Pressable>
            <StyledText
              textAlign="center"
              bgc="red"
              width="80px"
              height="50px"
              pt="12px">
              Delete
            </StyledText>
          </Pressable>
        )}
      </StyledBlock>
    </Pressable>
  );
};

export default ThecondScreenElement;
