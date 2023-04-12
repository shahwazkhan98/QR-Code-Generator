export const getQR = async(user) => {
    const Response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${user}
    `)
    return Response.url
    // console.log(Response)
}