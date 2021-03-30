import {videos} from "../db";

export const home = (req, res) => {
    res.render("home", { pageTitle: "Home", videos });
};

export const search = (req, res) => {
    const {query:{term : searchingBy}} = req;
    /* 위의 문장 == const searchingBy = req.query.term */
    console.log(searchingBy);
    res.render("search", {pageTitle : "Search", searchingBy : searchingBy});
};

//export const videos = (req, res) => res.render("videos");

export const upload = (req, res) => res.render("upload", {pageTitle : "Upload"});

export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle : "Detail"});

export const editVideo = (req, res) => res.render("editVideo", {pageTitle : "Edit Video"});

export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle : "Delete Video"});