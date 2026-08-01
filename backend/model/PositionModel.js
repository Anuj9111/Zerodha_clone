import mongoose from "mongoose";

import PositionsSchema  from '../schemas/PositionsSchema.js'

const Position = mongoose.model("Position",PositionsSchema);

export default Position;
