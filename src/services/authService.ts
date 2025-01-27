// export async function authenticateUser(
//   userName: string,
//   password: string
// ): Promise<boolean> {
//   try {
//     const response = await fetch('/api/authenticate', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ userName, password }),
//     });

//     if (response.ok) {
//       const { token } = await response.json();
//       localStorage.setItem('authToken', token);
//       console.log('Login successful!');
//       return true;
//     } else {
//       console.error('Authentication failed.');
//       return false; // Indicate failed login
//     }
//   } catch (error) {
//     console.error('Error during authentication:', error);
//     return false;
//   }
// }

export const decodeBase64Token = (token: string) => {
  try {
    const decoded = atob(token); // Decode the Base64 string
    const data = JSON.parse(decoded); // Assuming it's a JSON string
    return data; // Replace 'username' with your key
  } catch (error) {
    console.error('Invalid token:', error);
    return 'Guest';
  }
};
