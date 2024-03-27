"use client"
// import getCar from "@/libs/getCar";
// import * as React from "react";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { useState } from "react";
// import createBooking from "@/libs/createBooking";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";



// export default async function CardDetailPage({
//   params,
// }: {
//   params: { cid: string };
// }) {
//   const CarDetail = await getCar(params.cid);
//   const { Brand, Model, Year, Color, FeePerDay, LicensePlate, PictureCover } =
//     CarDetail;

// const [selectedDate, setSelectedDate] = useState('')

// const session = await getServerSession(authOptions)
//   if (!session || !session.user.token) return null

//   const token = session.user._id
  

//   return (
//     <main className="text-center p-5">
//       <h1 className="text-lg font-medium">Car ID {CarDetail.data.id}</h1>
//       <div className="flex flex-row my-5">
//         <div className="text-md mx-5 text-left">
//           <p className="font-bold">{CarDetail.data.Brand}</p>
//           <p>Model: {CarDetail.data.Model}</p>
//           <p>Tel: {CarDetail.data.tel}</p>
//         </div>
//         <div className="flex flex-col">
//           <LocalizationProvider dateAdapter={AdapterDayjs}>
//             <DemoContainer components={["DatePicker"]}>
//               <DatePicker label="Basic date picker" value={selectedDate}/>
//             </DemoContainer>
//           </LocalizationProvider>
//           <form>
//             <div className="ml-5">
//               <label className="block text-sm font-medium text-gray-700">Duration</label>
//               <input
//                 className="mt-1 p-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                 type="number"
//                 id="duration"
//                 placeholder="Enter duration"
//               />
//             </div>
//           </form>
//           <button
//         title="Confirm Booking"
//       type={"submit"}
//       className={"custom-btn w-full py-[16px] rounded-full bg-primary-blue text-white"}
//       onClick={()=>
//         createBooking(selectedDate, CarDetail, token)
//       }
//     >Confirm Booking</button>
//         </div>
//       </div>
//     </main>
//   );
// }

import getCar from "@/libs/getCar";
import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState, useEffect } from "react";
import createBooking from "@/libs/createBooking";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Dayjs } from "dayjs";

function CardDetailPage({ params }: { params: { cid: string } }) {
  const [carDetail, setCarDetail] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState<Dayjs|null>(null);
  const [token, setToken] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const carData = await getCar(params.cid);
      setCarDetail(carData);

      const session = await getServerSession(authOptions);
      if (session && session.user.token) {
        setToken(session.user._id);
      }
    };

    fetchData();
  }, [params.cid]);

  const handleConfirmBooking = () => {
    // if (!selectedDate || !carDetail || !token) return;
    createBooking(selectedDate, carDetail, token);
  };

  if (!carDetail) {
    return null; // or loading indicator
  }

  return (
    <main className="text-center p-5">
      <h1 className="text-lg font-medium">Car ID {carDetail.data.id}</h1>
      <div className="flex flex-row my-5">
        <div className="text-md mx-5 text-left">
          <p className="font-bold">{carDetail.data.Brand}</p>
          <p>Model: {carDetail.data.Model}</p>
          <p>Tel: {carDetail.data.tel}</p>
        </div>
        <div className="flex flex-col">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker label="Basic date picker" value={selectedDate} onChange={date => setSelectedDate(date)}/>
            </DemoContainer>
          </LocalizationProvider>
          <form>
            <div className="ml-5">
              <label className="block text-sm font-medium text-gray-700">Duration</label>
              <input
                className="mt-1 p-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                type="number"
                id="duration"
                placeholder="Enter duration"
              />
            </div>
          </form>
          <button
            title="Confirm Booking"
            type={"submit"}
            className={"custom-btn w-full py-[16px] rounded-full bg-primary-blue text-white"}
            onClick={handleConfirmBooking}
          >Confirm Booking</button>
        </div>
      </div>
    </main>
  );
}

export default CardDetailPage;
