import { useContext, useState } from "react";
import TeamEntity from "../../entity/TeamEntity";
import verifyCreateKey from "../../services/verifyCreateKey";

import { ChampContext } from "../../contexts/ChampContext";

const SignTeams = () => {
  const { activeChamp, resetChamp } = useContext(ChampContext);
  const [valueInput, setValueInput] = useState<string>("");
  const [allTeams, setAllTeams] = useState<TeamEntity[]>([]);

  function addTeam() {
    if (allTeams.length >= 16) {
      return;
    }
    if (valueInput.length <= 2) {
      return;
    }
    const boneTeam: TeamEntity = { etap: 0, nome: valueInput };

    setAllTeams([...allTeams, boneTeam]);

    setValueInput("");
  }

  function deleteAllKeys() {
    setAllTeams([]);
  }
  return (
    <div className=" _pading_section w-full min-h-screen flex flex-col items-center pt-20 gap-y-14 bg-th_bg">
      <h1 className="text-th_white font-bold text-4xl">Campeonato de Dominó</h1>
      <section className="flex flex-col pt-6 gap-y-6 w-full max-w-[700px]">
        <div className="flex flex-row gap-x-4">
          <input
            type="text"
            value={valueInput}
            className="flex-grow border-th_blue border-solid border-2 bg-th_lbg rounded-[4px] py-2 px-4 text-th_white"
            onChange={(e) => {
              setValueInput(e.target.value);
            }}
          />
          <button
            className=" bg-th_blue text-th_white w-fit h-fit py-2 px-4 rounded-[4px] hover:bg-th_lblue transition-all"
            type="button"
            onClick={() => {
              addTeam();
            }}
          >
            Adicionar time
          </button>
        </div>
        {allTeams.map(({ nome }, index) => {
          return (
            <div
              key={index}
              className="text-th_white bg-th_lbg py-2 px-4 border-th_blue border-solid border-[1px]"
            >
              {index + 1}: {nome}
            </div>
          );
        })}

        <div className="flex flex-row h-fit gap-x-4 items-center">
          <button
            type="button"
            className={`  w-fit h-fit py-2 px-4 rounded-[4px] transition-all ${
              allTeams.length === 16
                ? "text-th_white bg-green-800 hover:bg-green-700 "
                : "bg-gray-800 text-th_white"
            }`}
            onClick={() => {
              activeChamp(allTeams);
            }}
          >
            Iniciar campeonato
          </button>
          {allTeams.length === 16 ? (
            ""
          ) : (
            <p className="text-red-600 font-semibold text-sm ">
              É necessário 16 equipes para começar!
            </p>
          )}
        </div>
        <button
          type="button"
          className=" bg-red-800 text-th_white w-fit h-fit py-2 px-4 rounded-[4px] hover:bg-red-700 transition-all"
          onClick={() => {
            deleteAllKeys();
          }}
        >
          Deletar todos os times
        </button>
        {/* <button
          className="text-white bg-red-800"
          onClick={() => {
            resetChamp();
          }}
        >
          reset champ
        </button> */}
      </section>
    </div>
  );
};
export default SignTeams;
