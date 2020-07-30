import Rest from "./rest";
import getEnvVars from '../../../environment';

const { baseURL } = getEnvVars().api;
const api = new Rest({ url: baseURL });

api.createEntity({ name: "authUser", path: "/users" });

const setConfigAuth = (config, auth) => {
  return {
    headers: !!auth ? { Authorization: `${auth.type} ${auth.token}` } : {},
    ...config
  }
}

export const authUser = ({ user }) => {
  console.log('user', user);
  return api.endpoints.authUser.getOne({ id: user });
};

export { Rest, baseURL };
