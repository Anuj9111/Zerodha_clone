import mongoose from "mongoose";

import HoldingSchema  from '../schemas/HoldingsSchema.js'

const Holding = mongoose.model("Holding",HoldingSchema);

export default Holding;

