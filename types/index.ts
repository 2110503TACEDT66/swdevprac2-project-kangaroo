import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title:string,
    containerStyles?:string,
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit",
    textStyles?: string,
    rightIcon?: string,
    isDisabled?: boolean
}

export interface SearchManufacturersProps{
    manufacturer: string,
    setManufacturer: (manufacturer:string) => void;
}

export interface CarProps {
    Brand: string,
    Model: string,
    Year: string,
    Color: string,
    FeePerDay: string,
    LicensePlate: string
}

export interface filterProps{
    manufacturer?: string,
      year?: string,
      color?: string,
      limit?: number,
      model?: string

}

