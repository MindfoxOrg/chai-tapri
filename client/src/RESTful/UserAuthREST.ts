import axios from "axios";

export async function signup(userData: UserSignUp){
  // Create a new object with the required user data
  const requestBody = {
    email: userData.email,
    password: userData.password,
    phoneNumber: userData.phoneNumber,
    name: userData.name,
    birthDate: userData.birthDate
  };

  try {
    // Make a POST request using Axios
    const response = await axios.post(import.meta.env.VITE_BASE_URL + `/signup`, requestBody);

    // Extract 'Authkey' token from response headers
    const authKey : string = response.headers['authkey'];

    // Return an object of type Auth
    const authData: Auth = {
      email: userData.email,
      bearer: authKey
    };
    return authData;
  } catch (error) {
    // Handle errors
    console.error('Error during signup:', error);
    throw error; // Rethrow the error for the caller to handle if needed
  }
}

