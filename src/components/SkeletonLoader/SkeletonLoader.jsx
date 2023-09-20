import React from 'react';
import Skeleton from '@mui/material/Skeleton';

const SkeletonLoader = ({ numberOfItems }) => {
  const skeletonData = Array.from({ length: numberOfItems }, (_, index) => index + 1);

  return (
    <div className="grid grid-cols-4 gap-4">
      {skeletonData.map((item) => (
        <div key={item} className="bg-white shadow-md rounded-md p-4">
          <Skeleton variant="rectangular" width={210} height={118} animation="wave" />
          <div className="pt-2">
            <Skeleton animation="wave" />
            <Skeleton animation="wave" width="80%" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
