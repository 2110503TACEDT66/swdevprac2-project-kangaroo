export default async function deleteBooking(bookingID: string, token: string) {
    const response = await fetch(`http://localhost:5050/api/v1/bookings/${bookingID}`, {
        method: "DELETE",
        headers: {
            authorization: `Bearer ${token}`
        }
    })

    if(!response.ok){
        throw new Error("Failed to delete bookings")
    }

    return await response.json()
};
