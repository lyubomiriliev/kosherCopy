import React, { useState } from 'react';
import FloorPlan from '../components/FloorPlan';
import ApartmentList from '../components/ApartmentList';

const BuildingPage = () => {
    const [building, setBuilding] = useState('4A');
    const [entrance, setEntrance] = useState('A');
    const [entranceB, setEntranceB] = useState('Б');
    const [floor, setFloor] = useState(2);

    return (
        <div className="w-full bg-white flex justify-around mx-auto p-4">
            <div className="flex w-2/3 justify-between items-center mt-4">
                <ApartmentList floor={floor} entrance={entrance} building={building} entranceB={entranceB} />
            </div>
        </div>
    );
};

export default BuildingPage;
