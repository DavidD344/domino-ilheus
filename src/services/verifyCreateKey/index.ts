import TeamEntity from "../../entity/TeamEntity";

const verifyCreateKey = ({ allTeams }: { allTeams: TeamEntity[] }): boolean => {

    if (allTeams.length !== 16) {
        return false
    }
    return true
}


export default verifyCreateKey