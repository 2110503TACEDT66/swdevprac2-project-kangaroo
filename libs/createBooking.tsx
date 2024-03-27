import bookings from "@/app/booking/page"
import { Dayjs } from "dayjs"

export default async function createBooking(booking_date_From: Dayjs,booking_date_To: Dayjs, userId: string, carId: string) {
    const response = await fetch("http://localhost:5050/api/v1/auth/login", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            bookingDateFrom: booking_date_From,
            bookingDateTo: booking_date_To,
            user: userId,
            car: carId,

        }),
    })

    if (!response.ok) {
        throw new Error("Failed to login")
    }

    return await response.json()
};

