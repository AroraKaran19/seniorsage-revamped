import React from "react";
import RepositoryWrapper from "./Wrappers/RepositoryWrapper";
import LanguageWrapper from "./Wrappers/LanguageWrapper";
import { responseType } from "../GithubAnalysis";
import CareerWrapper from "./Wrappers/CareerWrapper";

const AnalyseWrapper = ({ response , status }: { response: responseType | null; status?: string | undefined }) => {
  return (
    <div className="analyse-show-wrapper w-full flex flex-col">
      <RepositoryWrapper
        repoCount={response ? response?.errorCode != 404 ? (response?.value?.repoInfo.repos.toString() ?? "0") : "error" : null}
        comment={response?.value?.repoInfo.comment ?? null}
        status={status}
      />
      <LanguageWrapper
        knownLanguages={response?.value?.languageInfo.Languages || null}
        recommendedLanguages={
          response?.value?.languageInfo.RecommendedLanguages || null
        }
        status={status}
      />
      <CareerWrapper
        career={response?.value?.languageInfo.CareerDomain || null}
        status={status}
      />
    </div>
  );
};

export default AnalyseWrapper;
