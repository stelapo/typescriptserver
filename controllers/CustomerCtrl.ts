import BaseCtrl from "./BaseCtrl";
import { Model } from "mongoose";
import CustomerModel from "../models/CustomerModel";

export default class CustomerCtrl extends BaseCtrl {
    model = CustomerModel;
}