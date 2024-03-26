'use client'

import { CustomButtonProps } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CustomButton({title, containerStyles, handleClick, btnType, textStyles,rightIcon, isDisabled, destination} : CustomButtonProps) {
    const router = useRouter();

    return (
        <button
        disabled={false} type={btnType || "button"} className={`custom-btn ${containerStyles}`} onClick={(e) => {e.stopPropagation(); router.push(`${destination}`)}}>
            <span className={`flex-1 ${textStyles}`}>{title}</span>
            {rightIcon && (
                <div className="relative w-6 h-6">
                    <Image src={rightIcon} alt="right icon" fill className="object-contain"/>
                </div>
            )}
        </button>
    );
};
