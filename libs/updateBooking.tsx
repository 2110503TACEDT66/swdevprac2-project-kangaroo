import DateAdder from "@/utils/DateAdder"

export default async function updateBooking(bookingID: string, date: string, token: string) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/bookings/${bookingID}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            bookingDateTo: date
        })
    })

    if (!response.ok) {
        throw new Error("Failed to update booking")
    }

    return await response.json()
};
