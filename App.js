import { StyleSheet, Text, View } from 'react-native';
import GuestStackNavigator from './src/navigation/GuestStackNavigator';
import { store } from './src/redux/Store';
import { Provider } from 'react-redux';

const App = () => {

  return (
    <Provider store={store}>
      <GuestStackNavigator />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})






























// import React, { useEffect } from 'react';
// import { View } from 'react-native';
// import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';

// const App = () => {

//   useEffect(() => {
//     GoogleSignin.configure({
//       webClientId: "1099507826038-f46j0ae08njgt1j2qb1a8imhi86kl4ea.apps.googleusercontent.com",
//       androidClientId: "1099507826038-pj2ol0jm2gdc70n5i8qea77pfg6eb5eq.apps.googleusercontent.com",
//       scopes: ['profile', 'email'],
//       offlineAccess: true,
//     });
//   }, []);

//   const signIn = async () => {
//     try {
//       await GoogleSignin.hasPlayServices();
//       await GoogleSignin.signOut(); // Sign out the user first
//       const userInfo = await GoogleSignin.signIn();
//       console.log(userInfo);
//       // Handle signed in user
//     } catch (error) {
//       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//         // user cancelled the login flow
//         console.log('Sign in cancelled');
//       } else if (error.code === statusCodes.IN_PROGRESS) {
//         // operation (e.g. sign in) is in progress already
//         console.log('Operation in progress');
//       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//         // play services not available or outdated
//         console.log('Play services not available');
//       } else {
//         // some other error happened
//         console.error(error);
//       }
//     }
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <GoogleSigninButton
//         style={{ width: 192, height: 48 }}
//         size={GoogleSigninButton.Size.Wide}
//         color={GoogleSigninButton.Color.Dark}
//         onPress={signIn}
//       />
//     </View>

//   )
// }

// export default App;