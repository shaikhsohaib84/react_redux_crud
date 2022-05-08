import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGeneric } from "../../redux/action/genericAction";
import { setModel } from "../../redux/action/modelActions";

import { fetchProduct } from "../helpers/apiCall";

export const ProductList = () => {
  const dispatch = useDispatch();
  const modelState = useSelector((state) => state?.models);
  const genericState = useSelector((state) => state?.generic)
  const { productArray=[] } = modelState;
  const { selectedTitle={} } = genericState
  
  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const res = await fetchProduct() || [];
    dispatch(setModel('productArray', res));
  };
  
  const handleTitle = (selectedObject={}) => {
    dispatch(setGeneric({'selectedTitle': selectedObject}))
  }

  return (
    <>
      <div>ProductList</div>
      {productArray.map((ins) => (
        <>
          <h1>{ins?.id}</h1>
          <h1 onClick={() => {handleTitle(ins)}}>{ins?.title}</h1>
        </>
      ))}
    </>
  );
};
