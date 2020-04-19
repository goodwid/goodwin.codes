exports.onDeleteHandler = admin => (_, { params: { userId } }) => {
  return admin.auth().deleteUser(userId);
};
