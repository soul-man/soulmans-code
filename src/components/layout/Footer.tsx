import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full pb-20 py-6 z-20">
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent -z-10"></div>
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="text-accent-secondary text-sm">
            © {currentYear} All rights reserved
          </div>
          
          {/* <div className="flex items-center gap-6">
            <PrivacyPolicyDialog>
              <button className="text-sm text-text hover:text-text-muted transition-colors">
                Impressum
              </button>
            </PrivacyPolicyDialog>
            <PrivacyPolicyDialog>
              <button className="text-sm text-text hover:text-text-muted transition-colors">
                Privacy Policy
              </button>
            </PrivacyPolicyDialog>
          </div> */}
        </div>
      </div>
    </footer>
  );
}; 