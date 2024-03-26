

"use client";

import { CarProps } from "@/types";
import Image from "next/image";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { skip } from "node:test";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "next/navigation";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Navbar from "@/components/Navbar";

interface Props {
    params: {
        carId: string
    }
}

interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
  }
  export default function BookingPage({ params }: Props) {
    const router = useRouter()

    const handleClickBtn = (massageID: string) => {
        router.push(`/booking/${massageID}`)
    }
  function removeAmpFromPicture(url: string): string {
    if (!url) {
      return url;
    } else return url.replace("amp;", "");
  }
  var count = 0;
  return (
    <>
      <Navbar/>
    </>
  );
}
