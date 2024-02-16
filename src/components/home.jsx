import PageHeader from "./common/pageHeader";
import ChooseProblem from "./common/chooseProblem";
import { PROBLEMS_DETAILS } from "../constants";

const Home = () => {
  return (
    <>
      <PageHeader
        title={
          <>
            Coding <i className="bi bi-geo-fill"> </i>App
          </>
        }
        description={
          "In This Application You Can Find Some Problems That You'll Need To Solve :) "
        }
      />
      <div className="d-flex justify-content-center">
        <h3 className="text-decoration-underline mb-4">Choose Code Block :</h3>
      </div>
      <div className="d-flex justify-content-around ">
        {PROBLEMS_DETAILS.map((problem, index) => {
          return (
            <div>
              <ChooseProblem
                title={problem.title}
                description={"Join a Room"}
                linkTo={`problem/${index}`}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
