import React from "react";  
import { Helmet } from "react-helmet";


function HelmetMeta(param){

  const url = window.location.href
return (
  <Helmet>
    <title>{"EasyKart - " + param.category}</title>
    <meta name="title" content={param.title} />
    <meta name="description" content={param.description} />

    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={param.title} />
    <meta property="og:description" content={param.description} />
    <meta property="og:image" content={param.thumbnail} />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={url} />
    <meta property="twitter:title" content={param.title} />
    <meta content={param.description} property="twitter:description" />
    <meta property="twitter:image" content={param.thumbnail} />
  </Helmet>
);
}


export default HelmetMeta;