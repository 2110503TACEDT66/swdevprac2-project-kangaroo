// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
// import { getServerSession } from "next-auth";
// import getUserProfile from "@/libs/getUserProfile";

export default function UserPage() {
    // const session = await getServerSession(authOptions)

    // if (!session || !session.user.token) return null

    // const userProfile = await getUserProfile(session.user.token)
    // var createdAt = new Date(userProfile.data.createdAt)

    return (
        <div className="w-1/2 mt-24 bg-slate-100 m-5 p-5 rounded-lg flex flex-col justify-center">
            <div className="text-xl text-center font-bold capitalize m-5">Alice Wonderland</div>
            <table className="text-lg table-auto border-separate border-spacing-2 mt-5">
                <tbody>
                    <tr><td>Email</td><td className="text-right">alice@gmail.com</td></tr>
                    <tr><td>Phone</td><td className="text-right">0812345678</td></tr>
                    <tr><td>Member Since</td><td className="text-right">2024</td></tr>
                </tbody>
            </table>
        </div>
    )
};
