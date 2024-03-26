export default async function getBookings(token: string) {
    const response = await fetch("http://localhost:5050/api/v1/bookings", {
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`
        }
    })

    if(!response.ok){
        throw new Error("Fail to fetch bookings")
    }

    return await response.json()
};
