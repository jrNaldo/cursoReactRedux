export default function handler(req, res) {
    const cod = req.query.codigo
    res.status(200).json({
        id: cod,
        nome: `Maria ${cod}`,
        email: `maria${cod}@gmail.com`
    })
}