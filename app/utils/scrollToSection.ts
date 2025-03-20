export const scrollToSection = (id: string) => {
  event?.preventDefault();
  
  const element = document.getElementById(id);
  if (element) {
    const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
    
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
}; 