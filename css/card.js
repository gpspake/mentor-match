import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height

export default StyleSheet.create({
  hero: {
    paddingTop: 50,
    backgroundColor: '#66b34e',
    flexDirection: 'row',
    flex: 3,
  },
  lookingFor: {
    backgroundColor: '#e3da74',
    flex: 1,
  },
  profileData: {
    backgroundColor: '#66b34e',

  },
  actionImageButton: {
    padding: 10,
  },
  actionButton: {
    padding: 10,
    marginTop: 5,
  },
  actions: {
    position: 'absolute',
    height: 90,
    left: 0,
    top: height - 90,
    width: width,

    backgroundColor: '#e3da74',
    alignSelf: 'stretch',
    justifyContent: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  card: {
    flex: 1,
    width: width,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
  },
  thumbnail: {
    alignSelf: 'center',
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 5,
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})