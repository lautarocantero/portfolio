import type { handleNextExperienceInterface, handlePrevExperienceInterface } from "../../typings/types";


export const handlePrev = ({ setCurrentIndex, components } : handlePrevExperienceInterface ) => {
    setCurrentIndex((prev: number) => (prev === 0 ? components.length - 1 : prev - 1));
};

export const handleNext = ({ setCurrentIndex, components } : handleNextExperienceInterface ) => {
    setCurrentIndex((prev: number) => (prev === components.length - 1 ? 0 : prev + 1));
};