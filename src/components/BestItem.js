import { useEffect, useState } from "react";
import { getProducts } from "../api";
import ItemCard from "./ItemCard";

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 768) {
    return 1;
  } else if (width < 1280) {
    return 2;
  } else {
    return 4;
  }
};

function BestItem() {
  const [items, setItems] = useState([]);
  const [pageSize, setPageSize] = useState(getPageSize);

  const fetchProducts = async ({ orderBy, pageSize }) => {
    const products = await getProducts({ orderBy, pageSize });
    setItems(products.list);
  };

  useEffect(() => {
    const handleFixSize = () => {
      setPageSize(getPageSize());
    };

    window.addEventListener("resize", handleFixSize);
    fetchProducts({ orderBy: "favorite", pageSize });

    return () => {
      window.removeEventListener("resize", handleFixSize);
    };
  }, [pageSize]);

  return (
    <div className="best-item-container">
      <div className="best-item-title">베스트 상품</div>
      <div className="best-item-card">
        {items?.map((item) => (
          <ItemCard item={item} key={`best-item-${item.id}`} />
        ))}
      </div>
    </div>
  );
}

export default BestItem;
