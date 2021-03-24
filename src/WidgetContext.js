import React, { useState, createContext } from 'react';

export const WidgetContext = createContext();

export const WidgetProvider = props => {
    const [widgets, setWidgets] = useState(
        [
            {
                name: 'Sam',
                language: 'English'
            },
            {
                name: 'Svetlana',
                language: 'Russian'
            },
            {
                name: 'Xavier',
                language: 'French'
            }
        ]
    )
    return (
        <WidgetContext.Provider value={{widgets: widgets, update: setWidgets}}>
            {props.children}
        </WidgetContext.Provider>
    );
}
