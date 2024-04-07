import axios from "axios";

export function GetProductList(sort , Quary , page ) {

let params = {}


 let sortBy;


     if (sort === "title") {
         sortBy = "title"

      } else if (sort === "low to high") {
        sortBy = "price"
      } else if (sort === "high to low") {
        sortBy = "price"
        params.sortType =  "desc"
        
      } 
      if(sortBy){
params.sortBy = sortBy ;
      } if(Quary){
params.search = Quary ;
      }if(page){
params.page = page ;
      }
   
  console.log("get run with " , params)
 const codeYogiData = axios
    .get("https://myeasykart.codeyogi.io/products" , {
      params 
    } )
    .then(function (response) {

      return response.data;
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
