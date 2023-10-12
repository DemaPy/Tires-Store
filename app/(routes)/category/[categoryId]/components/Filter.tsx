"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { IColor, ISize } from "../../../../../types";
import queryString from "query-string";
import Button from "../../../../../components/ui/Button";

interface IFilter {
  valueKey: string;
  data: (ISize | IColor)[];
  name: string;
}

const Filter = ({ data, name, valueKey }: IFilter) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = queryString.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = queryString.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      {
        skipNull: true,
      }
    );

    router.push(url);
  };
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              onClick={() => onClick(filter.id)}
              className={`rounded-md p-2 bg-white text-gray-800 border text-sm border-gray-300 ${
                selectedValue === filter.id && "bg-black text-white"
              }`}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
