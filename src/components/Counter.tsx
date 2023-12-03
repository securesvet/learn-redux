import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/state/store";
import {decrement, increment} from "@/state/counter/counterSlice";

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);

    const dispatch = useDispatch();


    return (
        <div>
            <h2 className="text-5xl">{count}</h2>
            <button onClick={() => dispatch(increment())} className="bg-white border-2 border-gray-500 p-2 text-black hover:opacity-[0.9] active:opacity-[0.8]">
                Increment
            </button>
            <button onClick={() => dispatch(decrement())} className="bg-white border-2 border-gray-500 p-2 text-black hover:opacity-[0.9] active:opacity-[0.8]">
                Decrement
            </button>
        </div>
    );
};

export default Counter;