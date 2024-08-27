"use client"
import React, { useState, useEffect, createContext } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch("/api/accounts/homepage", {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_PRIVATE_TOKEN}`, // Bearer token burada kullanılıyor
                        'Content-Type': 'application/json',
                    },
                });
                const result = await response.json();
                setData(result.data);
                
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};
