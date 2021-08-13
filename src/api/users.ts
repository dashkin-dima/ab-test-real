import axios from 'axios';
import { userType } from 'typings/user';

const usersApi = () => axios.create({
  headers: { 'Content-Type': 'application/json' },
  baseURL: 'http://localhost:3001/users',
});

const getUsersApi = async (): Promise<Array<userType> | Error> => {
  try {
    const response = await usersApi().get('/');
    return response.data;
  } catch (error) {
    return error;
  }
};

const addUserApi = async (user: userType) => {
  try {
    const response = await usersApi().post('/', user);
    return response;
  } catch (error) {
    return error;
  }
};

export { getUsersApi, addUserApi };
