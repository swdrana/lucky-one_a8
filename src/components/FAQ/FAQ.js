import React from "react";
import "./FAQ.css";
const FAQ = () => {
  return (
    <div>
      <div className="faq">
        <h2>রিয়াক্ট কিভাবে কাজ করে?</h2>
        <p>React হল JavaScript এর একটি লাইব্রেরী। আমরা জানি, একটা ওয়েব পেইজ ডিজাইন করতে হলে প্রথমেই লাগে HTML এবং বিভিন্ন HTML File এর সমন্বয়ে গঠিত হয় একটি Website, যেখানে প্রতিটি HTML File একটি আরেকটির সাথে Link করে রাখা হয়, এভাবেই Website গঠিত হয় বা কাজ করে থাকে।কিন্তু এভাবে Linking করে এক পেইজ থেকে আরেক পেইজ এ যেতে প্রতিবার পেইজ টি রিলোড হয়, যেটা User Experience কে ক্ষুণ্ণ করে। কিভাবে এই সমস্যাটি কে উন্নত করা যাই তার গবেষণার ফসল হল এই React.</p>
        <p>React এর মধ্যে আছে JSX (JavaScript XML) যেটা দেখতে অনেকটাই HTML এর মত কিন্তু সেগুলো কে HTML ফাইলে না লিখে .JS ফাইলর মধ্যে লেখা হয়। JavaScript যেহেতু একটা স্ক্রিপ্টিং ল্যাঙ্গুয়েজ এবং ব্রাওজারে কাজ করে তাই এটার মধ্যে যখন JSX এর মাধ্যমে HTML কোড গুলো লেখা হয় তখন User যদি এক পেইজ থেকে অন্য পেইজে যেতে চাই তখন সম্পূর্ণ পেইজ টি রিলোড না হয়ে শুধুমাত্র তার কাঙ্ক্ষিত Data টি Same পেইজের মধ্যে কোন প্রকার লোড না নিয়েই দেখাতে পারে।  এভাবে একই পেইজের মধ্যে ডাটার পরিবরন কে বলা হয় Stage. যখনই User ভিন্ন কোথাও যেতে চাই বা দেখতে চাই তখন এই Stage পরিবর্তন করে তাকে তার Data দেখানো হয়। </p>
        <p>এছাড়া এই JSX এর মাধ্যমে আমরা নিজেদের মত করে Custom কম্পোনেন্ট বা সহজে বলতে গেলে HTML tag এর মত Custom tag তৈরি করতে পারি, সেটার মধ্যে Dynamic ভাবে Data পাঠিয়ে দেখাতে পারি, এছাড়া মজার বিষয় হলঃ আমরা এই কম্পোনেন্ট কে পুনারায় ব্যবহার করতে পারি। যেমনঃ একটি ওয়েবসাইটের প্রতিটি পেইজে যদি তার হেডার ও ফুটার দেখানোর প্রয়োজন পড়ে সেক্ষেত্রে সাধারণত আমাদের প্রয়োজন হয় প্রতিটা পেইজে আলাদা করে হেডার ও ফুটার এর জন্য কোড লেখা, কিন্তু React এর JSX এর মাধ্যমে কাস্টম কম্পনেট এর মাধ্যমে একবার হেডার ও ফুটারের জন্য কোড লিখে উক্ত কম্পোনেন্ট কে অন্য পেইজ বা File এ import করে দিলে হয়ে যাই এটার ফলে ডেভেলপারদের কষ্ট যেমন কমে যাই তেমনিই ভাবে কোডের Reuseablity বেড়ে যাই, যেটা সর্বদিক থেকেই খুবিই সুন্দর একটা পারফারমেন্স প্রদান করে। </p>
      </div>
      <div className="faq">
        <h2>props ও state এর মধ্যে পার্থক্য কি?</h2>
      </div>
    </div>
  );
};

export default FAQ;
