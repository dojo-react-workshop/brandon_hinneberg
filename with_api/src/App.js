import React from 'react';


class App extends Component {
  state={
    repos:[]
  }

  handleSearch(repos)=>{
    this.setState({
      repos
    })
  }
  render() {
    return (
     <div>
       <h1>Repo Getter</h1>
       <Search handleSearch={this.handleSearch}/>
       <RepoList repo={this.state.repos}/>
     </div>
    );
  }
}

export default App;
