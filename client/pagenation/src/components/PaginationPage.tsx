import { useState } from "react";
import ReactPaginate from "react-paginate";

type UseDataHook<T> = (
  offset: number,
  limit: number
) => {
  data: { todos: T[]; totalCount: number } | undefined;
  isLoading: boolean;
};

type ListComponentProps<T> = {
  items: T[];
};

type PaginationPageProps<T> = {
  useDataHook: UseDataHook<T>;
  ListComponent: React.ComponentType<ListComponentProps<T>>;
  itemPerPage: number;
};

function PaginationPage<T>({
  useDataHook,
  ListComponent,
  itemPerPage,
}: PaginationPageProps<T>) {
  const [itemOffset, setItemOffset] = useState<number>(0);
  const { data, isLoading } = useDataHook(itemOffset, itemPerPage);
  const totalCount: number = data?.totalCount || 0;
  const pageCount: number = Math.ceil(totalCount / itemPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset: number = (event.selected * itemPerPage) % totalCount;
    setItemOffset(newOffset);
  };

  if (isLoading || data === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div className="row">
      <div className="offset-2 col-8">
        <ListComponent items={data.todos} />
      </div>
      <div className="d-flex justify-content-center offset-2 col-8">
        <ReactPaginate
          className="pagination "
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          forcePage={pageCount > 0 ? itemOffset / itemPerPage : undefined}
          nextClassName="page-item"
          previousClassName="page-item"
          pageClassName="page-item"
          breakClassName="page-item"
          pageLinkClassName="page-link"
          nextLinkClassName="page-link"
          previousLinkClassName="page-link"
          breakLinkClassName="page-link"
          activeClassName="active"
        />
      </div>
    </div>
  );
}

export default PaginationPage;
