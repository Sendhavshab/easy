import axios from "axios";

export function GetProductList() {
  return axios.get("https://dummyjson.com/products").then(function (response) {
    return response.data.products;
  });
}

export function GetOneProduct(id) {
  return axios
    .get("https://dummyjson.com/products/" + id)
    .then(function (response) {
      return response.data;
    });
}

export const GetUser = (token) => {
  return axios
    .get("https://myeasykart.codeyogi.io/me", {
      headers: { Authorization: token },
    })
    .then((respoonce) => {
      return respoonce;
    });
};

export const accountServerDataSender = (userData) => {
  if (userData.name) {
    return axios
      .post("https://myeasykart.codeyogi.io/signup", {
        fullName: userData.name,
        email: userData.email,
        password: userData.password,
      })
      .then((response) => {
        console.log(response.data);

        const { token, user } = response.data;
        localStorage.setItem("token", token);

        return user;
      })
      .catch((error) => {
        console.log("signup error: " + error);
      });
  } else {
    return axios
      .post("https://myeasykart.codeyogi.io/login", {
        email: userData.email,
        password: userData.password,
      })
      .then((response) => {
        console.log(response);
        const { token, user } = response.data;
        localStorage.setItem("token", token);

        return user;
      })
    
  }
};
