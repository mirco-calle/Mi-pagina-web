import { AvatarPortfolio } from "@/components/avatar-portfolio";
import { CircleImage } from "@/components/circle-image";
import ContainerPage from "@/components/container-page";

import { PortfolioBox } from "@/components/portfolio-box";
import TransitionPage from "@/components/TransitionPage";
import { dataPortfolio } from "@/data";
import React from "react";

const PortfolioPage = () => {
  return (
    <>
      <TransitionPage />
      <ContainerPage>
        <AvatarPortfolio />
        <CircleImage />
        <div className="flex flex-col justify-center h-full">
          <h1
            className="text-2xl leading-tight text-center
        md:text-4xl md:mb-5"
          >
            Mis ultimos{" "}
            <span className="text-secondary font-bold">
              trabajos realizados
            </span>
          </h1>
          <div
            className="relative z-10 grid max-w-5xl gap-6
         mx-auto mt-4 sm:grid-cols-2 md:grid-cols-4"
          >
            {dataPortfolio.map((data) => (
              <PortfolioBox key={data.id} data={data} />
            ))}
          </div>
        </div>
      </ContainerPage>
    </>
  );
};

export default PortfolioPage;
