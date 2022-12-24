import {NextFunction, Request, Response} from "express";

const postModel = require('../models/postModel');

exports.createPost = (req: Request, res:Response, next:NextFunction) => {

    const post = new postModel({...req.body});
    post.save().then(() => {
        res.status(201).json({
            message: 'Post créé'
        })
    }).catch((error:any) => {
        res.status(400).json({error})
    })
}

exports.getAllPosts = (req: Request, res:Response, next:NextFunction) => {
    postModel.find()
        .then((posts:  [typeof postModel]) => res.status(200).json(posts))
        .catch((error:any) => res.status(400).json({ error }));
}

exports.getOnePost = (req: Request, res:Response, next:NextFunction) => {
    postModel.findOne({ _id: req.params.id })
        .then((post:typeof postModel) => res.status(200).json(post))
        .catch((error:any) => res.status(404).json({ error }));
}

exports.updatePost = (req: Request, res:Response, next:NextFunction) => {
    postModel.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Post modifié'}))
        .catch((error:any) => res.status(400).json({ error }));
}

exports.deletePost = (req: Request, res:Response, next:NextFunction) => {
    postModel.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Post supprimée'}))
        .catch((error:any) => res.status(400).json({ error }));
}