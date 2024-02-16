import React from "react";
import { NavLink } from "react-router-dom";

const ChooseProblem = ({ title, description, linkTo }) => {
  return (
    <>
      <div className=" border border-3  border-primary rounded-2 mb-3 p-2">
        <div className="">
          <div className="col-12 m-1 ">
            <h5 className="text-center text-decoration-underline fst-italic">
              {title}
            </h5>
          </div>
        </div>
        {description && (
          <div className="row">
            <div className="col-12 mt-2">
              <h4 className="nav-item">
                <NavLink to={linkTo} className="nav-link text-info ">
                  {description}
                </NavLink>
              </h4>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ChooseProblem;
