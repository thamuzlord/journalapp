import React from 'react';

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div className="journal__entry-picture" style={{ backgroundSize : 'cover', backgroundImage: 'url(https://s26162.pcdn.co/wp-content/uploads/2018/06/milky-way.jpg)'}}>

            </div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    titulo
                </p>
                <p className="journal__entry-content">
                    szdafdsfaczxxzvvz
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
