/* eslint-disable array-callback-return */
/* eslint-disable no-lone-blocks */
function ListItem({userList}) {
    const {id, title, completed} = userList
    return (
        <ul key={id}>
            <li style={completed === true ? {textDecorationLine: 'line-through'} : {}}>{title}</li>
        </ul>
    )
}

export default ListItem