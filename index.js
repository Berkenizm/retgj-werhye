var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Merhaba Takachi ben!",
assets : {
large_image : "takachiss",
large_text : "Takachi" // bu gözükmeyebilir!!
},
buttons : [{label : "Discord" , url : "https://discord.gg/P2Ha5BNy8Q"},{label : "Youtube",url : "https://www.youtube.com/channel/UCyavz0NVb54FIik1AbjZmWg"}] //kendinize göre yazın
}
})
})
client.login({ clientId : "858745607488143370" }).catch(console.error);