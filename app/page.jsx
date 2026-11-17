"use client";
import { useMemo, useState } from "react";
import { ShoppingBag, Search, Plus, Minus, Trash2, X, Sparkles, ArrowRight, Check } from "lucide-react";

const catalog = [
  {id:1,name:"Lotion & body…",price:220,category:"Body Care",emoji:"🧴",tone:"rose",image:"/products/inuka-body-mist-premium.webp"},
  {id:2,name:"Body scrub",price:150,category:"Body Care",emoji:"🧼",tone:"peach"},
  {id:3,name:"Matte lipstick",price:125,category:"Beauty",emoji:"💄",tone:"rose",image:"/products/inuka-lipsticks-premium.webp"},
  {id:4,name:"Inuka Signature…",price:450,category:"Beauty",emoji:"🌸",tone:"lavender",image:"/products/inuka-signature-premium.webp"},
  {id:5,name:"Royal Blue tea",price:350,category:"Herbal Products",emoji:"🍵",tone:"sage",image:"/products/royal-blue-tea-premium.webp"},
  {id:6,name:"Herbal instant t…",price:370,category:"Herbal Products",emoji:"🍵",tone:"sage"},
  {id:7,name:"Pure hidrolised…",price:300,category:"Body Care",emoji:"🧴",tone:"peach",image:"/products/hydrolysed-collagen.webp"},
  {id:8,name:"Butt and curve… Combo",price:500,category:"Body Care",emoji:"🧴",tone:"rose",image:"/products/butt-curve-combo.webp"},
  {id:9,name:"Butt and curve…",price:300,category:"Body Care",emoji:"🧴",tone:"rose"},
  {id:10,name:"Mkhaba fast co…",price:200,category:"Herbal Products",emoji:"🌿",tone:"sage"},
  {id:11,name:"Brightening / Fir…",price:130,category:"Body Care",emoji:"✨",tone:"peach"},
  {id:12,name:"Papaya and tur…",price:150,category:"Body Care",emoji:"🧼",tone:"peach",image:"/products/papaya-turmeric-premium.webp"},
  {id:13,name:"King Bloom juice",price:150,category:"Herbal Products",emoji:"🧃",tone:"sage",image:"/products/king-bloom-premium.webp"},
  {id:14,name:"Lady bloom juice — Pineapple",price:100,category:"Herbal Products",emoji:"🧃",tone:"sage"},
  {id:15,name:"Lady bloom juice — Hibiscus",price:100,category:"Herbal Products",emoji:"🧃",tone:"sage",image:"/products/lady-bloom-premium.webp"},
  {id:16,name:"Crave block",price:300,category:"Herbal Products",emoji:"🌿",tone:"sage"},
  {id:17,name:"B drops",price:450,category:"Herbal Products",emoji:"💧",tone:"sage"},
  {id:18,name:"Hair growth co…",price:120,category:"Hair Care",emoji:"🪮",tone:"lavender"},
  {id:19,name:"Shrink AM/Shri…",price:400,category:"Herbal Products",emoji:"🍵",tone:"sage"},
  {id:20,name:"Women secret",price:50,category:"Herbal Products",emoji:"🌿",tone:"sage"},
  {id:21,name:"Cellulite combo",price:580,category:"Body Care",emoji:"🧴",tone:"rose"},
  {id:22,name:"African black s…",price:180,category:"Body Care",emoji:"🧼",tone:"peach"},
  {id:23,name:"12 pack King bl…",price:790,category:"Herbal Products",emoji:"🧃",tone:"sage"},
  {id:24,name:"Lady bloom jui… (pack)",price:590,category:"Herbal Products",emoji:"🧃",tone:"sage"}
];
const categories=["All","Beauty","Body Care","Herbal Products","Hair Care"];
const money = amount => new Intl.NumberFormat("en-ZA",{style:"currency",currency:"ZAR",maximumFractionDigits:2}).format(amount);
export default function Home(){
 const [category,setCategory]=useState("All"),[search,setSearch]=useState(""),[cart,setCart]=useState({}),[drawer,setDrawer]=useState(false),[customer,setCustomer]=useState({name:"",contact:"",address:""}),[submitted,setSubmitted]=useState(false);
 const products=useMemo(()=>catalog.filter(p=>(category==="All"||p.category===category)&&p.name.toLowerCase().includes(search.toLowerCase())),[category,search]);
 const count=Object.values(cart).reduce((a,b)=>a+b,0);
 const lines=catalog.filter(p=>cart[p.id]).map(p=>({...p,quantity:cart[p.id]}));
 const subtotal=lines.reduce((sum,p)=>sum+p.price*p.quantity,0);
 const orderText="Hello Enhle! I would like to order from Enhle's Beauty Corner:\\n\\n"+lines.map(p=>p.quantity+" × "+p.name+" @ "+money(p.price)+" = "+money(p.price*p.quantity)).join("\\n")+"\\n\\nSubtotal: "+money(subtotal)+"\\nDelivery: To be confirmed\\n\\nName: "+customer.name+"\\nContact: "+customer.contact+"\\nDelivery area: "+(customer.address||"To be confirmed")+"\\n\\nPlease confirm stock, delivery costs and final payment instructions. I will send proof of payment after you confirm the order.";
 function change(id,delta){setCart(prev=>{const next={...prev};next[id]=Math.max(0,(next[id]||0)+delta);if(!next[id])delete next[id];return next;});setSubmitted(false)}
 function checkoutWhatsApp(){const url="https://wa.me/27664698360?text="+encodeURIComponent(orderText);window.open(url,"_blank","noopener,noreferrer");setSubmitted(true)}
 return <div>
 <div className="announcement">Welcome to Enhle's Beauty Corner • Beauty, body care and more</div>
 <header className="header"><a className="brand" href="#">Enhle's <span>Beauty Corner</span></a><nav><a href="#shop">Shop</a><a href="#about">About us</a><a href="#contact">Contact</a></nav><button className="cart-button" onClick={()=>setDrawer(true)} aria-label={"Open basket with "+count+" items"}><ShoppingBag size={21}/> <span>{count}</span></button></header>
 <main><section className="hero"><div className="hero-copy"><div className="eyebrow"><Sparkles size={16}/> BEAUTY • BODY CARE • HERBAL PRODUCTS</div><h1>Beauty that feels<br/><em>beautifully yours.</em></h1><p>Shop beauty, body care, hair care and herbal products. Order directly with Enhle on WhatsApp.</p><a className="primary" href="#shop">Explore our collections <ArrowRight size={18}/></a><div className="hero-note">Based in South Africa • WhatsApp checkout</div></div><div className="hero-art premium-hero"><div className="hero-photo hero-photo-main"><img src="/products/inuka-signature-his-hers.webp" alt="INUKA Signature fragrance collection"/></div><div className="hero-photo hero-photo-side"><img src="/products/papaya-turmeric.webp" alt="Papaya and turmeric body polish"/></div><div className="art-label">Discover your signature glow.</div></div></section>
 <section className="intro" id="shop"><span className="eyebrow">DISCOVER YOUR FAVOURITES</span><h2>Shop our collections</h2><p>Browse real catalogue prices, add items to your basket and send your order to Enhle on WhatsApp. Stock and delivery charges are confirmed before payment.</p></section>
 <div className="shop-controls"><div className="filters">{categories.map(c=><button key={c} className={category===c?"selected":""} onClick={()=>setCategory(c)}>{c}</button>)}</div><label className="search"><Search size={18}/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search products..." aria-label="Search products"/></label></div>
 <section className="products">{products.map(p=><article className="product" key={p.id}><div className={"product-image "+p.tone}>{p.image?<img src={p.image} alt={p.name} loading="lazy" className="catalog-photo"/>:<span role="img" aria-label={p.name}>{p.emoji}</span>}</div><div className="product-info"><span className="category">{p.category}</span><h3>{p.name}</h3><p className="price">{money(p.price)}</p><p>Availability confirmed on WhatsApp.</p><button onClick={()=>{change(p.id,1);setDrawer(true)}}>Add to basket <Plus size={17}/></button></div></article>)}{!products.length&&<p className="empty">No matching products. Try another search.</p>}</section>
 <section className="about" id="about"><div><span className="eyebrow">A LITTLE ABOUT US</span><h2>Made for your everyday glow.</h2></div><p>Enhle's Beauty Corner brings together beauty, natural herbal, clothing and home collections. We are preparing our full online catalogue. For now, browse our collections and send us an enquiry to confirm products, prices and delivery.</p></section>
 <section className="contact" id="contact"><h2>Have something in mind?</h2><p>Add products to your basket, review the subtotal, then send your order through WhatsApp. Enhle will confirm availability and delivery before payment.</p><button className="primary" onClick={()=>setDrawer(true)}>Open shopping basket <ArrowRight size={18}/></button></section></main>
 <footer><strong>Enhle's Beauty Corner</strong><span>Beauty • Body care • Hair care • Herbal products</span><small>© {new Date().getFullYear()} Enhle's Beauty Corner. All rights reserved.</small></footer>
 {drawer&&<div className="overlay" onMouseDown={e=>{if(e.target===e.currentTarget)setDrawer(false)}}><aside className="drawer" role="dialog" aria-modal="true" aria-label="Enquiry basket"><div className="drawer-head"><div><span className="eyebrow">YOUR SELECTIONS</span><h2>Shopping basket ({count})</h2></div><button className="icon-btn" onClick={()=>setDrawer(false)} aria-label="Close basket"><X/></button></div>{count===0?<div className="basket-empty"><ShoppingBag size={42}/><h3>Your basket is empty</h3><p>Browse the collections to add your favourites.</p><button className="primary" onClick={()=>setDrawer(false)}>Continue browsing</button></div>:<><div className="basket-items">{catalog.filter(p=>cart[p.id]).map(p=><div className="basket-line" key={p.id}><span className={"mini-image "+p.tone}>{p.image?<img src={p.image} alt="" className="basket-photo"/>:p.emoji}</span><div className="basket-detail"><strong>{p.name}</strong><small>{money(p.price)} each · {money(p.price*cart[p.id])}</small><div className="qty"><button aria-label={"Remove one "+p.name} onClick={()=>change(p.id,-1)}><Minus size={14}/></button><span>{cart[p.id]}</span><button aria-label={"Add one "+p.name} onClick={()=>change(p.id,1)}><Plus size={14}/></button></div></div><button className="icon-btn" aria-label={"Remove "+p.name} onClick={()=>setCart(prev=>{const n={...prev};delete n[p.id];return n})}><Trash2 size={17}/></button></div>)}</div><div className="enquiry-form"><h3>Checkout on WhatsApp</h3><p><strong>Subtotal: {money(subtotal)}</strong> (delivery excluded). Enhle confirms stock, delivery and payment details in WhatsApp. Never share PINs or OTPs.</p><label>Your name<input value={customer.name} onChange={e=>setCustomer({...customer,name:e.target.value})} placeholder="Full name"/></label><label>Contact details<input value={customer.contact} onChange={e=>setCustomer({...customer,contact:e.target.value})} placeholder="Phone or email"/></label><label>Delivery area<input value={customer.address} onChange={e=>setCustomer({...customer,address:e.target.value})} placeholder="City / suburb"/></label><button className="primary wide" disabled={!customer.name.trim()||!customer.contact.trim()} onClick={checkoutWhatsApp}>Checkout on WhatsApp <ArrowRight size={18}/></button>{submitted&&<p className="success">WhatsApp opened with your order. Press Send there to submit it. No payment is collected on this site.</p>}</div></>}</aside></div>}
 </div>
}