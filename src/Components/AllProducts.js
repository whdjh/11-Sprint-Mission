import { useEffect, useRef, useState } from 'react';
import { getProducts } from '../api';
import Product from './Product';
import { ArrowPathIcon } from '@heroicons/react/24/solid';
import Pagination from './Pagination';

const PAGE_SIZE = 10;

export default function AllProducts() {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [orderBy, setOrderBy] = useState('recent');
  let [totalCount, setTotalCount] = useState(0);
  const inSearchRef = useRef();

  const handleLoad = async (options = {}) => {
    let result;
    try {
      result = await getProducts(options);
    } catch (error) {
      console.log('error', error.message);
    }
    setProducts(result.list);
    setTotalCount(result.totalCount);
  };

  const handleOrder = (e) => {
    setOrderBy(e.target.value);
  };

  const handleKeywordSubmit = (e) => {
    e.preventDefault();
    const inputSearch = inSearchRef.current;
    setKeyword(inputSearch.value);
  };
  const handleKeywordReset = (e) => {
    setKeyword('');
  };

  const handlePaginationClick = (pageNum) => {
    // console.log('fn:handlePaginationClick', pageNum);
    setPage(pageNum);
  };

  useEffect(() => {
    handleLoad({ keyword, orderBy, page });
  }, [keyword, orderBy, page]);

  return (
    <div className="products">
      <div className="flex items-center gap-3">
        <h2 className="products-title mr-auto">전체 상품</h2>

        <form className="flex gap-1" onSubmit={handleKeywordSubmit}>
          <input className="in-search" type="text" ref={inSearchRef} placeholder="검색할 상품을 입력해 주세요" />
          <button className="btn-reset" type="reset" title="초기화" onClick={handleKeywordReset}>
            <ArrowPathIcon className="size-4 mx-auto" />
          </button>
        </form>

        <a href="/additem" className="btn">
          상품 등록하기
        </a>

        <select className="in-order" onChange={handleOrder} value={orderBy}>
          <option value="recent">최신순</option>
          <option value="favorite">좋아요 순</option>
        </select>
      </div>

      <div className="all">
        {products.map(({ id, images, name, price, favoriteCount }) => (
          <Product key={id} image={images[0]} name={name} price={price} favoriteCount={favoriteCount} />
        ))}
      </div>

      <Pagination
        className="my-10 mx-auto justify-center"
        page={page}
        pageSize={PAGE_SIZE}
        totalCount={totalCount}
        onClick={handlePaginationClick}
      />
    </div>
  );
}
