import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET);


//placing user prder for frontend
const placeOrder = async (req, res) => {
    const frontend_url = 'http://localhost:5173';

    try {
        const newOrder = new orderModel({
            userId: req.body.userId,
            items:  req.bodyitems,
            amount: req.body.amount,
            address: req.body.address,
        });
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId , { cartData: {}});

// to creat the stripe payment link first we have to crate line-items , where we will inser all the product data , currency , unit amount and quantity

        const line_items = req.body.items.map((item)=>({
            price_data: {
                currency: "inr",
                product_data: {
                    name: item.name,
                },
                unit_amount: item.price*100*80,
            },
            quantity: item.quantity,
        }));

        line_items.push({
            price_data:{
                currency: "inr",
                product_data:{
                    name:"Delivery Charges"
                },
                unit_amount:2*100*80,
            },
            quantity:1,
        });

        const session = await stripe.checkout.sessions.create({
            line_items: line_items,
            mode: 'payment',

// now we have ot add one successful url and one unsccessfull url in case of successful and unsccessful payment to redirect to respective urls
            success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
        });

        res.json({ success: true, session_url: session.url })

    } catch (error) {
        console.log(error);
        res.josn({ success:false , message: "Error"})
    }
}


export { placeOrder };