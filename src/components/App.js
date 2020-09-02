import React, { useCallback, useReducer } from 'react';

import CollegeContainer from './collegeContainer';
import * as jsonData from '../assets/colleges.json';
import './App.css';

export default function App() {
    const initialState = {
        collegeData: [],
        currentLength: 4
    }

    const [state, dispatch] = useReducer((state, action) => {
        if (action.type === "addData") {
            return {...state, collegeData: jsonData.colleges.slice(0, state.collegeData.length + 4)};
        }
        return {...state};
    }, initialState);
 
    
    const setData = useCallback(() => {
        dispatch({type: "addData", payload: state.currentLength+2})
    }, [state.currentLength])
    
    const scroller = useCallback((event) => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        if (jsonData.colleges.length > state.currentLength+4) {
            setData();
        }
        
    }, [state.currentLength, setData])

    React.useEffect(() => {
        dispatch({ type: "addData", payload: 4 });
        window.addEventListener('scroll', scroller);
        return () => window.removeEventListener('scroll', scroller);   
            
    }, [scroller]);

    return (
        <div className="container">
            <h1>Colleges in North India</h1>
            <div className="colleges-container">
                <CollegeContainer
                    collegeData={state.collegeData} 
                />
            </div>
        </div>
    )
}