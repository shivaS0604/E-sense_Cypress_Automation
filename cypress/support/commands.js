/// <reference types = "Cypress" />

//To interact with canvas element
Cypress.Commands.add('drawOnCanvas', (canvasSelector, options) => {
    return cy.get(canvasSelector).then($canvas => {
      const canvas = $canvas[0];
      const context = canvas.getContext('2d');
  
      // Perform actions on the canvas context
      // Example: Draw a rectangle
      context.beginPath();
      context.rect(options.x, options.y, options.width, options.height);
      context.fillStyle = options.color;
      context.fill();
  
      // Trigger a canvas event if needed
      // Example: Trigger a click event on the canvas
      const event = new MouseEvent('click', {
        clientX: options.x,
        clientY: options.y
      });
      canvas.dispatchEvent(event);
    });
  });
  