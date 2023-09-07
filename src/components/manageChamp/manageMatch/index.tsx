import { useContext } from "react";
import TeamEntity from "../../../entity/TeamEntity";
import { ChampContext } from "../../../contexts/ChampContext";

const ManageMatch = ({
  teams,
  manageEtap,
}: {
  teams: TeamEntity[];
  manageEtap: number;
}) => {
  const { verifyRefreshKey } = useContext(ChampContext);
  console.log(teams.length);
  const teamElements = [];
  for (let index = 0; index < teams.length; index++) {
    const team = teams[index];
    const team2 = teams[index + 1];

    // Cria um elemento JSX para cada time e adiciona ao array
    teamElements.push(
      <div key={index} className="py-4 h-fit">
        <div
          className={`cursor-pointer text-th_white bg-th_lbg py-2 px-4 border-th_blue border-solid border-[1px] min-h-[32px] min-w-[120px]`}
          key={index}
          onClick={() => {
            const boneTeam: TeamEntity = {
              etap: manageEtap + 1,
              nome: team.nome,
            }; //crio o queb vou armazenar
            const arrayChampNext = localStorage.getItem(
              `champkey${manageEtap + 1}`
            ); //pego o aray atual
            if (!arrayChampNext) {
              //verifico se existe
              return;
            }
            const arrayRecNext = JSON.parse(arrayChampNext); //transformo em array de verdade
            const nextIndice = Math.floor(index / 2);

            arrayRecNext[nextIndice] = boneTeam;

            const arrayTeamsNextString = JSON.stringify(arrayRecNext); //tranformo em string
            localStorage.setItem(
              `champkey${manageEtap + 1}`,
              arrayTeamsNextString
            );
            verifyRefreshKey();
          }}
        >
          {index}:{team.nome}
        </div>
        <div
          className="cursor-pointer text-th_white bg-th_lbg py-2 px-4 border-th_blue border-solid border-[1px] min-h-[32px] min-w-[240px]"
          key={index + 1}
          onClick={() => {
            const boneTeam: TeamEntity = {
              etap: manageEtap + 1,
              nome: team2.nome,
            }; //crio o queb vou armazenar
            const arrayChampNext = localStorage.getItem(
              `champkey${manageEtap + 1}`
            ); //pego o aray atual
            if (!arrayChampNext) {
              //verifico se existe
              return;
            }
            const arrayRecNext = JSON.parse(arrayChampNext); //transformo em array de verdade
            const nextIndice = Math.floor(index / 2);

            arrayRecNext[nextIndice] = boneTeam;

            const arrayTeamsNextString = JSON.stringify(arrayRecNext); //tranformo em string
            localStorage.setItem(
              `champkey${manageEtap + 1}`,
              arrayTeamsNextString
            );
            verifyRefreshKey();
          }}
        >
          {index + 1}:{team2.nome}
        </div>
      </div>
    );
    index++;
  }

  return <>{teamElements}</>;
};

export default ManageMatch;
