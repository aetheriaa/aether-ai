export default async function handler(req, res) {

res.status(200).json({
totalUsers: 1250,
activeServer: 842,
uptime: '99.9%'
})

}
