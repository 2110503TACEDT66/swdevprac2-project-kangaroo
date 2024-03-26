
import getCar from "@/libs/getCar"

export default async function CardDetailPage ( {params} : { params: { cid: string}} ) {

    const CarDetail = await getCar(params.cid)

    return(
        <main className="text-center p-5">
            <h1 className="text-lg font-medium">Car ID {CarDetail.data.id}</h1>
                 <div className="flex flex-row my-5">
               
                <div className="text-md mx-5 text-left">{CarDetail.data.Brand}
                <div className="text-md mx-5">Model: {CarDetail.data.Model}</div>
                <div className="text-md mx-5">Tel: {CarDetail.data.tel}</div></div>
            </div> 
        </main>
    )
}
