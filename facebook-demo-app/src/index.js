import React from 'react';
import ReactDOM from 'react-dom';


const DATA = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

class Category extends React.Component{
        render(){
        return(
            <section>
                <h1>{this.props.category}</h1>
            </section>
        );
    }

}


class ProductRow extends React.Component{
        render(){
            let productRowStyle ={
                display:'flex'
                
            }
            let productDataStyle ={
                margin:10
            }

        return(
            <section style={productRowStyle}>
                <h1 style={productDataStyle}>{this.props.data.name}</h1>
                <h1 style={productDataStyle}>{this.props.data.price}</h1>
            </section>
        );
    }

}


class ProductTable extends React.Component{


    render(){
        const productList =[]; 
        let lastCategory=null;
        this.props.data.forEach((data)=>{
            if(data.category !==lastCategory){
                productList.push(<Category category={data.category} key={data.category}/>)
            }
            productList.push(<ProductRow data={data} key={data.name}/>);
            lastCategory= data.category;
        })
        return(
            <section>
                <h1>Name      Price</h1>
                {productList}
            </section>
        );
    }
}

class Search extends React.Component{
    render(){
        return(
            <form>
            <input type='text'/><br/>
            <input id='checkBox' type='checkbox'/>
            <label>Only show products in stock</label>
            </form>
        );
    }

}


class App extends React.Component{
    render(){
        return(
            <section>
                <Search/>
                <ProductTable data={this.props.data}/>
            </section>
        );
    }

}

ReactDOM.render(<App data ={DATA}/>, document.getElementById('root'));

