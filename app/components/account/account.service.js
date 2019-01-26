export const accountService = ['$rootScope', '$q', function ($rootScope, $q) {
  return {
    userRegistration,
    userLogin,
    userLogout,
    getUserData
  };

  function setNameToUser(userData, userName) {
    return userData.updateProfile({
        displayName: userName
      })
      .then(() => {
        return setUserToLs(userData);
      })
      .catch((error) => {
        return errorWhileRetrieveUserData(error);
      });
  }

  function registerNewUser(userFromData, userName) {
    return $rootScope.firebase.auth()
        .createUserWithEmailAndPassword(userFromData.email, userFromData.password)
        .then((newUserData) => {
          return setNameToUser(newUserData.user, userName);
        })
        .catch((error) => {
          return errorWhileRetrieveUserData(error);
        });
  }

  function userRegistration(user) {
    const userName = `${user.name} ${user.lastName || ''}`;
    return registerNewUser(user, userName);
  }
  
  function userLogin(user) {
    return $rootScope.firebase.auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((result) => {
          return setUserToLs(result.user);
        })
        .catch((error) => {
          return errorWhileRetrieveUserData(error);
        });
  }
  
  function userLogout() {
    return $rootScope.firebase.auth()
        .signOut()
        .then((result) => {
          console.log(result);
          return removeUserFromLs();
        })
        .catch((error) => {
          return errorWhileRetrieveUserData(error);
        });
  }

  function setUserToLs(user) {
    const userNameAndId = {userid: user.uid, username: user.displayName};
    localStorage.setItem('userdata', JSON.stringify(userNameAndId));

    return $q.when(userNameAndId);
  }

  function removeUserFromLs() {
    localStorage.removeItem('userdata');
    return $q.when();
  }

  function getUserData() {
    const currentUser = localStorage.getItem('userdata');
    return JSON.parse(currentUser);
  }

  function errorWhileRetrieveUserData(error) {
    alert(`authenticate error ${error.message}`);

    return $q.reject();
  }
}];