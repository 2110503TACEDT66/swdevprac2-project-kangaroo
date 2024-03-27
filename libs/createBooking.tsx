import bookings from "@/app/booking/page"
import { Dayjs } from "dayjs"

export default async function createBooking(booking_date: Dayjs, userId: string, carId: string) {
    const response = await fetch("http://localhost:5050/api/v1/auth/login", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            bookingDate: booking_date,
            user: userId,
            car: carId,

        }),
    })

    if (!response.ok) {
        throw new Error("Failed to login")
    }

    return await response.json()
};

