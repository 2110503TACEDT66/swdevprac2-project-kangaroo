export default async function getBooking(bookingID: string, token: string) {
    const response = await fetch(`http://localhost:5050/api/v1/bookings/${bookingID}`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`
        }
    })

    if(!response.ok){
        throw new Error("Failed to fetch booking")
    }

    return await response.json()
};
