import {NextFunction, Request, Response} from "express";

const userModel = require('../models/userModel');

exports.createUser = (req: Request, res:Response, next:NextFunction) => {

    const user = new userModel({...req.body});
    user.save().then(() => {
        res.status(201).json({
            message: 'Utilisateur créé'
        })
    }).catch((error:any) => {
        res.status(400).json({error})
    })
}

exports.getAllUsers = (req: Request, res:Response, next:NextFunction) => {
    userModel.find()
        .then((users:  [typeof userModel]) => res.status(200).json(users))
        .catch((error:any) => res.status(400).json({ error }));
}

exports.getOneUser = (req: Request, res:Response, next:NextFunction) => {
    userModel.findOne({ _id: req.params.id })
        .then((user:typeof userModel) => res.status(200).json(user))
        .catch((error:any) => res.status(404).json({ error }));
}

exports.updateUser = (req: Request, res:Response, next:NextFunction) => {
    userModel.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Utilisateur modifié'}))
        .catch((error:any) => res.status(400).json({ error }));
}

exports.deleteUser = (req: Request, res:Response, next:NextFunction) => {
    userModel.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Utilisateur supprimé'}))
        .catch((error:any) => res.status(400).json({ error }));
}