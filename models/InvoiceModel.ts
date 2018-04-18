import { Model, Schema } from "mongoose";

import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema({

});
const InvoceModel = mongoose.model('InvoceModel', invoiceSchema);
export default InvoceModel;