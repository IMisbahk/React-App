import PropTypes from 'prop-types'
function Student(props)
{
    const student = {
        fontFamily: "Arial",
        border:"1px, solid, black",
        padding: "10px",
        margin:"3px",
        borderRadius: "5px"
    }
    return(
        <div style={student}>
            <p>Name: {props.name} </p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent?"Yes":"No"}</p>
        </div>
    )
}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent:false,
}
export default Student