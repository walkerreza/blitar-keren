import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#CC1720] text-white py-8 w-full">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-center text-center">
          <img 
            src="https://dinaspupr.blitarkota.go.id/uploads/dokumen/Branding%20Blitar%202.png" 
            alt="Blitar Tourism Logo" 
            className="h-20 w-[100px] transition-opacity duration-300 brightness-0 invert" 
          />
          <p className="text-sm font-medium mb-2">© 2023 Blitar Keren. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
