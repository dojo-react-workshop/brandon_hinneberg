    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         name: 'Hank'
    //     };
    // }

    // This is the same thing as above
    state = {
        name: 'Hank'
    }
    changeName = () => {
        this.setState({
            name: 'Dan'
        })
    }