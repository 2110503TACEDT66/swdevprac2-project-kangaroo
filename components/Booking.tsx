'use client'
import { getCars } from "@/libs/getCars";
import { CarItems } from "@/types";
import { useEffect, useState } from "react";
import {BookingCard} from "@/components/BookingCard"

    export default function BookingLists() {
    
        const [cars, setCars] = useState<CarItems[]|null>(null);
      
          useEffect(() => {
            fetchData();
          }, []);
        
          const fetchData = async () => {
            try {
              const allCars = await getCars();
              setCars(allCars.data);
            } catch (error) {
              console.error('Failed to fetch cars:', error);
            }
          };
      
      
          // const allCars = await getCars({
          //   manufacturer: searchParams.manufacturer || '',
          //   year: searchParams.year || '',
          //   limit: searchParams.limit || 10,
          //   model: searchParams.model || ''
          // })
          // console.log(allCars)
      
        const isDataEmpty =   !cars || cars.length < 1;
        
        return (
            <>
              {!isDataEmpty ? (
                <section>
                 <div className="home__cars-wrapper">
                    {cars?.map((car:any) => (<BookingCard car={car}/>))}
                 </div>
                </section>
              ) : (
                <div className="home__error-container">
                  <h2 className="text-black text-xl font-bold ">Oops, no results</h2>
                  {/* <p>{cars?.message}</p> */}
                </div>
              )}
           </>
        );
      }

