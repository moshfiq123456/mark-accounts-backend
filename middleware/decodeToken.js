const { jwtDecode } = require("jwt-decode");

const decodeToken = (token) => {
  // Check for "Bearer " prefix and extract the token

  return jwtDecode(token.split(" ")[1]);

  // Check if the user is a super admin

  // If the user is a super admin, proceed to the next middleware or route handler
};

module.exports = { decodeToken };
