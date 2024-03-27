'use client'

import { Booking, CarProps } from "@/types";
import { useState, useEffect } from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import { BookingDetails } from "./BookingDetails";
import getCar from "@/libs/getCar";
import PictureParser from "./pictureParser";

export function BookingCard({booking, token} : {booking:Booking, token: string}) {
    const { bookingDateFrom, bookingDateTo } = booking
    const [ bookedCar, setBookedCar ] = useState<CarProps|null>(null)

    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async () => {
    try {
        const bookedCar = await getCar(booking.car.id);
        setBookedCar(bookedCar.data);
    } catch (error) {
        console.error('Failed to fetch cars:', error);
    }
    };

    const { Brand, Model, Year, Color, FeePerDay, LicensePlate, PictureCover } = bookedCar || {};
    const pictureSrc = PictureCover ? PictureParser(PictureCover) : '';

    const [isOpen, setIsOpen] = useState(false)
    
    return bookedCar ? (
        <div className="car-card group">
            <div className="car-card__content flex-col">
                <div className="leading-3">
                    {Brand} 
                </div>
                <div className="car-card__content-title">
                    {Model}
                </div>
            </div>
            <div className="flex m-6 text-[24px] font-bold gap-10 justify-between">
                <div className="flex flex-col">
                    <div className="text-base text-zinc-500">From</div>
                    {new Date(bookingDateFrom).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                </div>
                <div className="flex flex-col">
                <div className="text-base text-zinc-500">To</div>
                    {new Date(bookingDateTo).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                </div>
            </div>
            <div className="relative w-full h-40 my-3 object-contain">
                <Image
                    src={pictureSrc}
                    alt="car model"
                    fill
                    priority
                    className="object-contain"
                />
            </div>
            <div className="relative flex w-full mt-2">
                <div className="flex group-hover:invisible w-full justify-between text-gray">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src="/calendar.png" alt="year" width={20} height={20}/>
                        <p className="text-[14px] font-medium">
                            {Year}
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src="/pantone.png" alt="year" width={20} height={20}/>
                        <p className="text-[14px] font-medium">
                            {Color}
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src="/license-plate.png" alt="year" width={20} height={20}/>
                        <p className="text-[14px] font-medium">
                            {LicensePlate}
                        </p>
                    </div>
                </div>
                <div className="car-card__btn-container">
                    <CustomButton title="View Booking" 
                    containerStyles="w-full py-[16px] rounded-full bg-primary-blue" textStyles="text-white text-[14px] 
                    leading-[17px] font-bold" rightIcon="/right-arrow.svg" handleClick={()=>{setIsOpen(true)}}/>
                </div>
            </div>

            <BookingDetails isOpen={isOpen} closeModal={()=>{setIsOpen(false) }} car={bookedCar} bookingID={booking._id} bookingDateFrom={bookingDateFrom} token={token}/>
        </div>
    ): null;
};
