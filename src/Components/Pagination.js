import React, { useState } from "react";
import { useGlobalContext } from "../context";

const Pagination = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const {indexPage, setIndex,fetchData} = useGlobalContext()
  
  const nextPage = () => {
    setIndex((oldvalue) => {
      let nextPage = oldvalue + 1;
      if (nextPage > array.length - 1) {
        nextPage = 0;
      }
      fetchData()
      return nextPage;
    });
  };

  const prevPage = () => {
    setIndex((oldvalue) => {
      let prevPage = oldvalue - 1;
      if (prevPage < 0) {
        prevPage = array.length - 1;
      }
      return prevPage;
    });
  };
  const handlePage = (index) => {
    setIndex(index);
  };
  console.log(indexPage);
  return (
    <div className="pagination">
      <button onClick={prevPage} className="pagination-button prev">
        Prev
      </button>
      {array.map((item, index) => {
        return (
          <button
            onClick={() => handlePage(index)}
            key={index}
            className={
              index === indexPage
                ? "pagination-button active"
                : "pagination-button"
            }
          >
            {item}
          </button>
        );
      })}
      <button onClick={nextPage} className="pagination-button next">
        Next
      </button>
    </div>
  );
};

export default Pagination;
