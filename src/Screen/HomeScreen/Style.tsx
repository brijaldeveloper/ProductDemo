import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  text: {
    color: '#000',
    fontSize: 18,
  },
  noDataText: {
    alignSelf: "center", fontSize: 25,
    color:"#000"
  },
  loadingView: {
    flex: 1,
    justifyContent: "center",
    position:"absolute",
    top: 0, bottom: 0, left: 0, right: 0, backgroundColor: "rgba(0,0,0,0.5)"
  }
});
