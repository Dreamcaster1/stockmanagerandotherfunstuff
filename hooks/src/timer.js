import Usetimer from "./usetimer"

function Timer() {
    let {seconds, bool, changebool, reset} = Usetimer()

    function func1(event) {
        changebool(!bool)
        
    }
    return<>
    <p style={{
        marginLeft: "20px",
    }}>{seconds}</p>
    <button onClick={(event) => func1(event)}>{bool == true ? "Stop" : "Continue"}</button>
    <button onClick={() => reset()}>Reset</button>
    </>
}
export default Timer