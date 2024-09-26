import React, { useState } from 'react';
import a1 from '../assets/plans/a1.png';
import a2 from '../assets/plans/a2.png';
import a3 from '../assets/plans/a3.png';
import a4 from '../assets/plans/a4.png';
import a5 from '../assets/plans/a5.png';
import a7 from '../assets/plans/a7.png';
import a09 from '../assets/plans/a09.png';
import a11 from '../assets/plans/a11.png';
import a12 from '../assets/plans/a12.png';
import a13 from '../assets/plans/a13.png';
import a15 from '../assets/plans/a15.png';
import a16 from '../assets/plans/a16.png';
import a17 from '../assets/plans/a17.png';
import a19 from '../assets/plans/a19.png';

const images = {
    A1: a1,
    A2: a2,
    A3: a3,
    A4: a4,
    A5: a5,
    A7: a7,
    A09: a09,
    A11: a11,
    A12: a12,
    A13: a13,
    A15: a15,
    A16: a16,
    A17: a17,
    A19: a19,
};

const ApartmentList = ({ floor, entrance, building, entranceB }) => {
    const [hoveredApartment, setHoveredApartment] = useState("A1");

    const apartments = [
        { id: 'A1', size: '181.98 m²', floor: 2, direction: 'Юг/Север' },
        { id: 'A2', size: '109.27 m²', floor: 2, direction: 'Югоизток' },
        { id: 'A3', size: '162.11 m²', floor: 2, direction: 'Югозапад' },
        { id: 'A4', size: '99.58 m²', floor: 2, direction: 'Северозапад' },
        { id: 'A5', size: '190.83 m²', floor: 3, direction: 'Юг/Север' },
        { id: 'A7', size: '161.91 m²', floor: 3, direction: 'Югозапад' },
        { id: 'A09', size: '186.75 m²', floor: 4, direction: 'Юг/Север' },
        { id: 'A11', size: '159.21 m²', floor: 4, direction: 'Югозапад' },
        { id: 'A12', size: '96.51 m²', floor: 4, direction: 'Северозапад' },
        { id: 'A13', size: '191.08 m²', floor: 5, direction: 'Юг/Север' },
        { id: 'A15', size: '158.51 m²', floor: 5, direction: 'Югозапад' },
        { id: 'A16', size: '96.37 m²', floor: 5, direction: 'Северозапад' },
        { id: 'A17', size: '187.70 m²', floor: 6, direction: 'Юг/Север' },
        { id: 'A19', size: '158.16 m²', floor: 6, direction: 'Югозапад' },
    ];

    return (
        <div className="apartment-list flex  w-full">
            {/* Left section to show the image */}
            <div className="image-container w-full">
                {hoveredApartment && (
                    <img src={images[hoveredApartment]} alt={`Plan of ${hoveredApartment}`} className="w-[100%] h-[90%] object-fit scale-90" />
                )}
            </div>

            {/* Right section to display apartment details */}
            <div className="details-container w-1/2">
                <div className='flex text-xl font-bold space-x-4 mb-4'>
                    <span>Етап: {floor} /</span>
                    <span>Сграда:</span>
                    <span className='font-bold text-white bg-black px-2 py-1'>{building}</span>
                    <span>Вход: {entrance} / {entranceB}</span>
                </div>
                <ul>
                    {apartments.map((apartment) => (
                        <li
                            key={apartment.id}
                            className="flex justify-between items-center p-2 border-b hover:bg-gray-200"
                            onMouseEnter={() => setHoveredApartment(apartment.id)}
                        >
                            <span>{apartment.id}</span>
                            <span>{apartment.size}</span>
                            <span>ет. {apartment.floor}</span>
                            <span>{apartment.direction}</span>
                            <button className="border p-2 rounded-lg">Преглед</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ApartmentList;
