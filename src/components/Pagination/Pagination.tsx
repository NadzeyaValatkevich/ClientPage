import { FC } from "react";
import style from "./Pagination.module.scss"
import { generatePageNumbers } from "../../utils/functions/generatePageNumbers";
import { useAppSelector } from "../../utils/hooks/hooks";
import { LIMIT_OBJECTS_DESKTOP, LIMIT_OBJECTS_MOBILE } from "../../utils/constants";
import classNames from "classnames";
import { useWindowWidth } from "../../utils/hooks/useWindowWidth";

type PaginationPropsType = {
    currentPage: number,
    onPageChange: (page: number) => void,
    type: "all" | "free"
}

export const Pagination: FC<PaginationPropsType> = ({ currentPage, onPageChange, type }) => {

    const countAll = useAppSelector(state => state.rentalObjects.data.count);
    const countFree = useAppSelector(state => state.filteredRentalObjects.data.count);

    const windowWidth = useWindowWidth();

    const LIMIT_OBJECTS = windowWidth <= 360 ? LIMIT_OBJECTS_MOBILE : LIMIT_OBJECTS_DESKTOP;

    const totalPages = Math.ceil((type === "all" ? countAll : countFree) / LIMIT_OBJECTS);

    const pagesDisplay = generatePageNumbers(currentPage, totalPages);

    const handlePageChange = (page: number) => {
        onPageChange(page);
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            handlePageChange(currentPage - 1)
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            handlePageChange(currentPage + 1)
        }
    };
    return <div className={style.paginationBlock}>
        <button className={style.btn} onClick={handlePrevious} disabled={currentPage === 1}>
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.71967 7.96967C6.42678 8.26256 6.42678 8.73744 6.71967 9.03033L14.2197 16.5303C14.5126 16.8232 14.9874 16.8232 15.2803 16.5303C15.5732 16.2374 15.5732 15.7626 15.2803 15.4697L8.31066 8.5L15.2803 1.53033C15.5732 1.23744 15.5732 0.762563 15.2803 0.46967C14.9874 0.176777 14.5126 0.176777 14.2197 0.46967L6.71967 7.96967Z" fill="#0F172A" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.719669 7.96967C0.426776 8.26256 0.426776 8.73744 0.719669 9.03033L8.21967 16.5303C8.51256 16.8232 8.98744 16.8232 9.28033 16.5303C9.57322 16.2374 9.57322 15.7626 9.28033 15.4697L2.31066 8.5L9.28033 1.53033C9.57322 1.23744 9.57322 0.762563 9.28033 0.46967C8.98744 0.176777 8.51256 0.176777 8.21967 0.46967L0.719669 7.96967Z" fill="#0F172A" />
            </svg>
        </button>
        {pagesDisplay.map((page: number | string, index: number) => {
            return (
                <button
                    key={index}
                    // className={`page === currentPage ?  ${style.btn} ${style.btnNumber}`}
                    className={classNames(style.btn, style.btnNumber, {
                        [style.activeBtn]: page === currentPage
                    })}
                    disabled={page === '...'}
                    onClick={() => handlePageChange(Number(page))}
                >
                    {page}
                </button>
            )
        })}
        <button className={style.btn} onClick={handleNext} disabled={currentPage === totalPages}>
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.28033 7.96967C9.57322 8.26256 9.57322 8.73744 9.28033 9.03033L1.78033 16.5303C1.48744 16.8232 1.01256 16.8232 0.71967 16.5303C0.426777 16.2374 0.426777 15.7626 0.71967 15.4697L7.68934 8.5L0.719671 1.53033C0.426777 1.23744 0.426777 0.762563 0.719671 0.46967C1.01256 0.176777 1.48744 0.176777 1.78033 0.46967L9.28033 7.96967Z" fill="#0F172A" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2803 7.96967C15.5732 8.26256 15.5732 8.73744 15.2803 9.03033L7.78033 16.5303C7.48744 16.8232 7.01256 16.8232 6.71967 16.5303C6.42678 16.2374 6.42678 15.7626 6.71967 15.4697L13.6893 8.5L6.71967 1.53033C6.42678 1.23744 6.42678 0.762563 6.71967 0.46967C7.01256 0.176777 7.48744 0.176777 7.78033 0.46967L15.2803 7.96967Z" fill="#0F172A" />
            </svg>
        </button>
    </div >
}