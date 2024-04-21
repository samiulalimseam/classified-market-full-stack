import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='container  m-auto h-96'>
            <progress className="m-auto w-full  progress progress-accent h-1"></progress>
        </div>
    );
};

export default LoadingSpinner;