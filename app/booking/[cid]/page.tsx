"use client";

import getCar from "@/libs/getCar";
import * as React from "react";
import { useState, useEffect } from "react";
import { Dayjs } from "dayjs";
import { useSession } from "next-auth/react";
import LocationDateReserve from "@/components/LocationDateReserve";
import PictureParser from "@/components/PictureParser";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";
import Swal from 'sweetalert2'

function CardDetailPage({ params }: { params: { cid: string } }) {
  const [carDetail, setCarDetail] = useState<any>(null);
  const [selectedDateFrom, setSelectedDateFrom] = useState<Dayjs | null>(null);
  const [selectedDateTo, setSelectedDateTo] = useState<Dayjs | null>(null);
  const [token, setToken] = useState<string>("");

  const { data: session } = useSession();

  const handleSubmit = async (e: React.FormEvent) => {
    // e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:5050/api/v1/cars/${params.cid}/bookings`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${session?.user.token}`,
          },
          body: JSON.stringify({
            user: session?.user._id,
            car: carDetail,
            bookingDateFrom: selectedDateFrom
              ? selectedDateFrom.format("YYYY/MM/DD")
              : "",
            bookingDateTo: selectedDateTo
              ? selectedDateTo.format("YYYY/MM/DD")
              : "",
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to create booking");
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const carData = await getCar(params.cid);
      setCarDetail(carData);
    };

    fetchData();
  }, [params.cid]);

  var isLoading = false

  if (!carDetail) {

    isLoading = true; // or loading indicator
  }
 
  return (
    <>
    {!isLoading ? (
    <main className="flex flex-col justify-center items-center h-screen">
      <h1 className="hero__title animate-fade-up mb-10">Your Booking</h1>
      <div className=" p-8 rounded-2xl shadow-lg bg-primary-blue-100 flex justify-center animate-fade-down">
        <div className="flex flex-col text-[20px]">
          <p className="font-bold">{carDetail.data.Brand} {carDetail.data.Model}</p>
          <Image
            src={PictureParser(carDetail.data.PictureCover)}
            alt="car"
            width={300}
            height={300}
          />
        </div>
        <div className="flex flex-row my-5">
          <div className="text-md mx-5 text-left"></div>
          <div className="flex flex-col">
            <div className="pb-5 ">
              <LocationDateReserve
                onDateChange={(value: Dayjs) => {
                  setSelectedDateFrom(value);
                }}
              />
              <LocationDateReserve
                onDateChange={(value: Dayjs) => {
                  setSelectedDateTo(value);
                }}
              />
            </div>
            <CustomButton
              title="Confirm Booking"
              textStyles=""
              containerStyles="w-full py-[16px] rounded-full bg-primary-blue text-white "
              handleClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </main>
    ) : (
        <div className="mt-16 flex justify-center items-center flex-row">
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent text-primary-blue"
            role="loading"
          >
            <span className="hidden">Loading...</span>
          </div>
        </div>
    )}
    </>
  );
}

export default CardDetailPage;
