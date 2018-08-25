import firebase from 'firebase/app';
import 'firebase/firestore';

import config from '../firebase.config';

export default function ($rootScope) {
  $rootScope.firebase = firebase.initializeApp(config);
};