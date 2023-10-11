import React from "react";
import getProducts from "../../../../actions/get-products";
import getProduct from "../../../../actions/get-product";
import Container from "../../../../components/ui/Container";
import ProductList from "../../../../components/ProductList";
import Gallery from "../../../../components/Gallery";

interface IProductPage {
  params: {
    productId: string;
  };
}

const ProductPage = async ({ params: { productId } }: IProductPage) => {
  const product = await getProduct(productId);
  const suggestedPRoducts = await getProducts({
    categoryId: product.category.id,
  });


  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt16 sm:px-0 lg:mt-0">Info</div>
          </div>
          <hr className="my-10" />
          <ProductList items={suggestedPRoducts} title="Related Items" />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
