import React from 'react'

const ElementorSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 px-3  gap-6 mt-10 container mx-auto lg:px-32">
      <div className="elementor-img hover:translate-x-3 shadow-lg ease-in-out duration-1000">
        <img src="/GI 2620 GREY.jpg" alt="Image" />
      </div>
      <div className="elementor-img hover:translate-x-3 shadow-lg  ease-in-out duration-1000">
        <img src="\GI 3905 PEACH.jpg" alt="Image" />
      </div>
      <div className="elementor-img hover:translate-x-3 shadow-lg ease-in-out duration-1000">
        <img src="/G 7505 BROWN.jpg" alt="Image" />
      </div>
    </div>
  );
}

export default ElementorSection