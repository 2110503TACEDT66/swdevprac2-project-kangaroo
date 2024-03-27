import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import CustomButton from "./CustomButton";
import { IconButton } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

export default async function Navbar() {
    const session = await getServerSession(authOptions)

    return (
        <header className="w-full absolute z-10">
            <nav className="max-w-[1440px] flex justify-between items-center sm:px-16 px-6 py-4">
                <Link href="/" className="flex justify-center items-center animate-fade-down">
                    <Image src="/logo.svg" alt="Car Hub Logo" width={200} height={29} className="object-contain "/>
                </Link>

                <div className="flex items-center gap-5">
                    {
                        session ?
                        <IconButton href="/booking" className="animate-fade-down animate-delay-500" style={{ color: "#6667AB" }}>
                            <DirectionsCarIcon sx={{ fontSize: 30 }}/>
                        </IconButton>
                        : null
                    }
                    {
                        session ? 
                        <IconButton href="/user" className="animate-fade-down animate-delay-500" style={{ color: "#6667AB" }}>
                            <AccountCircleIcon sx={{ fontSize: 30 }}/>
                        </IconButton>
                        : null
                    }
                    {
                        session ? null 
                        : 
                        <Link href="/signup">
                            <button className="xl:text-primary-blue-100 text-primary-blue">Sign Up</button>
                        </Link> 
                    }
                    {
                        session ?
                        <Link href="/api/auth/signout">
                            <CustomButton title="Sign Out" btnType="button" containerStyles="text-primary-blue rounded-full bg-white min-w-[130px] animate-fade-down animate-delay-1000"/>
                        </Link>
                        : 
                        <Link href="/api/auth/signin">
                            <CustomButton title="Sign In" btnType="button" containerStyles="xl:text-primary-blue text-white rounded-full xl:bg-white bg-primary-blue min-w-[130px] animate-fade-down animate-delay-1000"/>
                        </Link> 
                    }
                </div>
            </nav>
        </header>
    );
};
