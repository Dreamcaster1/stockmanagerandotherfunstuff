
function P({result}) {

    return<>
    {result.map(item => {
            return<p>{item}</p>
        })}
    </>
}
export default P