import React from "react";

export default function Layout({children}:React.PropsWithChildren<{}>){
    return (
        <div className=" h-screen flex flex-col items-center justify-center">
            <div className=" shadow-2xl w-[24rem] md:w-[46rem] p-8 md:p-10  ">
                {children}
            </div>
        </div>
    )
}