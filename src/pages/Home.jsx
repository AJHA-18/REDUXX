import { useSelector } from "react-redux";
export default function Home() {
    const globalState = useSelector((store) => store.counter)
    return (
        <>
            <h1>Home Page</h1>
            <h2>home</h2>
            <h2>Global State: {globalState.count}</h2>
        </>
    )
}
