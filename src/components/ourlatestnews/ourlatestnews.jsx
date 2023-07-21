import React from "react";

const posts = [
  {
    admin: "By Admin",
    comment: "21 Comments",
    img: "/assets/pro1.png",
    content: "Proident Minim Irure Minim Occaecat...",
  },
  {
    admin: "By Admin",
    comment: "25 Comments",
    img: "/assets/pro2.png",
    content: "Proident Minim Irure Minim Occaecat...",
  },
  {
    admin: "By Admin",
    comment: "44 Comments",
    img: "/assets/pro3.png",
    content: "Proident Minim Irure Minim Occaecat...",
  },
];

const OurLatest = () => {
  return (
    <>
      <div className="grid gap-2 lg:grid-cols-3 xl:mx-16 xl:my-28 lg:mx-16 lg:my-28 md:mx-16 md:my-28 mx-5 my-10">
        {posts.map((items, key) => (
          <div className=" rounded-2xl shadow-md lg:max-w-sm mb-5" key={key}>
            <img
              className="object-cover w-full h-72  rounded-t-2xl"
              src={items.img}
              alt="image"
            />
            <div className="p-8">
              <div className="flex text-gray-400 pb-5">
                <h4 className="w-1/2 text-left">{items.admin}</h4>
                <h4 className="w-1/2 text-right">{items.comment}</h4>
              </div>
              <p className="mb-6 text-3xl">{items.content}</p>
              <hr />
              <button className="py-2 text-2xl text-blue-500 pb-0">
                Learn more
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OurLatest;