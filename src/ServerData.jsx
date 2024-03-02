import React from "react";
import { items } from "./Data";
import axios from "axios";

export function GetProductList() {

    return axios.get("https://dummyjson.com/products");



}

export function GetOneProduct(id) {

 return axios.get("https://dummyjson.com/products/" + id);
}

