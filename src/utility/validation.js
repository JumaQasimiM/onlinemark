export function validation({ username, password }) {
  let errors = {
    username: "",
    password: "",
  };

  if (!username || !username.trim()) {
    errors.username = "Username cannot be empty";
  }

  if (!password) {
    errors.password = "Password cannot be empty";
  }

  return errors;
}

//   const validation = ({ username, password }) => {
//     let errors = { username: "", password: "" };
//     if (!username.trim()) {
//       errors.username = "Username cannot be empty";
//     } else if (!password) {
//       errors.password = "Password cannot be empty";
//     }
//     setError(errors);
//     return !errors.username && !errors.password;
//   };
