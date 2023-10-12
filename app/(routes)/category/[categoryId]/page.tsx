import React from "react";
import getProducts from "../../../../actions/get-products";
import getSizes from "../../../../actions/get-sizes";
import getColors from "../../../../actions/get-colors";
import getCategory from "../../../../actions/get-category";
import Container from "../../../../components/ui/Container";
import Billboard from "../../../../components/Billboard";
import Filter from "./components/Filter";
import NullResults from "../../../../components/ui/null-results";
import ProductCard from "../../../../components/ui/productCard";
import MobileFilters from "../../../../components/MobileFilters";

interface ICategoryPage {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

const page = async ({ params, searchParams }: ICategoryPage) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });

  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-6 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NullResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
