import { API, Auth } from "aws-amplify";

export async function createuser(path, data) {
  const user = await Auth.currentAuthenticatedUser();
  const token = user.signInUserSession.idToken.jwtToken;

  const config = {
    headers: {
      Authorization: token,
    },
    body: {
      data: data,
    },
  };
  return API.post("topperGateway", path, config);
}
