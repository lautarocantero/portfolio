import type { handleNextInterface, handlePrevInterface } from "../../typings/types";


export const handlePrev = ({setImageNumber, gallery_urls} : handlePrevInterface ) => {
    setImageNumber((prev: number) => (prev === 0 ? gallery_urls.length - 1 : prev - 1));
};


export const handleNext = ({setImageNumber, gallery_urls} : handleNextInterface ) => {
    setImageNumber((prev: number) => (prev === gallery_urls.length - 1 ? 0 : prev + 1));
};