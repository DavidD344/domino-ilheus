import { useContext } from "react";
import { ChampContext } from "../../contexts/ChampContext";
import ManageMatch from "./manageMatch";

const ManageChamp = () => {
  const {
    champStartList0,
    champStartList1,
    champStartList2,
    champStartList3,
    champStartList4,
    resetChamp,
    resetarScore,
    deleteChamp,
  } = useContext(ChampContext);
  // erro de promise
  if (
    !champStartList0 ||
    !champStartList1 ||
    !champStartList2 ||
    !champStartList3 ||
    !champStartList4
  ) {
    return <h1>dasda</h1>;
  }
  if (champStartList0) {
    return (
      <div className="overflow-auto bg-th_bg">
        <div className="bg-th_bg w-full h-full px-8 py-8">
          <section className="flex flex-row items-center gap-x-4 gap-y-6  h-full w-full text-th_white ">
            <div className="w-fit h-full flex flex-col justify-around ">
              {ManageMatch({ teams: champStartList0, manageEtap: 0 })}
            </div>
            <div className="w-fit h-full flex flex-col justify-around  ">
              {ManageMatch({ teams: champStartList1, manageEtap: 1 })}
            </div>
            <div className="w-fit h-full flex flex-col justify-around ">
              {ManageMatch({ teams: champStartList2, manageEtap: 2 })}
            </div>

            <div className="w-fit h-full flex flex-col justify-around ">
              {ManageMatch({ teams: champStartList3, manageEtap: 3 })}
            </div>

            <div className="w-fit flex flex-row  items-center gap-x-3 text-green-500">
              Vencedor:
              {champStartList4.map((el, index) => {
                return (
                  <div
                    className="text-green-500 bg-th_lbg py-2 px-4 border-th_blue border-solid border-[1px] min-h-[32px] min-w-[120px]"
                    key={index}
                  >
                    {el.nome}&nbsp;
                  </div>
                );
              })}
            </div>
          </section>
        </div>
        <div className="bg-th_bg flex flex-col p-8 gap-8 ">
          {/* <button
            className=" bg-red-800 text-th_white w-fit h-fit py-2 px-4 rounded-[4px] hover:bg-red-700 transition-all"
            onClick={() => {
              resetChamp();
            }}
          >
            reset champ
          </button>
          <br />
          <br />
          <br /> */}
          <div className="flex flex-col gap-1 w-fit">
            <h6 className="text-green-600 font-semibold">Como usar:</h6>
            <p className="text-th_white">
              Acompanhe os resultados do campeonato e basta clicar no time
              vencedor que ele avança para a próxima etapa
            </p>
            <div className="h-[1px] bg-green-600 w-full"></div>
          </div>
          <div className="flex flex-col gap-1 w-fit">
            <h6 className="text-red-600 font-semibold">Resetar Pontuação:</h6>
            <p className="text-th_white">
              Apaga o registro de pontuação e volta o campeonato para o estado
              inicial
            </p>
            <div className="h-[1px] bg-red-600 w-full"></div>
          </div>
          <div className="flex flex-col gap-1 w-fit">
            <h6 className="text-red-600 font-semibold">Deletar Campeonato:</h6>
            <p className="text-th_white">
              Apaga o campeonato inteiro e volta para o registro do campeonato
            </p>
            <div className="h-[1px] bg-red-600 w-full"></div>
          </div>
          <div className="flex flex-row  gap-8">
            <button
              className=" bg-red-800 text-th_white w-fit h-fit py-2 px-4 rounded-[4px] hover:bg-red-700 transition-all"
              onClick={() => {
                resetarScore();
              }}
            >
              Resetar pontuação
            </button>
            <button
              className=" bg-red-800 text-th_white w-fit h-fit py-2 px-4 rounded-[4px] hover:bg-red-700 transition-all"
              onClick={() => {
                deleteChamp();
              }}
            >
              Deletar campeonato
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>carregando...</h1>;
  }
};
export default ManageChamp;
