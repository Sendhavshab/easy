import axios from "axios";

export function GetProductList() {



  const codeYogiData = axios
    .get("https://myeasykart.codeyogi.io/products")
    .then(function (response) {

      return response.data.data;
    });
  const dummyData = axios
    .get("https://dummyjson.com/products/")
    .then(function (response) {
      return response.data.products;
    });

   return {dummyData, codeYogiData}
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

        const { token, user } = response.data;
        localStorage.setItem("token", token);

        return user;
      })
      .catch((error) => {
      });
  } else {
    return axios
      .post("https://myeasykart.codeyogi.io/login", {
        email: userData.email,
        password: userData.password,
      })
      .then((response) => {
        const { token, user } = response.data;
        localStorage.setItem("token", token);

        return user;
      });
  }
};
