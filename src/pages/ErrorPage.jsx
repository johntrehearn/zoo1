import { useRouteError } from "react-router-dom"

function ErrorPage() {
    const error = useRouteError();
    return (
        <>
        <h1>There is has been an error. Please resart the world and the blue screen should vanish</h1>
        <p>{error.statusText || error.message}</p>
        </>
    );
}

export default ErrorPage;