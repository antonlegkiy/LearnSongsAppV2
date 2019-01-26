import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import config from '../firebase.config';

export default ['$rootScope', function firebaseInit($rootScope) {
  $rootScope.firebase = firebase.initializeApp(config);
}];