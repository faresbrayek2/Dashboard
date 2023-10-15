import React from "react";
import {
  HomeIcon,
  ChartBarIcon,
  ChartBarSquareIcon,
  TrophyIcon,
  TableCellsIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";

const MultipleCards: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="md:min-w-[700px] mt-3 grid grid-cols-2 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3  3xl:grid-cols-6">
          <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
            <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
              <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                <span className="flex items-center text-brand-500 dark:text-white">
                  <ChartBarIcon className="h-6 w-6" />
                </span>
              </div>
            </div>
            <div className="h-50 ml-4 flex w-auto flex-col justify-center">
              <p className="font-dm text-sm font-medium text-gray-600">
                Earnings
              </p>
              <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                $340.5
              </h4>
            </div>
          </div>
          <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
            <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
              <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                <span className="flex items-center text-brand-500 dark:text-white">
                  <ShoppingBagIcon className="h-6 w-6" />
                </span>
              </div>
            </div>
            <div className="h-50 ml-4 flex w-auto flex-col justify-center">
              <p className="font-dm text-sm font-medium text-gray-600">
                Spend this month
              </p>
              <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                $642.39
              </h4>
            </div>
          </div>
          <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
            <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
              <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                <span className="flex items-center text-brand-500 dark:text-white">
                  <ChartBarSquareIcon className="h-6 w-6" />
                </span>
              </div>
            </div>
            <div className="h-50 ml-4 flex w-auto flex-col justify-center">
              <p className="font-dm text-sm font-medium text-gray-600">Sales</p>
              <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                $574.34
              </h4>
            </div>
          </div>
          <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
            <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
              <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                <span className="flex items-center text-brand-500 dark:text-white">
                  <TrophyIcon className="h-6 w-6" />
                </span>
              </div>
            </div>
            <div className="h-50 ml-4 flex w-auto flex-col justify-center">
              <p className="font-dm text-sm font-medium text-gray-600">
                Your Balance
              </p>
              <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                $1,000
              </h4>
            </div>
          </div>
          <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
            <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
              <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                <span className="flex items-center text-brand-500 dark:text-white">
                  <TableCellsIcon className="h-6 w-6" />
                </span>
              </div>
            </div>
            <div className="h-50 ml-4 flex w-auto flex-col justify-center">
              <p className="font-dm text-sm font-medium text-gray-600">
                New Tasks
              </p>
              <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                145
              </h4>
            </div>
          </div>
          <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
            <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
              <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                <span className="flex items-center text-brand-500 dark:text-white">
                  <HomeIcon className="h-6 w-6" />
                </span>
              </div>
            </div>
            <div className="h-50 ml-4 flex w-auto flex-col justify-center">
              <p className="font-dm text-sm font-medium text-gray-600">
                Total Projects
              </p>
              <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                $2433
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultipleCards;
