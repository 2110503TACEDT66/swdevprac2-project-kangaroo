'use client'

import { CarProps } from "@/types";
import { useState } from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import { BookingDetails } from "./BookingDetails";

export function BookingCard({car} : {car:CarProps}) {
    const { Brand, Model, Year, Color, FeePerDay, LicensePlate} = car;

    const [isOpen, setIsOpen] = useState(false)
    return(
        <div className="car-card group">
            <div className="car-card__content">
                <h2 className="car-card__content-title">
                        {Brand} {Model}
                </h2>
            </div>
            <p className="flex m-6 text-[32px] font-extrabold">
                <span className="self-start text-[14px] font-semibold">  
                    $
                </span>
                {FeePerDay}
                <span className="self-end text-[14px] font-medium">
                    /day
                </span>
            </p>
            <div className="relative w-full h-40 my-3 object-contain">
                <Image src="/benz.png" alt="car model" fill priority className="object-contain"/>
            </div>
            <div className="relative flex w-full mt-2 ">
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
                    <CustomButton title="Booking" 
                    containerStyles="w-full py-[16px] rounded-full bg-primary-blue" textStyles="text-white text-[14px] 
                    leading-[17px] font-bold" rightIcon="/right-arrow.svg" handleClick={()=>{setIsOpen(true)}}/>
                </div>
            </div>

            <BookingDetails isOpen={isOpen} closeModal={()=>{
                setIsOpen(false) }} car={car}
                />
            
            
        </div>
    );
};
