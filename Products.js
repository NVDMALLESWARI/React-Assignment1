import Product from "./Product"
function Products(){
    let products=[
      {id:1,name:"LG", price:20000, url:"https://th.bing.com/th/id/OIP.Ao8YcK6tWt8d8JVTA1J91AHaHa?rs=1&pid=ImgDetMain"},
      {id:2,name:"Redmi tv" ,price:32000, url:"https://www.bhphotovideo.com/images/images2500x2500/lg_24lf452b_24_720p_led_hdtv_1248350.jpg"}
    ]
    return(
    <div className='products'>
        {
          products.map((product)=>{
            return(
              <Product name={product.name} price={product.price} url={product.url} key={product.id}/>
            )
          })
        }
    </div>
    )
}

export default Products;