import { createContext, useEffect, useState } from "react";

import TeamEntity from "../entity/TeamEntity";
import verifyCreateKey from "../services/verifyCreateKey";

interface IChampContext {
  champStartList0: false | TeamEntity[];
  champStartList1: false | TeamEntity[];

  champStartList2: false | TeamEntity[];

  champStartList3: false | TeamEntity[];
  champStartList4: false | TeamEntity[];

  activeChamp: (tryAllTeams: TeamEntity[]) => void;
  verifyRefreshKey: () => void;
  resetChamp: () => void;
  deleteChamp: () => void;
  resetarScore: () => void;
}

export const ChampContext = createContext({} as IChampContext);

export function ChampProvider({ children }: { children: React.ReactNode }) {
  const [champStartList0, setChampStartList0] = useState<false | TeamEntity[]>(
    false
  );
  const [champStartList1, setChampStartList1] = useState<false | TeamEntity[]>(
    false
  );
  const [champStartList2, setChampStartList2] = useState<false | TeamEntity[]>(
    false
  );
  const [champStartList3, setChampStartList3] = useState<false | TeamEntity[]>(
    false
  );

  const [champStartList4, setChampStartList4] = useState<false | TeamEntity[]>(
    false
  );
  function verifyRefreshKey() {
    const arrayChamp0 = localStorage.getItem("champkey0");

    // Converter a string de volta para um array bidimensional

    // Agora você pode usar o array bidimensional recuperado
    if (!arrayChamp0) {
      setChampStartList0(false);
      return;
    }

    //--------------------------------///////////
    const arrayChamp1 = localStorage.getItem("champkey1");
    if (!arrayChamp1) {
      return;
    }
    const arrayRec1 = JSON.parse(arrayChamp1);
    setChampStartList1(arrayRec1);
    //--------------------------------/////////
    //--------------------------------///////////
    const arrayChamp2 = localStorage.getItem("champkey2");
    if (!arrayChamp2) {
      return;
    }
    const arrayRec2 = JSON.parse(arrayChamp2);
    setChampStartList2(arrayRec2);
    //--------------------------------/////////
    //--------------------------------///////////
    const arrayChamp3 = localStorage.getItem("champkey3");
    if (!arrayChamp3) {
      return;
    }
    const arrayRec3 = JSON.parse(arrayChamp3);
    setChampStartList3(arrayRec3);
    //--------------------------------/////////
    //--------------------------------///////////
    const arrayChamp4 = localStorage.getItem("champkey4");
    if (!arrayChamp4) {
      return;
    }
    const arrayRec4 = JSON.parse(arrayChamp4);
    setChampStartList4(arrayRec4);
    //--------------------------------/////////
    const arrayRec0 = JSON.parse(arrayChamp0);

    setChampStartList0(arrayRec0);
  }
  useEffect(() => {
    verifyRefreshKey();
  }, []);

  function activeChamp(tryAllTeams: TeamEntity[]) {
    const resultVerify: boolean = verifyCreateKey({ allTeams: tryAllTeams });
    if (!resultVerify) {
      return false;
    }
    const arrayString = JSON.stringify(tryAllTeams);

    // Armazenar a string no localStorage
    localStorage.setItem("champkey0", arrayString);
    //Padrao inicial
    // --------------------------------
    const arrayTeams8: TeamEntity[] = [];
    for (let index = 0; index < 8; index++) {
      arrayTeams8.push({ etap: 1, nome: "" });
    }
    const arrayTeams8String = JSON.stringify(arrayTeams8);
    localStorage.setItem("champkey1", arrayTeams8String);
    // --------------------------------

    const arrayTeams4: TeamEntity[] = [];
    for (let index = 0; index < 4; index++) {
      arrayTeams4.push({ etap: 1, nome: "" });
    }
    const arrayTeams4String = JSON.stringify(arrayTeams4);
    localStorage.setItem("champkey2", arrayTeams4String);
    // --------------------------------
    const arrayTeams2: TeamEntity[] = [];
    for (let index = 0; index < 2; index++) {
      arrayTeams2.push({ etap: 1, nome: "" });
    }
    const arrayTeams2String = JSON.stringify(arrayTeams2);
    localStorage.setItem("champkey3", arrayTeams2String);
    // --------------------------------
    const arrayTeams1: TeamEntity[] = [{ etap: 1, nome: "" }];

    const arrayTeams1String = JSON.stringify(arrayTeams1);
    localStorage.setItem("champkey4", arrayTeams1String);
    // --------------------------------

    setChampStartList0(tryAllTeams);
    verifyRefreshKey();
    return;
  }

  function resetChamp() {
    const resetTimes: TeamEntity[] = [
      { nome: "Flamengo", etap: 0 },
      { nome: "Palmeiras", etap: 0 },
      { nome: "Santos", etap: 0 },
      { nome: "São Paulo", etap: 0 },
      { nome: "Corinthians", etap: 0 },
      { nome: "Vasco da Gama", etap: 0 },
      { nome: "Grêmio", etap: 0 },
      { nome: "Internacional", etap: 0 },
      { nome: "Cruzeiro", etap: 0 },
      { nome: "Botafogo", etap: 0 },
      { nome: "Fluminense", etap: 0 },
      { nome: "Atlético Mineiro", etap: 0 },
      { nome: "Bahia", etap: 0 },
      { nome: "Sport", etap: 0 },
      { nome: "Fortaleza", etap: 0 },
      { nome: "Ceará", etap: 0 },
    ];
    activeChamp(resetTimes);
    verifyRefreshKey();
    return;
  }

  function resetarScore() {
    const arrayChamp0 = localStorage.getItem("champkey0");
    if (!arrayChamp0) {
      return;
    }
    const arrayRec0 = JSON.parse(arrayChamp0);
    setChampStartList0(arrayRec0);

    const resetTimes: TeamEntity[] = arrayRec0;
    activeChamp(resetTimes);
    verifyRefreshKey();
    return;
  }
  function deleteChamp() {
    for (let index = 0; index < 5; index++) {
      localStorage.removeItem(`champkey${index}`);
    }
    verifyRefreshKey();
  }
  return (
    <ChampContext.Provider
      value={{
        resetChamp,
        champStartList0,
        champStartList1,
        champStartList2,
        champStartList3,
        champStartList4,
        activeChamp,
        resetarScore,
        verifyRefreshKey,
        deleteChamp,
      }}
    >
      {children}
    </ChampContext.Provider>
  );
}
