import { useDispatch } from "react-redux";
import { increment, decrement } from "../redux/counterSlice";

export default function About() {
    const dispatch = useDispatch();
    function handleClick(){
        dispatch(increment())
    }
    return (
        <>
            <h1>About Page</h1>
            <button onClick={handleClick}>Increment by 1</button>
        </>
    )
}