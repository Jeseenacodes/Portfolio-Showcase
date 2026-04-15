export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center border-b border-background/10 pb-8 mb-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-serif font-bold">Ustadhah Jeseena</h2>
            <p className="text-background/70 mt-2 text-sm max-w-xs mx-auto md:mx-0">
              Nurturing hearts with the light of the Quran through compassionate, expert instruction.
            </p>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="#home" className="text-background/70 hover:text-white transition-colors text-sm">Home</a>
            <a href="#about" className="text-background/70 hover:text-white transition-colors text-sm">About</a>
            <a href="#services" className="text-background/70 hover:text-white transition-colors text-sm">Services</a>
            <a href="#contact" className="text-background/70 hover:text-white transition-colors text-sm">Contact</a>
          </div>
          
          <div className="text-center md:text-right">
            <a 
              href="https://littlenoories.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block border border-background/20 rounded-full px-4 py-2 text-sm text-background/90 hover:bg-background/10 transition-colors text-center"
              data-testid="link-footer-littlenoories"
            >Creator of Little Noories App
            littlenoories.app</a>
          </div>
        </div>
        
        <div className="text-center text-background/50 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Jeseena. All rights reserved.</p>
          <p className="mt-2 md:mt-0 italic font-serif">Bismillahir Rahmanir Raheem</p>
        </div>
      </div>
    </footer>
  );
}
