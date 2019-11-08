var players = [];
var addPlayer = function (player) { return players.push(player); };
var removePlayer = function (player) {
    var playerIndex = players.indexOf(player);
    if (playerIndex > -1) {
        players.splice(playerIndex, 1);
    }
};
export default {
    pauseOthers: function (player) {
        players.forEach(function (otherPlayer) {
            if (otherPlayer !== player) {
                otherPlayer.pause();
            }
        });
    },
    subscribe: function (player) {
        if (players.indexOf(player) === -1) {
            addPlayer(player);
        }
    },
    unsubscribe: function (player) {
        removePlayer(player);
    },
};
//# sourceMappingURL=simultaneousPlayManager.js.map