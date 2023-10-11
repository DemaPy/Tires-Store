import React from "react";
import Container from "../../components/ui/Container";
import Billboard from "../../components/Billboard";
import getBillboards from "../../actions/get-billboards";
import getProducts from "../../actions/get-products";
import ProductList from "../../components/ProductList";

export const revalidate = 0;

const Home = async () => {
  const billboards = await getBillboards(
    "7f0b1fa0-e3c4-467c-8bb7-4508d8622f39"
  );

  const products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboards} />
        <div className="flex flex-col gap-y-8 px-4">
          <ProductList title="Featured products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default Home;
