import { CarCard } from "@/components/CarCard";
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import CarLists from "@/components/Home";
import SearchBar from "@/components/SearchBar";
import { getCars } from "@/libs/getCars";
import { CarItems } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";



export default  function Home() {



    // const allCars = await getCars({
    //   manufacturer: searchParams.manufacturer || '',
    //   year: searchParams.year || '',
    //   limit: searchParams.limit || 10,
    //   model: searchParams.model || ''
    // })
    // console.log(allCars)
  
  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalog</h1>
          <p>Explore the cars you might like</p>
        </div>
        {/* <div className="home__filters">
          <SearchBar/>
          <div className="home_filter-container">
              <CustomFilter title="fuel"/>
              <CustomFilter title="year"/>
          </div>
        </div> */}
        <CarLists/>
      </div>
    </main>
  );
}
// 'use client'
// import { CarCard } from "@/components/CarCard";
// import CustomFilter from "@/components/CustomFilter";
// import Hero from "@/components/Hero";
// import SearchBar from "@/components/SearchBar";
// import { getCars } from "@/libs/getCars";
// import { useState, useEffect } from "react";

// export default function Home() {
//   const [cars, setCars] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const allCars = await getCars();
//       setCars(allCars);
//     } catch (error) {
//       console.error('Failed to fetch cars:', error);
//     }
//   };

//   const isDataEmpty = !cars || cars.length === 0;

//   return (
//     <main className="overflow-hidden">
//       <Hero />
//       <div className="mt-12 padding-x padding-y max-width" id="discover">
//         <div className="home__text-container">
//           <h1 className="text-4xl font-extrabold">Car Catalog</h1>
//           <p>Explore the cars you might like</p>
//         </div>
//         <div className="home__filters">
//           <SearchBar />
//           <div className="home_filter-container">
//             <CustomFilter title="fuel" />
//             <CustomFilter title="year" />
//           </div>
//         </div>
//         {!isDataEmpty ? (
//           <section>
//             <div className="home__cars-wrapper">
//               {cars.map((car) => (
//                 <CarCard car={car} />
//               ))}
//             </div>
//           </section>
//         ) : (
//           <div className="home__error-container">
//             <h2 className="text-black text-xl font-bold ">Oops, no results</h2>
//             {/* <p>{cars?.message}</p> */}
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }
