import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';

const SingleDeteailsInfoView: React.FC<{
  info: string;
  image: ImageSourcePropType;
}> = ({info, image}) => {
  return (
    <View style={commonStyle.rowView}>
      <Image source={image} style={styles.infoIcon} />
      <Text style={styles.infoText}>{info}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  infoIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  infoText: {
    paddingLeft: 5,
  },
});

export const commonStyle = StyleSheet.create({
  rowView: {
    flexDirection: 'row',
    paddingRight: 16,
  },
  itemPadding: {
    paddingBottom: 10,
    paddingLeft: 16,
  },
});
export default SingleDeteailsInfoView;
