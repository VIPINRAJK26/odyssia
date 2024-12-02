import React from 'react'

const ElementorSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 px-3  gap-6 mt-10 container mx-auto lg:px-32">
      <div className="elementor-img hover:translate-x-3 ease-in-out duration-1000">
        <img
          src="https://odyssia.in/wp-content/uploads/2024/06/COLORS-OF-ODYSSIA-FOR-WEBSITE-1024X1024.webp"
          alt="Image"
        />
      </div>
      <div className="elementor-img hover:translate-x-3 ease-in-out duration-1000">
        <img
          src="https://odyssia.in/wp-content/uploads/2024/06/WebP-Claim-Your-Pair-web-banner-1024x1024-1.webp"
          alt="Image"
        />
      </div>
      <div className="elementor-img hover:translate-x-3 ease-in-out duration-1000">
        <img
          src="https://odyssia.in/wp-content/uploads/2023/08/cd-27-main-1024x1024-1.webp"
          alt="Image"
        />
      </div>
    </div>
  );
}

export default ElementorSection