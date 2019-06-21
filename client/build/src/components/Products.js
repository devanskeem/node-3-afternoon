import React, {Component} from 'react'
import axios from 'axios'
export default class Products extends Component{
    constructor(){
        super()
        this.state = {
            products: []
        }
    }
    getProducts = () => {
        axios.get('http://localhost:3333/api/products').then((req, res) => {
            this.setState({
                products: res.data
            })
        })
    }
    componentDidMount(){
        this.getProducts();
        console.log(this.state.products)
    }
    render(){
        return(
            <h1>{this.state.products}</h1>
        )
    }
}

// app.get('/api/products', pc.getAll)
// app.get('/api/product/:id', pc.getOne)
// app.put('/api/products/:id', pc.update)
// app.post('/api/products', pc.create)
// app.delete('/api/products/:id', pc.getAll)