import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface SearchManufacturersProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
  Brand: string;
  Model: string;
  Year: string;
  Color: string;
  FeePerDay: string;
  LicensePlate: string;
}

export interface filterProps {
  manufacturer?: string;
  year?: string;
  color?: string;
  limit?: number;
  model?: string;
}

export interface Booking {
  _id: string;
  bookingDate: string;
  user: string;
  car: string;
  createdAt: string;
}

export interface CarItems {
  _id: string;
  Brand: string;
  Model: string;
  Year: string;
  Color: string;
  FeePerDay: string;
  LicensePlate: string;
  bookings: Booking[];
  id: string;
}

export interface GetCars {
  success: boolean;
  count: number;
  pagination: {};
  data: CarItems[];
  id: string;
}
