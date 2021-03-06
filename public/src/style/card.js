import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height

export default StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },

  profile: {
    flex: 1,
    backgroundColor: 'tomato',
  },
  card: {
    flex: 1,
    width: width,
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
  },
  actions: {
    flex: .10,
    backgroundColor: '#e3da74',
    alignSelf: 'stretch',
    justifyContent: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  thumbnail: {
    alignSelf: 'center',
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  text: {
    fontSize: 20,
    //paddingTop: 10,
    //paddingBottom: 5,
    color: 'black'
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hero: {
    paddingTop: 50,
    backgroundColor: '#66b34e',
  },
  lookingFor: {
    backgroundColor: '#e3da74',
    //flex: 1,
  },
  profileData: {
    //backgroundColor: '#66b34e',
  },
  actionImageButton: {
    padding: 10,
  },
  actionButton: {
    padding: 10,
    marginTop: 5,
  }
})
