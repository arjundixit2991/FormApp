/**
 * Created by arjundixit on 2/1/17.
 */

module.exports = {
    dbURL:"mongodb://localhost:27017/parkingDB",
    pnExpiry:Math.floor(Date.now() / 1000) + 28 * 86400,
    pnTimeToLive:28 * 86400,
    secret:'parkingSecret',
    apnkeyId: '',
    apnteamId: '',
    gcmAPIKey:'',
    apnTokens:[''],
    gcmTokens:['']
};