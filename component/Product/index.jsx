import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import Card from "../Helper/Card";

const Index = () => {
  return (
    <Wrapper>
      <div className=" mt-10">
        <div className="">
          <h1 className="text-4xl w-full text-center">
            Explore our Latest Products
          </h1>
        </div>
        <div className="my-10 flex items-center justify-center gap-4 flex-wrap">
          <Card
            productImage="https://labourlawadvisor.in/blog/wp-content/uploads/2023/01/Interesting-hidden-features-of-Debit-Card-1-1.png"
            name="Gold Plated Card"
            price="7999"
            id="gold-plated-card"
          />
          <Card
            productImage="https://labourlawadvisor.in/blog/wp-content/uploads/2023/01/Interesting-hidden-features-of-Debit-Card-1-1.png"
            name="Silver Plated Card"
            price="7999"
            id="silver-plated-card"
          />
          <Card
            productImage="https://labourlawadvisor.in/blog/wp-content/uploads/2023/01/Interesting-hidden-features-of-Debit-Card-1-1.png"
            name="Aqua Plated Card"
            price="7999"
            id="aqua-plated-card"
          />
          <Card
            productImage="https://labourlawadvisor.in/blog/wp-content/uploads/2023/01/Interesting-hidden-features-of-Debit-Card-1-1.png"
            name="Choclate Plated Card"
            price="7999"
            id="choclate-card"
          />
          <Card
            productImage="https://labourlawadvisor.in/blog/wp-content/uploads/2023/01/Interesting-hidden-features-of-Debit-Card-1-1.png"
            name="Platinum Plated Card"
            price="7999"
            id="platinum-card"
          />
          <Card
            productImage="https://labourlawadvisor.in/blog/wp-content/uploads/2023/01/Interesting-hidden-features-of-Debit-Card-1-1.png"
            name="Diamond Plated Card"
            price="7999"
            id="diamond-card"
          />
          <Card
            productImage="https://labourlawadvisor.in/blog/wp-content/uploads/2023/01/Interesting-hidden-features-of-Debit-Card-1-1.png"
            name="Wooden Plated Card"
            price="7999"
            id="wooden-card"
          />
          <Card
            productImage="https://labourlawadvisor.in/blog/wp-content/uploads/2023/01/Interesting-hidden-features-of-Debit-Card-1-1.png"
            name="Bronze Plated Card"
            price="7999"
            id="Bronze-card"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Index;
