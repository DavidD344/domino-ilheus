import { useContext } from "react";
import { ChampContext } from "../contexts/ChampContext";
import SignTeams from "../components/signTeams";
import ManageChamp from "../components/manageChamp";

const Home = () => {
  const { champStartList0 } = useContext(ChampContext);
  if (champStartList0) {
    return <ManageChamp></ManageChamp>;
  } else {
    return <SignTeams></SignTeams>;
  }
};
export default Home;
