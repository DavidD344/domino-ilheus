import TeamEntity from "../../../entity/TeamEntity";

const ElKey = ({ el }: { el: TeamEntity }) => {
  return (
    <>
      <div>Time:{el.nome}</div>
    </>
  );
};

export default ElKey;
