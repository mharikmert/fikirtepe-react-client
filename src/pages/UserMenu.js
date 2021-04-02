const UserMenu = props => {
    console.log(props);
    return (
        <div>
            User role: {props.location.state.response.data.role}
        </div>
    )
}

export default UserMenu
