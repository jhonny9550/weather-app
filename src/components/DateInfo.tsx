import clsx from 'clsx';
import React from 'react';
import { formatDate, isToday } from '../utils/date.utils';

export type DateInfoProps = {
  date?: Date,
  className?: string;
};

const DateInfo: React.FC<DateInfoProps> = ({ className, date = new Date() }) => {
  const today = isToday(date);
  return (
    <div className={clsx([
      "mx-auto text-center text-lg",
      className
    ])}>
      {today &&
        <>
          <span>Today</span>
          <span className="mx-4">•</span>
        </>
      }
      <span>{formatDate(date)}</span>
    </div>
  )
}

export default DateInfo