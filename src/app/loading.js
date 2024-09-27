import { CircleLoader } from "react-spinners";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (

        <div className="flex justify-center items-center min-h-screen">
            <CircleLoader />
        </div>
    )
}