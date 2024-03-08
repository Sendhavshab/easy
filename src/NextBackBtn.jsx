import React, { memo } from "react";
import { Link } from "react-router-dom";
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi";
function NextBackBtn({ id, setProduct }) {
  function HandleProductChange() {
    setProduct([]);
  }

  return (
    <div className="flex justify-between px-3">
      <div>
        {id <= 1 || (
          <Link
            className="flex items-center gap-1 font-bold"
            to={`/Product/${id - 1}/details`}
          >
            <HiArrowSmLeft
              onClick={HandleProductChange}
              size={39}
              className=""
            ></HiArrowSmLeft>
            Privius
          </Link>
        )}
      </div>
      <div>
        <Link
          className="flex items-center gap-1 font-bold"
          to={`/Product/${id + 1}/details`}
        >
          <HiArrowSmRight
            onClick={HandleProductChange}
            size={39}
            className=""
          ></HiArrowSmRight>
          Next
        </Link>
      </div>
    </div>
  );
}

export default memo(NextBackBtn);
