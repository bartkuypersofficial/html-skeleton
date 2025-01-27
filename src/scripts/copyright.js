const generateCopyright = (projectName) => {
  const currentYear = new Date().getFullYear();
  const copyrightText = `© ${currentYear} ${projectName}`;
  const copyrightElements = document.querySelectorAll('.js-copyright');

  copyrightElements.forEach((element) => {
    element.textContent = copyrightText;
  });
};

// Usage
// generateCopyright('My Awesome Project');