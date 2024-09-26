import React from 'react';

const FloorPlan = () => {
    return (
        <div className="floor-plan bg-gray-100 p-4 rounded-lg">
            <img
                src="your-floorplan-image-url-here"
                alt="Floor Plan"
                className="object-cover w-full"
            />
        </div>
    );
};

export default FloorPlan;
