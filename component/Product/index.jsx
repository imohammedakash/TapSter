import React, { useEffect, useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import Card from "../Helper/Card";
import { getProductList } from "@/Redux/Actions/product";
import Seemer from "../Helper/Seemer";

const Index = () => {
  const [productList, setProductList] = useState([])
  useEffect(() => {
    getProductList().then(res => {
      setProductList(res.products)
    })
  }, [])
  return (
    <Wrapper>
      <div className=" mt-10">
        <div className="">
          <h1 className="text-4xl w-full text-center">
            Explore our Latest Products
          </h1>
        </div>
        {

          productList.length ? <div className="my-10 flex items-center justify-center gap-4 flex-wrap">
            {
              productList.map(item => (
                <Card
                  data={item}
                />
              ))
            }
          </div> : <div className="flex items-center justify-center gap-5 flex-wrap my-10">
            <Seemer />
            <Seemer />
            <Seemer />
            <Seemer />
            <Seemer />
            <Seemer />
            <Seemer />
            <Seemer />
          </div>

        }

      </div>
    </Wrapper>
  );
};

export default Index;
