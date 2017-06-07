const{history, location, addEventListener} = window;

const webRouter={
    navigateTo(path){
        history.pushState({}, null, path);
},
    path:location.pathname,
    subscribe(callback){
        addEventListener('popstate', ()=>{
            console.log('state changed');
        })
    
    }
}

export default webRouter;