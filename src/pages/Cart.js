import React, {useState, useEffect} from 'react';
import Deal from '../components/Deal';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';

const Cart = ()=>{
    const [display, setDisplay] = useState("None");
    const [error, setError] = useState("");
    const [amount, setAmount] = useState(0);
    const [cart, setCart] = useState([]);
    const [deal, setDeal] = useState([]);
    var price = 500;
    const subtotal= amount * price;

    const vat = 7.5 /100 * subtotal;
    const total= vat + subtotal;

    const handleSubmit =(e)=>{
        e.preventDefault()
    
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer ");

    var raw = JSON.stringify({
    "amount": amount})

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow'
};

fetch("https://jbuit.com/api/contact/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));}


  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(res => res.json())
    .then(res => {
            setCart(res);
    })
    .catch((error) => console.log(error));
  },[]);

    useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(res => {
            setDeal(res);
    })
    .catch((error) => console.log(error));
  }, []);
    return(
        <>
    <Header/>
    <div class="container" style={{marginTop:"20px"}}>
        <div class="row">
            
            <div class="col-md-12 col-lg-8">

                <div class="section section-cart mb-0">
                    <div class="section-title">
                        Cart
                    </div>
                    <div>
                        
                        <div class="table-responsive b-1-ddd">
                            <table class="table table-tr-lines table-cart">
                                <thead>
                                    <tr class="bg-eee">
                                        <th></th>
                                        <th class="d-none d-sm-table-cell"></th>
                                        <th class="d-none d-md-table-cell d-lg-none d-xl-table-cell"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="overflow-hidden">
                                                <Link to="/deal/0d8aa710-c3b7-4d4d-b7f0-61da7b23af9f" class="pull-left m-10 mr-15 d-none d-sm-block overflow-hidden" style={{maxWidth: "200px", maxHeight: "200px"}}>
                                                    <img src='/images/posla-admin.jpg' alt="" class="dp-contain" />
                                                </Link>
                                                <Link to="/deal/0d8aa710-c3b7-4d4d-b7f0-61da7b23af9f" class="pull-left mt-10 mr-15 d-block d-sm-none overflow-hidden" style={{maxWidth: "100px", maxHeight: "100px"}}>
                                                    <img src='/images/posla-admin.jpg' alt="" class="dp-contain" />
                                                </Link>
                                                <div class="overflow-hidden" style={{marginLeft: "10px"}}>
                                                    <Link to="/deal/0d8aa710-c3b7-4d4d-b7f0-61da7b23af9f" class="font-bold mt-10 d-inline-block hover-underline">
                                                        {cart.title}
                                                    </Link>
                                                    <div class="text-fade mt-10">
                                                        <div>
                                                            {cart.body}
                                                        </div>
                                                        <div class="mt-5">
                                                            Package: basic designs
                                                        </div>
                                                        <div class="mt-5" data-toggle="collapse" data-target="#package-details">
                                                            Package Details
                                                            <span class="fa fa-angle-down icon-333"></span>
                                                        </div>
                                                        <div id="package-details" class="collapse">
                                                            <div class="p-10 pl-15 pr-15 mt-5 b-1-ddd d-inline-block">
                                                                <ul class="list-style">
                                                                    <li>
                                                                        2-days delivery
                                                                    </li>
                                                                    <li>
                                                                        4 revisions
                                                                    </li>
                                                                    <li>
                                                                        Work & Deliver
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div class="d-block d-sm-none bt-1-ddd mt-10 pt-10">
                                                <div class="mt-10 pull-right">
                                                    $200
                                                </div>
                                                <form action="">
                                                    <div class="input-group input-group-attach mt-2" style={{width: "100px"}}>
                                                        <div class="input-group-btn b-1-ddd br-none">
                                                            <button type="button" class="bg-eee btn-md">
                                                                <span>Qty</span>
                                                            </button>
                                                        </div>
                                                        <input type="number" name="amount" id="amount" class="form-control" value={amount} onChange={(e)=>{setAmount(e.target.value)}}/>
                                                    </div>
                                                </form>
                                            </div>
                                        </td>
                                        <td class="d-none d-sm-table-cell">
                                            <div class="d-none d-sm-block d-md-none mt-10"></div>
                                            <form action="">
                                                <div class="input-group input-group-attach mt-2" style={{width: "100px"}}>
                                                    <div class="input-group-btn b-1-ddd br-none">
                                                        <button type="button" class="bg-eee btn-md">
                                                            <span>Qty</span>
                                                        </button>
                                                    </div>
                                                    <input type="number" name="amount" id="amount" class="form-control" value={amount} onChange= {(e)=> {setAmount(e.target.value)}}/>
                                                </div>
                                            </form>
                                            <div class="d-block d-md-none d-lg-block d-xl-none mt-10 text-left">
                                                Price:
                                                ${cart.id}
                                            </div>
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-none d-xl-table-cell">
                                            <div class="text-center mt-10">
                                                 ${cart.id}
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>

            </div>

            <div class="col-md-12 col-lg-4">

                <div class="sticky-top">
                    <div class="section">
                        <div class="section-title">
                            Summary
                        </div>
                        <div>

                            <div class="text-left-right text-left-right-p-10 text-left-right-60-40">
                                <div>
                                    <div>
                                        Subtotal
                                    </div>
                                    <div class="text-right">
                                      {subtotal}
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        Service fee & VAT:
                                    </div>
                                    <div class="text-right">
                                        {vat}
                                    </div>
                                </div>
                                <hr class="mt-10 mb-10 hr-2"/>
                                <div class="bg-eee">
                                    <div class="font-bold">
                                        Total:
                                    </div>
                                    <div class="font-bold text-right">
                                       {total}
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        Delivery Time:
                                    </div>
                                    <div class="text-right">
                                        1 day(s)
                                    </div>
                                </div>
                            </div>

                            <div class="mt-10 pb-10">
                                <div>
                                    <Link to="/checkout" class="btn btn-primary btn-block" onClick={handleSubmit} >
                                        Continue to Checkout
                                    </Link>
                                </div>
                                <div class="text-fade mt-15 text-center">
                                    You won't be charged yet
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="section mb-0">
                        <div class="text-center overflow-hidden" style={{height: "40px"}}>
                            <img src='/images/payment-cards.png'alt="Payment Options" class="dp-contain" />
                        </div>
                        <div class="text-fade mt-15 text-center d-none">
                            Secured Payment System
                        </div>
                    </div>
                </div>
            
            </div>

        </div>


        <hr/>


        <div class="font-18 font-bold pb-10 text-center b-none">
            Other deals you may be interested in
        </div>
        <div class="section">
            <div class="deal-list deal-list-mini row"> 
            {deal.map((item)=>(
                    <div class="col-sm-6 col-lg-3">
                        <Link to="/deal/0d8aa710-c3b7-4d4d-b7f0-61da7b23af9f" class="deal">
                            
                            <div class="deal-info-top">
                                <div>
                                    <img src='/images/deal-1.png' alt="Olawale Lawal" class="dp-cover" />
                                </div>
                                <div class="">
                                    <div>
                                        <img src='/images/user.png' alt="Olawale Lawal" class="dp-contain" />
                                    </div>
                                    <div class="text-fade font-13 ellipsis">
                                        {item.title}
                                    </div>
                                </div>
                                <div class="font-bold ellipsis-2-lines mt-5 pr-10 pl-10" style={{minHeight: "38px"}}>
                                    {item.body}
                                </div>
                            </div>

                            <div class="mt-10 mr-10 ml-10 ellipsis">
                                <div class="project-price">
                                    <span class="font-size-10 text-fade">Starting At</span>
                                    $400
                                </div>
                                <div class="item-labels">
                                    <div class="item-labels-new">
                                        New
                                    </div>
                                    <div class="item-labels-featured">
                                        Featured
                                    </div>
                                </div>
                            </div>

                            <div class="pt-5 bt-1-ddd" style={{marginTop: "-3px"}}>
                                <div class="mt-0 pl-10 item-labels item-labels-tags-all ellipsis">
                                    <div class="item-labels-prefix">
                                        Tags & Skills:
                                    </div>
                                    <div class="item-labels-tags">
                                       {item.id}
                                    </div>
                                    <div class="item-labels-tags">
                                        iOS App
                                    </div>
                                    <div class="item-labels-tags">
                                        App Store
                                    </div>
                                    <div class="item-labels-tags">
                                        Swift Language
                                    </div>
                                    <div class="item-labels-tags">
                                        Objective C
                                    </div>
                                </div>
                            </div>
                        </Link>
                </div>     
                ))}           
            </div>
        </div>
            

    </div>
    <Footer/>
        </>
        )
}
export default Cart;