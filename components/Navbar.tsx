import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { IconButton } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

export default function Navbar() {
    return (
        <header className="w-full absolute z-10">
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
                <Link href="/" className="flex justify-center items-center animate-fade-down">
                    <Image src="/logo.svg" alt="Car Hub Logo" width={200} height={29} className="object-contain "/>
                </Link>

                <div className="flex gap-5">
                    <IconButton href="/booking" className="animate-fade-down animate-delay-500">
                        <DirectionsCarIcon sx={{ fontSize: 30 }}/>
                    </IconButton>
                    
                    <IconButton href="/user" className="animate-fade-down animate-delay-500">
                        <AccountCircleIcon sx={{ fontSize: 30 }}/>
                    </IconButton>

                    <CustomButton title="Sign In" btnType="button" containerStyles="text-base text-primary-blue rounded-full bg-white min-w-[130px] animate-fade-down animate-delay-1000"/>
                </div>
            </nav>
        </header>
    );
};
