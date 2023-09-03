import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

interface Styles {
  logoContainer: TextStyle;
  sectionContainer: ViewStyle;
  sectionTitle: TextStyle;
  sectionDescription: TextStyle;
  highlight: TextStyle;
}

const style = StyleSheet.create<Styles>({
  logoContainer: {
    margin: 24,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default style;
