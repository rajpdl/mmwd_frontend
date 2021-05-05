import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./User/component/Navigation";
import Home from "./User/component/Home";
import Detail from "./User/pages/Detail";
import NoMatch from "./User/pages/NoMatch";
import ProtectRoute from "./Admin/component/ProtectRoute";
import Admin from "./Admin/pages/Admin";
import Login from "./Admin/pages/Login";

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
      isAdmin: true,
      users: [
        {
          id: 1,
          username: 'Raja Poudel',
          password: 'mmwd'
        },
        {
          id: 2,
          username: 'Rajam Poudel',
          password: 'mmdesigners'
        }
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
    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleChangeLanugage(language) {
    this.setState({ language });
  }
  handleLogin() {
    this.setState({isAdmin: true});
  }
  handleLogout() {
    this.setState({ isAdmin: false });
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
          /* Visitors Routes End */
          /* Admin Routes Start */
          <ProtectRoute
            path="/admin"
            isAdmin={this.state.isAdmin}
            component={Admin}
            categories={this.state.links}
            articles={this.state.allArticles}
            users={this.state.users}
          />
          
          <Route path="/login"><Login handleLogin={this.handleLogin} /></Route>
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
