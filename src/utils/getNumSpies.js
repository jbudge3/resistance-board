const getNumSpies = (numPlayers) => {
    if (numPlayers < 7) {
        return 2;
    } else if (numPlayers > 9) {
        return 4;
    } else {
        return 3;
    }
};

export default getNumSpies;
