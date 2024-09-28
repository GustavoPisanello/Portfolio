import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function MobileMenuItem({ data, isOpen }) {
    const [visibleLetters, setVisibleLetters] = useState([]);

    useEffect(() => {
        if (isOpen) {
            setVisibleLetters([]);
            data.forEach((group, groupIndex) => {
                group.name.split("").forEach((letter, index) => {
                    setTimeout(() => {
                        setVisibleLetters(prev => [...prev, { groupIndex, letter, index }]);
                    }, index * 150); 
                });
            });
        } else {
            setVisibleLetters([]);
        }
    }, [isOpen, data]);

    return (
        <>
            {data.map((group, groupIndex) => (
                <div key={groupIndex}>
                    {group.name.split("").map((letter, index) => (
                        <Link
                            key={index}
                            className={`font-[JockeyOne] text-primary_color flex flex-col items-center transition-opacity duration-500 ${
                                visibleLetters.some(
                                    (visible) =>
                                        visible.groupIndex === groupIndex &&
                                        visible.index === index
                                )
                                    ? 'opacity-100'
                                    : 'opacity-0'
                            }`}
                            to={group.link}
                        >
                            <p>{letter}</p>
                        </Link>
                    ))}
                </div>
            ))}
        </>
    );
}
