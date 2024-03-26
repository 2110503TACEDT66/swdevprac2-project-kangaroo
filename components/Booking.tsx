'use client'
import { getCars } from "@/libs/getCars";
import { Booking, CarItems } from "@/types";
import { useEffect, useState } from "react";
import {BookingCard} from "@/components/BookingCard"
import getBookings from "@/libs/getBookings";

export default function BookingLists(props: { token: string }) {
  const [bookings, setBookings] = useState<Booking[]|null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const allBookings = await getBookings(props.token);
      setBookings(allBookings.data);
    } catch (error) {
      console.error('Failed to fetch cars:', error);
    }
  };

  const isDataEmpty = !bookings || bookings.length < 1;
  
  return (
      <>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {bookings?.map((booking:any) => (<BookingCard booking={booking}/>))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold animate-bounce">Loading</h2>
            {/* <p>{cars?.message}</p> */}
          </div>
        )}
      </>
  );
}

