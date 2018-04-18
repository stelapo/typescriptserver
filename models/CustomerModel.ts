import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    code: { type: String, unique: true, trim: true },
    description: String,
    address: String,
    companyName: String,
    vat: { type: String, unique: true, trim: true },
    fiscalCode: { type: String, unique: true, trim: true }
}, {
        timestamps: true
    });

customerSchema.set('toJSON', {
    transform: function (doc: any, ret: any, options: any) {
        if (ret.fiscalCode === ret.vat) { delete ret.fiscalCode; }
        return ret;
    }
});

const CustomerModel = mongoose.model('CustomerModel', customerSchema);
export default CustomerModel;