import BookingLists from "@/components/Booking";
import { CarCard } from "@/components/CarCard";
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import CarLists from "@/components/Home";
import SearchBar from "@/components/SearchBar";
import { getCars } from "@/libs/getCars";
import { CarItems } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

export  default function bookings(){

  return (
    <main className="overflow-hidden">

      <div className="mt-24 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold ">Your Booking</h1>
        </div>


        <BookingLists/>

      </div>
    </main>
  );

}