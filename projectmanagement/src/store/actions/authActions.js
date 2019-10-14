export const signIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({
          type: "LOGIN_SUCCESS"
        });
      })
      .catch(err => {
        dispatch({
          type: "LOGIN_ERROR",
          error: err
        });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({
          type: "SIGNOUT_SUCCESS"
        });
      })
      .catch(err => {
        dispatch({
          type: "SIGNOUT_ERROR"
        });
      });
  };
};

export const signUp = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(res => {
        return firestore
          .collection("users")
          .doc(res.user.uid)
          .set({
            firstname: newUser.firstname,
            lastname: newUser.lastname,
            initials: newUser.firstname[0] + newUser.lastname[0]
          });
      })
      .then(() => {
        dispatch({
          type: "SIGNUP_SUCCESS"
        });
      })
      .catch(err => {
        dispatch({
          type: "SIGNUP_ERROR",
          error: err
        });
      });
  };
};
