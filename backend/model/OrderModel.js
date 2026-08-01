import mongoose from "mongoose";

import OrdersSchema  from '../schemas/OrdersSchema.js'

const Order = mongoose.model("Order",OrdersSchema);

export default Order;
