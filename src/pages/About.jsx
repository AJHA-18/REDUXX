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
            <h2>This is About Page </h2>
            <p>hlw hlw hlw</p>
            <button onClick={handleClick}>Increment by 1</button>
        </>
    )
}
