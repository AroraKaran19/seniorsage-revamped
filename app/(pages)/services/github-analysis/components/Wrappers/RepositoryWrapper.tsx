import React from "react";
import LoadingDots from "@/app/components/common/LoadingDots";
import Party from "@/app/components/common/Svgs/Party";
import Error from "@/app/components/common/Svgs/Error";

const RepositoryWrapper = ({
  repoCount = null,
  comment = null,
  status,
}: {
  repoCount: string | null;
  comment: string | null;
  status?: string | undefined;
}) => {

  return (
    <div className="repository-wrapper w-full flex bg-[#EADEFE] justify-between items-stretch rounded-[4rem] relative sm:flex-col sm:bg-transparent sm:gap-5">
      <div className="repository-wrapper-left-side w-[35%] bg-[#8941ff] rounded-[3rem] sm:w-full">
        <p className="w-2/3 sm:w-full sm:text-center">You have a total of</p>
        <div className="repo-show-container mt-20 sm:mt-5 bg-white/20 p-2 rounded-3xl flex flex-wrap justify-center items-center gap-2">
          {repoCount ? (
            repoCount != "error" ? (
              <span className="repo-count text-center">
                {repoCount} Repositories
              </span>
            ) : (
              "Error!"
            )
          ) : (
            <LoadingDots />
          )}
        </div>
      </div>
      <div className="repository-wrapper-right-side w-[35%] flex gap-4 flex-col justify-between bg-[#8941ff] rounded-[3rem] sm:w-full">
        {comment || status ? (
          <p className="sm:text-center">
            {status != "false" ? comment : "Error"}
          </p>
        ) : (
          <LoadingDots />
        )}
        {comment || status ? (
          <div className="view-icon">
            {status != "false" ? <Party /> : <Error />}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default RepositoryWrapper;
