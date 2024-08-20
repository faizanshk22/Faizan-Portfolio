import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import './stats.scss';

const stats = [
    {
        num: 3,
        text: "Years of experience",
    },
    {
        num: 5,
        text: "Projects Completed",
    },
    {
        num: 9,
        text: "Technologies mastered",
    },
    {
        num: 50,
        text: "Code Commits",
    },
];

function Stats() {
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        setStartAnimation(true);
    }, []);

    return (
        <div className='stats-container'>
            <div className='stats-grid'>
                {stats.map((item, index) => (
                    <div 
                        className='stat-item' 
                        key={index}
                    >
                        {startAnimation && (
                            <CountUp 
                                end={item.num} 
                                duration={5} 
                                delay={2} 
                                className='stat-number' 
                            />
                        )}
                        <p className={`stat-text ${item.text.length < 15 ? "small-text" : "large-text"}`}>
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Stats;
