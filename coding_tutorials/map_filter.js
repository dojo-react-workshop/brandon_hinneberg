class Users extends React.Component{
    render(){
        let friends = this.props.list.filter((user)=>{
            return user.friend === true
        })

        let nonFriends = this.props.list.filter((user)=>{
            return user.friend !== true
        })
        return(
            <div>
                <h1>Friends</h1>
                <ul>
                    {friends.map((user)=>{
                        return <li key={user.name}>{user.name}</li>
                    })}
                </ul>
                <h1>Non Friends</h1>
                <ul>
                    {nonFriends.map(function (user){
                        return <li key={user.name}>{user.name}</li>
                    })}
                </ul>
            </div>
        );
    }
}