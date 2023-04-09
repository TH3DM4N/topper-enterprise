import { API, Auth } from "aws-amplify";

export async function getuser(path) {
  const user = await Auth.currentAuthenticatedUser();
  const token = user.signInUserSession.idToken.jwtToken;

  const config = {
    headers: {
      Authorization: token,
    },
  };
  return API.get("topperGateway", path, config);
}
