export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    console.log(getState());

    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: profile.firstname,
        authorLastName: profile.lastname,
        authorId: authorId,
        createdAt: new Date()
      })
      .then(project => {
        dispatch({
          type: "CREATE_PROJECT",
          project: project
        });
      })
      .catch(error => {
        dispatch({
          type: "CREATE_PROJECT_ERROR",
          error: error
        });
      });
  };
};
