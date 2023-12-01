import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  text: {
    color: '#000',
    fontSize: 18,
  },
  boxStyle: {
    borderBottomLeftRadius: 15, 
    borderBottomRightRadius: 15,
  },
  descriptionText: {
    color: "#000", fontSize: 22
  },
  priceView: {
    marginTop: 20,
    backgroundColor: "rgba(3, 252, 7,0.3)",
     padding: 10,
    borderRadius: 10,
    alignSelf: "center", width: '100%'
  },
  offerText: {
    fontSize: 20, color: 'green'
  },
  offerText1: {
    color: "green",
    fontSize: 25,
    fontWeight: "bold"
  },
  oldPrice: {
    fontSize: 25,
    paddingLeft: 10,
    textDecorationLine: 'line-through',
    color: "rgba(0,0,0,0.5)",
    fontWeight: "bold"
  },
  newPrice: {
    fontSize: 25,
    paddingLeft: 10,
    color: "rgba(0,0,0,0.8)",
    fontWeight: "bold"
  }
});
