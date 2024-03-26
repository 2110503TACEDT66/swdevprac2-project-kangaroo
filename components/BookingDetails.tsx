"use client";

import { CarProps } from "@/types";
import Image from "next/image";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { skip } from "node:test";
import CustomButton from "./CustomButton";
import PictureParser from "./pictureParser";
interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

export function BookingDetails({ isOpen, closeModal, car }: CarDetailsProps) {
  var count = 0;
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="relative w-full max-w-lg max-h-[90vh] 
                    overflow-y-auto transfrom rounded-2xl bg-white p-6 text-left shadow-xl
                    trasition-all flex flex-col gap-5"
                >
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>

                  <div className="flex-1 flex flex-col gap-3">
                    <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                      <Image
                        src={PictureParser(car.Picture1)}
                        alt="car model"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={PictureParser(car.Picture2)}
                          alt="car model"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={PictureParser(car.Picture3)}
                          alt="car model"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={PictureParser(car.Picture4)}
                          alt="car model"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex-col flex gap-2">
                    <h2 className="font-semibold text-xl capitalize">
                      {" "}
                      {car.Brand} {car.Model}{" "}
                    </h2>
                    <div className="mt-3 flex flex-wrap gap-4">
                      <div className="mt-3 flex flex-wrap gap-4">
                        {Object.entries(car).map(([key, value]) => {
                          if (count < 5) {
                            count++;
                            return (
                              [
                                "Brand",
                                "Model",
                                "Year",
                                "Color",
                                "FeePerDay",
                              ].includes(key) && (
                                <div
                                  className="flex justify-between w-full gap-5 text-right"
                                  key={key}
                                >
                                  <div className="flex justify-between w-full gap-5 text-right">
                                    <h4 className="text-gray capitalize">
                                      {key.split("_").join(" ")}
                                    </h4>
                                    <p className="text-black-100 font-semibold">
                                      {value}
                                    </p>
                                  </div>
                                </div>
                              )
                            );
                          } else {
                            return null; // Return null or any other fallback JSX when the limit is reached
                          }
                        })}
                      </div>
                    </div>
                    <div className="car-card__btn-container">
                      <CustomButton
                        title="Booking"
                        containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
                        textStyles="text-white text-[14px] 
                    leading-[17px] font-bold"
                        rightIcon="/right-arrow.svg"
                      />
                    </div>

                    <div className="mt-6 flex flex-col w-full gap-3">
                        <button className="bg-transparent hover:bg-emerald-500 text-emerald-700 font-semibold hover:text-white py-2 px-4 border border-emerald-500 hover:border-transparent rounded">
                            Edit Booking
                        </button>

                        <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                            Delete Booking
                        </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
