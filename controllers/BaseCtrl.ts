import { Request, Response } from "express";
import * as mongoose from "mongoose";

abstract class BaseCtrl {
    abstract model: mongoose.Model<mongoose.Document>;

    // Get All
    getAll = (req: Request, resp: Response) => {
        this.model.find({}, (err: Error, docs: mongoose.Document[]) => {
            if (err) {
                return console.log(err);
            }
            resp.status(200).json(docs);
        });
    }

    // Get By Id
    get = (req: Request, resp: Response) => {
        this.model.findOne({ _id: req.params.id }, (err: Error, doc: mongoose.Document) => {
            if (err) {
                return console.log(err);
            }
            resp.status(200).json(doc);
        });
    }

    // Count All
    count = (req: Request, resp: Response) => {
        this.model.count({}, (err: Error, count: number) => {
            if (err) {
                return console.log(err);
            }
            resp.status(200).json(count);
        });
    }

    // Insert
    insert = (req: Request, resp: Response) => {
        let obj: mongoose.Document = new this.model(req.body);
        obj.save((error: any, doc: any) => {
            if (error && error.code === 11000) {
                resp.status(400);
            }
            if (error) {
                return console.log(error);
            }
            resp.status(200).json(doc);
        });
    }

    // Update
    update = (req: Request, resp: Response) => {
        this.model.findOneAndUpdate({ _id: req.params.id }, req.body, (err: any, doc: any) => {
            if (err) {
                console.log(err);
            }
            resp.status(200).json(doc);
        });
    }

    // Delete
    delete = (req: Request, resp: Response) => {
        this.model.findOneAndRemove({ _id: req.params.id }, (err: any) => {
            if (err) {
                console.log(err);
            }
            resp.sendStatus(200);
        });
    }
}

export default BaseCtrl;