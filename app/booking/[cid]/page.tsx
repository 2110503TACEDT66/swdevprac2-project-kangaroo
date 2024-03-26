"use client"
import getCar from "@/libs/getCar"
import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export default async function CardDetailPage ( {params} : { params: { cid: string}} ) {

    const CarDetail = await getCar(params.cid)

    return(
        <main className="text-center p-5">
            <h1 className="text-lg font-medium">Car ID {CarDetail.data.id}</h1>
                 <div className="flex flex-row my-5">
               
                <div className="text-md mx-5 text-left">{CarDetail.data.Brand}
                <div className="text-md mx-5">Model: {CarDetail.data.Model}</div>
                <div className="text-md mx-5">Tel: {CarDetail.data.tel}</div></div>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Basic date picker" />
      </DemoContainer>
    </LocalizationProvider>
            </div> 
        </main>
    )
}
