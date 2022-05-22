import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const AmountView: React.FC<{
  operation: string;
}> = ({operation}) => {
  return (
    <TouchableOpacity style={style.amount}>
      <Text>{operation}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  amount: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: '#fff',
    borderColor: '#E1DCE9',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default AmountView;
