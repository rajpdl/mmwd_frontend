import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./User/component/Navigation";
import Home from "./User/component/Home";
import Detail from "./User/pages/Detail";
import NoMatch from "./User/pages/NoMatch";
import ProtectRoute from "./Admin/component/ProtectRoute";
import Admin from "./Admin/pages/Admin";
import Login from "./Admin/pages/Login";
import ArticleDetail from "./Admin/pages/ArticleDetail";
import CategoryDetail from "./Admin/pages/CategoryDetail";
import UserDetail from "./Admin/pages/UserDetail";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { id: 1, name: "web design", name_in_mm: "ဝပ်ဆိုက် ဒီဇိုင်းများ" },
        { id: 2, name: "mobile design", name_in_mm: "မိုဘိုင်း ဒီဇိုင်းများ" },
        { id: 3, name: "Picture design", name_in_mm: "ဓာတ်ပုံ ဒီဇိုင်းများ" },
        {
          id: 4,
          name: "React Component Design",
          name_in_mm: "React Component ဒီဇိုင်းများ",
        },
      ],
      language: "EN",
      isAdmin: false,
      users: [
        {
          id: 1,
          username: "Raja Poudel",
          password: "mmwd",
        },
        {
          id: 2,
          username: "Rajam Poudel",
          password: "mmdesigners",
        },
      ],
      allArticles: [
        {
          id: 1,
          title: "HOW TO CREATE SLIDER?",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iusto, minima sequi libero velit ipsum omnis magni deserunt deleniti alias autem delectus.",
          description_in_mm:
            "ဤနေရာတွင် သင်လိုအပ်နေသော အရာက ဘယ်လိုလုပ်ရ မှာလည်းဆိုတာ။ သင်သည် လိုအပ်နေသော အရာက အားလုံးသော အရာအားလုံး သော အရာ အရေးကြီး တယ်ဆိုတာ ဘာထက် အရေးကြီးတယ်ဤနေရာတွင် သင်လိုအပ်နေသော အရာက ဘယ်လိုလုပ်ရ မှာလည်းဆိုတာ။ သင်သည် လိုအပ်နေသော အရာက အားလုံးသော အရာအားလုံး သော အရာ အရေးကြီး တယ်ဆိုတာ ဘာထက် အရေးကြီးတယ်။",
          code:
            "<style>.conatiner{margin:0; padding: 0;}</style><div className='container'><h2>Hey I am in Love</h2></div>",
          categoryId: 1,
        },
        {
          id: 2,
          title: "HOW TO CREATE SLIDER?",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iusto, minima sequi libero velit ipsum omnis magni deserunt deleniti alias autem delectus.",
          description_in_mm:
            "ဤနေရာတွင် သင်လိုအပ်နေသော အရာက ဘယ်လိုလုပ်ရ မှာလည်းဆိုတာ။ သင်သည် လိုအပ်နေသော အရာက အားလုံးသော အရာအားလုံး သော အရာ အရေးကြီး တယ်ဆိုတာ ဘာထက် အရေးကြီးတယ်ဤနေရာတွင် သင်လိုအပ်နေသော အရာက ဘယ်လိုလုပ်ရ မှာလည်းဆိုတာ။ သင်သည် လိုအပ်နေသော အရာက အားလုံးသော အရာအားလုံး သော အရာ အရေးကြီး တယ်ဆိုတာ ဘာထက် အရေးကြီးတယ်။",
          code: "<div className='container'><h2>Hey I am in Love</h2></div>",
          categoryId: 1,
        },
        {
          id: 3,
          title: "HOW TO CREATE SLIDER?",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iusto, minima sequi libero velit ipsum omnis magni deserunt deleniti alias autem delectus.",
          description_in_mm:
            "ဤနေရာတွင် သင်လိုအပ်နေသော အရာက ဘယ်လိုလုပ်ရ မှာလည်းဆိုတာ။ သင်သည် လိုအပ်နေသော အရာက အားလုံးသော အရာအားလုံး သော အရာ အရေးကြီး တယ်ဆိုတာ ဘာထက် အရေးကြီးတယ်ဤနေရာတွင် သင်လိုအပ်နေသော အရာက ဘယ်လိုလုပ်ရ မှာလည်းဆိုတာ။ သင်သည် လိုအပ်နေသော အရာက အားလုံးသော အရာအားလုံး သော အရာ အရေးကြီး တယ်ဆိုတာ ဘာထက် အရေးကြီးတယ်။",
          code: "<div className='container'><h2>Hey I am in Love</h2></div>",
          categoryId: 3,
        },
        {
          id: 4,
          title: "HOW TO CREATE SLIDER?",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iusto, minima sequi libero velit ipsum omnis magni deserunt deleniti alias autem delectus.",
          description_in_mm:
            "ဤနေရာတွင် သင်လိုအပ်နေသော အရာက ဘယ်လိုလုပ်ရ မှာလည်းဆိုတာ။ သင်သည် လိုအပ်နေသော အရာက အားလုံးသော အရာအားလုံး သော အရာ အရေးကြီး တယ်ဆိုတာ ဘာထက် အရေးကြီးတယ်ဤနေရာတွင် သင်လိုအပ်နေသော အရာက ဘယ်လိုလုပ်ရ မှာလည်းဆိုတာ။ သင်သည် လိုအပ်နေသော အရာက အားလုံးသော အရာအားလုံး သော အရာ အရေးကြီး တယ်ဆိုတာ ဘာထက် အရေးကြီးတယ်။",
          code: "<div className='container'><h2>Hey I am in Love</h2></div>",
          categoryId: 2,
        },
        {
          id: 5,
          title: "HOW TO CREATE SLIDER?",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iusto, minima sequi libero velit ipsum omnis magni deserunt deleniti alias autem delectus.",
          description_in_mm:
            "ဤနေရာတွင် သင်လိုအပ်နေသော အရာက ဘယ်လိုလုပ်ရ မှာလည်းဆိုတာ။ သင်သည် လိုအပ်နေသော အရာက အားလုံးသော အရာအားလုံး သော အရာ အရေးကြီး တယ်ဆိုတာ ဘာထက် အရေးကြီးတယ်ဤနေရာတွင် သင်လိုအပ်နေသော အရာက ဘယ်လိုလုပ်ရ မှာလည်းဆိုတာ။ သင်သည် လိုအပ်နေသော အရာက အားလုံးသော အရာအားလုံး သော အရာ အရေးကြီး တယ်ဆိုတာ ဘာထက် အရေးကြီးတယ်။",
          code: "<div className='container'><h2>Hey I am in Love</h2></div>",
          categoryId: 2,
        },
        {
          id: 6,
          title: "HOW TO CREATE SLIDER?",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iusto, minima sequi libero velit ipsum omnis magni deserunt deleniti alias autem delectus.",
          description_in_mm:
            "ဤနေရာတွင် သင်လိုအပ်နေသော အရာက ဘယ်လိုလုပ်ရ မှာလည်းဆိုတာ။ သင်သည် လိုအပ်နေသော အရာက အားလုံးသော အရာအားလုံး သော အရာ အရေးကြီး တယ်ဆိုတာ ဘာထက် အရေးကြီးတယ်ဤနေရာတွင် သင်လိုအပ်နေသော အရာက ဘယ်လိုလုပ်ရ မှာလည်းဆိုတာ။ သင်သည် လိုအပ်နေသော အရာက အားလုံးသော အရာအားလုံး သော အရာ အရေးကြီး တယ်ဆိုတာ ဘာထက် အရေးကြီးတယ်။",
          code: "<div className='container'><h2>Hey I am in Love</h2></div>",
          categoryId: 1,
        },
        {
          id: 7,
          title: "How to create dropdown",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iusto, minima sequi libero velit ipsum omnis magni deserunt deleniti alias autem delectus.",
          description_in_mm:
            "ဤနေရာတွင် သင်လိုအပ်နေသော အရာက ဘယ်လိုလုပ်ရ မှာလည်းဆိုတာ။ သင်သည် လိုအပ်နေသော အရာက အားလုံးသော အရာအားလုံး သော အရာ အရေးကြီး တယ်ဆိုတာ ဘာထက် အရေးကြီးတယ်ဤနေရာတွင် သင်လိုအပ်နေသော အရာက ဘယ်လိုလုပ်ရ မှာလည်းဆိုတာ။ သင်သည် လိုအပ်နေသော အရာက အားလုံးသော အရာအားလုံး သော အရာ အရေးကြီး တယ်ဆိုတာ ဘာထက် အရေးကြီးတယ်။",
          code: "<h1 style='color: white;'>Hey I am in the Code Section</h1>",
          categoryId: 1,
        },
      ],
      newArticles: [
        {
          id: 1,
          title: "HOW TO CREATE SLIDER?",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iusto, minima sequi libero velit ipsum omnis magni deserunt deleniti alias autem delectus.",
          description_in_mm:
            "ဤနေရာတွင် သင်လိုအပ်နေသော အရာက ဘယ်လိုလုပ်ရ မှာလည်းဆိုတာ။ သင်သည် လိုအပ်နေသော အရာက အားလုံးသော အရာအားလုံး သော အရာ အရေးကြီး တယ်ဆိုတာ ဘာထက် အရေးကြီးတယ်ဤနေရာတွင် သင်လိုအပ်နေသော အရာက ဘယ်လိုလုပ်ရ မှာလည်းဆိုတာ။ သင်သည် လိုအပ်နေသော အရာက အားလုံးသော အရာအားလုံး သော အရာ အရေးကြီး တယ်ဆိုတာ ဘာထက် အရေးကြီးတယ်။",
          code:
            "<style>.conatiner{margin:0; padding: 0;}</style><div className='container'><h2>Hey I am in Love</h2></div>",
          categoryId: 1,
        },
        {
          id: 2,
          title: "HOW TO CREATE SLIDER?",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iusto, minima sequi libero velit ipsum omnis magni deserunt deleniti alias autem delectus.",
          description_in_mm:
            "ဤနေရာတွင် သင်လိုအပ်နေသော အရာက ဘယ်လိုလုပ်ရ မှာလည်းဆိုတာ။ သင်သည် လိုအပ်နေသော အရာက အားလုံးသော အရာအားလုံး သော အရာ အရေးကြီး တယ်ဆိုတာ ဘာထက် အရေးကြီးတယ်ဤနေရာတွင် သင်လိုအပ်နေသော အရာက ဘယ်လိုလုပ်ရ မှာလည်းဆိုတာ။ သင်သည် လိုအပ်နေသော အရာက အားလုံးသော အရာအားလုံး သော အရာ အရေးကြီး တယ်ဆိုတာ ဘာထက် အရေးကြီးတယ်။",
          code: "<div className='container'><h2>Hey I am in Love</h2></div>",
          categoryId: 1,
        },
        {
          id: 3,
          title: "HOW TO CREATE SLIDER?",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iusto, minima sequi libero velit ipsum omnis magni deserunt deleniti alias autem delectus.",
          description_in_mm:
            "ဤနေရာတွင် သင်လိုအပ်နေသော အရာက ဘယ်လိုလုပ်ရ မှာလည်းဆိုတာ။ သင်သည် လိုအပ်နေသော အရာက အားလုံးသော အရာအားလုံး သော အရာ အရေးကြီး တယ်ဆိုတာ ဘာထက် အရေးကြီးတယ်ဤနေရာတွင် သင်လိုအပ်နေသော အရာက ဘယ်လိုလုပ်ရ မှာလည်းဆိုတာ။ သင်သည် လိုအပ်နေသော အရာက အားလုံးသော အရာအားလုံး သော အရာ အရေးကြီး တယ်ဆိုတာ ဘာထက် အရေးကြီးတယ်။",
          code: "<div className='container'><h2>Hey I am in Love</h2></div>",
          categoryId: 3,
        },
        {
          id: 4,
          title: "HOW TO CREATE SLIDER?",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iusto, minima sequi libero velit ipsum omnis magni deserunt deleniti alias autem delectus.",
          description_in_mm:
            "ဤနေရာတွင် သင်လိုအပ်နေသော အရာက ဘယ်လိုလုပ်ရ မှာလည်းဆိုတာ။ သင်သည် လိုအပ်နေသော အရာက အားလုံးသော အရာအားလုံး သော အရာ အရေးကြီး တယ်ဆိုတာ ဘာထက် အရေးကြီးတယ်ဤနေရာတွင် သင်လိုအပ်နေသော အရာက ဘယ်လိုလုပ်ရ မှာလည်းဆိုတာ။ သင်သည် လိုအပ်နေသော အရာက အားလုံးသော အရာအားလုံး သော အရာ အရေးကြီး တယ်ဆိုတာ ဘာထက် အရေးကြီးတယ်။",
          code: "<div className='container'><h2>Hey I am in Love</h2></div>",
          categoryId: 2,
        },
        {
          id: 5,
          title: "HOW TO CREATE SLIDER?",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iusto, minima sequi libero velit ipsum omnis magni deserunt deleniti alias autem delectus.",
          description_in_mm:
            "ဤနေရာတွင် သင်လိုအပ်နေသော အရာက ဘယ်လိုလုပ်ရ မှာလည်းဆိုတာ။ သင်သည် လိုအပ်နေသော အရာက အားလုံးသော အရာအားလုံး သော အရာ အရေးကြီး တယ်ဆိုတာ ဘာထက် အရေးကြီးတယ်ဤနေရာတွင် သင်လိုအပ်နေသော အရာက ဘယ်လိုလုပ်ရ မှာလည်းဆိုတာ။ သင်သည် လိုအပ်နေသော အရာက အားလုံးသော အရာအားလုံး သော အရာ အရေးကြီး တယ်ဆိုတာ ဘာထက် အရေးကြီးတယ်။",
          code: "<div className='container'><h2>Hey I am in Love</h2></div>",
          categoryId: 2,
        },
        {
          id: 6,
          title: "HOW TO CREATE SLIDER?",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iusto, minima sequi libero velit ipsum omnis magni deserunt deleniti alias autem delectus.",
          description_in_mm:
            "ဤနေရာတွင် သင်လိုအပ်နေသော အရာက ဘယ်လိုလုပ်ရ မှာလည်းဆိုတာ။ သင်သည် လိုအပ်နေသော အရာက အားလုံးသော အရာအားလုံး သော အရာ အရေးကြီး တယ်ဆိုတာ ဘာထက် အရေးကြီးတယ်ဤနေရာတွင် သင်လိုအပ်နေသော အရာက ဘယ်လိုလုပ်ရ မှာလည်းဆိုတာ။ သင်သည် လိုအပ်နေသော အရာက အားလုံးသော အရာအားလုံး သော အရာ အရေးကြီး တယ်ဆိုတာ ဘာထက် အရေးကြီးတယ်။",
          code: "<div className='container'><h2>Hey I am in Love</h2></div>",
          categoryId: 1,
        },
        {
          id: 7,
          title: "How to create dropdown",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iusto, minima sequi libero velit ipsum omnis magni deserunt deleniti alias autem delectus.",
          description_in_mm:
            "ဤနေရာတွင် သင်လိုအပ်နေသော အရာက ဘယ်လိုလုပ်ရ မှာလည်းဆိုတာ။ သင်သည် လိုအပ်နေသော အရာက အားလုံးသော အရာအားလုံး သော အရာ အရေးကြီး တယ်ဆိုတာ ဘာထက် အရေးကြီးတယ်ဤနေရာတွင် သင်လိုအပ်နေသော အရာက ဘယ်လိုလုပ်ရ မှာလည်းဆိုတာ။ သင်သည် လိုအပ်နေသော အရာက အားလုံးသော အရာအားလုံး သော အရာ အရေးကြီး တယ်ဆိုတာ ဘာထက် အရေးကြီးတယ်။",
          code: "<h1 style='color: white;'>Hey I am in the Code Section</h1>",
          categoryId: 1,
        },
      ],
      featuredArticles: [
        {
          id: 1,
          title: "HOW TO CREATE SLIDER?",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iusto, minima sequi libero velit ipsum omnis magni deserunt deleniti alias autem delectus.",
          description_in_mm:
            "ဤနေရာတွင် သင်လိုအပ်နေသော အရာက ဘယ်လိုလုပ်ရ မှာလည်းဆိုတာ။ သင်သည် လိုအပ်နေသော အရာက အားလုံးသော အရာအားလုံး သော အရာ အရေးကြီး တယ်ဆိုတာ ဘာထက် အရေးကြီးတယ်ဤနေရာတွင် သင်လိုအပ်နေသော အရာက ဘယ်လိုလုပ်ရ မှာလည်းဆိုတာ။ သင်သည် လိုအပ်နေသော အရာက အားလုံးသော အရာအားလုံး သော အရာ အရေးကြီး တယ်ဆိုတာ ဘာထက် အရေးကြီးတယ်။",
          code:
            "<style>.conatiner{margin:0; padding: 0;}</style><div className='container'><h2>Hey I am in Love</h2></div>",
          categoryId: 1,
        },
        {
          id: 2,
          title: "HOW TO CREATE SLIDER?",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iusto, minima sequi libero velit ipsum omnis magni deserunt deleniti alias autem delectus.",
          description_in_mm:
            "ဤနေရာတွင် သင်လိုအပ်နေသော အရာက ဘယ်လိုလုပ်ရ မှာလည်းဆိုတာ။ သင်သည် လိုအပ်နေသော အရာက အားလုံးသော အရာအားလုံး သော အရာ အရေးကြီး တယ်ဆိုတာ ဘာထက် အရေးကြီးတယ်ဤနေရာတွင် သင်လိုအပ်နေသော အရာက ဘယ်လိုလုပ်ရ မှာလည်းဆိုတာ။ သင်သည် လိုအပ်နေသော အရာက အားလုံးသော အရာအားလုံး သော အရာ အရေးကြီး တယ်ဆိုတာ ဘာထက် အရေးကြီးတယ်။",
          code: "<div className='container'><h2>Hey I am in Love</h2></div>",
          categoryId: 1,
        },
        {
          id: 3,
          title: "HOW TO CREATE SLIDER?",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iusto, minima sequi libero velit ipsum omnis magni deserunt deleniti alias autem delectus.",
          description_in_mm:
            "ဤနေရာတွင် သင်လိုအပ်နေသော အရာက ဘယ်လိုလုပ်ရ မှာလည်းဆိုတာ။ သင်သည် လိုအပ်နေသော အရာက အားလုံးသော အရာအားလုံး သော အရာ အရေးကြီး တယ်ဆိုတာ ဘာထက် အရေးကြီးတယ်ဤနေရာတွင် သင်လိုအပ်နေသော အရာက ဘယ်လိုလုပ်ရ မှာလည်းဆိုတာ။ သင်သည် လိုအပ်နေသော အရာက အားလုံးသော အရာအားလုံး သော အရာ အရေးကြီး တယ်ဆိုတာ ဘာထက် အရေးကြီးတယ်။",
          code: "<div className='container'><h2>Hey I am in Love</h2></div>",
          categoryId: 3,
        },
        {
          id: 4,
          title: "HOW TO CREATE SLIDER?",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iusto, minima sequi libero velit ipsum omnis magni deserunt deleniti alias autem delectus.",
          description_in_mm:
            "ဤနေရာတွင် သင်လိုအပ်နေသော အရာက ဘယ်လိုလုပ်ရ မှာလည်းဆိုတာ။ သင်သည် လိုအပ်နေသော အရာက အားလုံးသော အရာအားလုံး သော အရာ အရေးကြီး တယ်ဆိုတာ ဘာထက် အရေးကြီးတယ်ဤနေရာတွင် သင်လိုအပ်နေသော အရာက ဘယ်လိုလုပ်ရ မှာလည်းဆိုတာ။ သင်သည် လိုအပ်နေသော အရာက အားလုံးသော အရာအားလုံး သော အရာ အရေးကြီး တယ်ဆိုတာ ဘာထက် အရေးကြီးတယ်။",
          code: "<div className='container'><h2>Hey I am in Love</h2></div>",
          categoryId: 2,
        },
        {
          id: 5,
          title: "HOW TO CREATE SLIDER?",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iusto, minima sequi libero velit ipsum omnis magni deserunt deleniti alias autem delectus.",
          description_in_mm:
            "ဤနေရာတွင် သင်လိုအပ်နေသော အရာက ဘယ်လိုလုပ်ရ မှာလည်းဆိုတာ။ သင်သည် လိုအပ်နေသော အရာက အားလုံးသော အရာအားလုံး သော အရာ အရေးကြီး တယ်ဆိုတာ ဘာထက် အရေးကြီးတယ်ဤနေရာတွင် သင်လိုအပ်နေသော အရာက ဘယ်လိုလုပ်ရ မှာလည်းဆိုတာ။ သင်သည် လိုအပ်နေသော အရာက အားလုံးသော အရာအားလုံး သော အရာ အရေးကြီး တယ်ဆိုတာ ဘာထက် အရေးကြီးတယ်။",
          code: "<div className='container'><h2>Hey I am in Love</h2></div>",
          categoryId: 2,
        },
        {
          id: 6,
          title: "HOW TO CREATE SLIDER?",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iusto, minima sequi libero velit ipsum omnis magni deserunt deleniti alias autem delectus.",
          description_in_mm:
            "ဤနေရာတွင် သင်လိုအပ်နေသော အရာက ဘယ်လိုလုပ်ရ မှာလည်းဆိုတာ။ သင်သည် လိုအပ်နေသော အရာက အားလုံးသော အရာအားလုံး သော အရာ အရေးကြီး တယ်ဆိုတာ ဘာထက် အရေးကြီးတယ်ဤနေရာတွင် သင်လိုအပ်နေသော အရာက ဘယ်လိုလုပ်ရ မှာလည်းဆိုတာ။ သင်သည် လိုအပ်နေသော အရာက အားလုံးသော အရာအားလုံး သော အရာ အရေးကြီး တယ်ဆိုတာ ဘာထက် အရေးကြီးတယ်။",
          code: "<div className='container'><h2>Hey I am in Love</h2></div>",
          categoryId: 1,
        },
        {
          id: 7,
          title: "How to create dropdown",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iusto, minima sequi libero velit ipsum omnis magni deserunt deleniti alias autem delectus.",
          description_in_mm:
            "ဤနေရာတွင် သင်လိုအပ်နေသော အရာက ဘယ်လိုလုပ်ရ မှာလည်းဆိုတာ။ သင်သည် လိုအပ်နေသော အရာက အားလုံးသော အရာအားလုံး သော အရာ အရေးကြီး တယ်ဆိုတာ ဘာထက် အရေးကြီးတယ်ဤနေရာတွင် သင်လိုအပ်နေသော အရာက ဘယ်လိုလုပ်ရ မှာလည်းဆိုတာ။ သင်သည် လိုအပ်နေသော အရာက အားလုံးသော အရာအားလုံး သော အရာ အရေးကြီး တယ်ဆိုတာ ဘာထက် အရေးကြီးတယ်။",
          code: "<h1 style='color: white;'>Hey I am in the Code Section</h1>",
          categoryId: 1,
        },
      ],
    };
    this.handleChangeLanugage = this.handleChangeLanugage.bind(this);
    this.handleNewArticle = this.handleNewArticle.bind(this);
    this.handleEditArticle = this.handleEditArticle.bind(this);
    this.handleDeleteArticle = this.handleDeleteArticle.bind(this);
    this.handleNewCategory = this.handleNewCategory.bind(this);
    this.handleEditCategory = this.handleEditCategory.bind(this);
    this.handleDeleteCategory = this.handleDeleteCategory.bind(this);
    this.handleNewUser = this.handleNewUser.bind(this);
    this.handleEditUser = this.handleEditUser.bind(this);
    this.handleDeleteUser = this.handleDeleteUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleChangeLanugage(language) {
    this.setState({ language });
  }
  handleLogin() {
    this.setState({ isAdmin: true });
  }
  handleLogout() {
    this.setState({ isAdmin: false });
  }
  handleNewArticle(article) {
    let articles = this.state.allArticles;
    articles.push(article);
    this.setState({ articles }, () => {
      console.log(this.state.allArticles);
    });
  }
  handleEditArticle(article) {
    let oldArticle = this.state.allArticles.filter((result, i) => {
      return result.id == article.id;
    })[0];
    oldArticle.title = article.title;
    oldArticle.description = article.description;
    oldArticle.description_in_mm = article.description_in_mm;
    oldArticle.code = article.code;
    oldArticle.categoryId = article.categoryId;

    let articles = this.state.allArticles.filter((result) => {
      return result.id != article.id;
    });
    articles.push(oldArticle);
    this.setState({ allArticles: articles }, () => {
      console.log(this.state.allArticles);
    });
  } 
  handleDeleteArticle(id) {
    let articles = this.state.allArticles.filter((article) => article.id != id);
    this.setState({allArticles: articles});
  }
  handleNewCategory(category) {
    let categories = this.state.links;
    categories.push(category);
    this.setState({ links: categories }, () => {
      console.log(this.state.links);
    });
  }
  handleEditCategory(category) {
    let oldCategory = this.state.links.filter(
      (result) => result.id == category.id
    )[0];
    oldCategory.name = category.name;
    oldCategory.name_in_mm = category.name_in_mm;

    let categories = this.state.links.filter(
      (result) => result.id != category.id
    );
    categories.push(oldCategory);
    this.setState({ links: categories }, () => {
      console.log(this.state.links);
    });
  }
  handleDeleteCategory(id) {
    let categories = this.state.links.filter((category) => category.id != id);
    this.setState({links: categories});
  }
  handleNewUser(user) {
    let users = this.state.users;
    users.push(user);
    this.setState({ users });
  }
  handleEditUser(user) {
    let oldUser = this.state.users.filter((result) => result.id == user.id)[0];
    oldUser.username = user.username;
    oldUser.password = user.password;

    let users = this.state.users.filter((result) => result.id != user.id);
    users.push(oldUser);
    this.setState({ users }, () => {
      console.log(this.state.users);
    });
  }
  handleDeleteUser(id) {
    let users = this.state.users.filter((user) => user.id != id);
    this.setState({users});
  }
  render() {
    return (
      <Router>
        <Navigation
          handleLogout={this.handleLogout}
          isAdmin={this.state.isAdmin}
          links={this.state.links}
          language={this.state.language}
          handleChangeLanugage={this.handleChangeLanugage}
        />
        <Switch>
          /* Visitors Routes Start */
          <Route path="/" exact>
            <Home
              isAdmin={this.state.isAdmin}
              language={this.state.language}
              allArticles={this.state.allArticles}
              newArticles={this.state.newArticles}
              featuredArticles={this.state.featuredArticles}
            />
          </Route>
          {this.state.links.map((link, i) => {
            return (
              <Route key={i} path={"/" + link.id}>
                <Home
                  isAdmin={this.state.isAdmin}
                  category={link}
                  allArticles={this.state.allArticles}
                  language={this.state.language}
                />
              </Route>
            );
          })}
          <Route path="/detail/:id">
            <Detail
              articles={this.state.allArticles}
              language={this.state.language}
            />
          </Route>
          /* Visitors Routes End */ /* Admin Routes Start */
          <Route path="/admin/article/:id" exact>
            <ArticleDetail
              isAdmin={this.state.isAdmin}
              articles={this.state.allArticles}
              categories={this.state.links}
              handleEditArticle={this.handleEditArticle}
              handleDeleteArticle={this.handleDeleteArticle}
            />
          </Route>
          <Route path="/admin/category/:id" exact>
            <CategoryDetail
              isAdmin={this.state.isAdmin}
              categories={this.state.links}
              handleEditCategory={this.handleEditCategory}
              handleDeleteCategory={this.handleDeleteCategory}
            />
          </Route>
          <Route path="/admin/user/:id" exact>
            <UserDetail
              isAdmin={this.state.isAdmin}
              users={this.state.users}
              handleEditUser={this.handleEditUser}
              handleDeleteUser={this.handleDeleteUser}
            />
          </Route>
          <Route path="/login">
            <Login handleLogin={this.handleLogin} 
            users={this.state.users}
            />
          </Route>
          <ProtectRoute
            path="/admin"
            isAdmin={this.state.isAdmin}
            component={Admin}
            categories={this.state.links}
            articles={this.state.allArticles}
            users={this.state.users}
            handleNewArticle={this.handleNewArticle}
            handleNewCategory={this.handleNewCategory}
            handleNewUser={this.handleNewUser}
          />
          /* Admin Routes Start */
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Main;
