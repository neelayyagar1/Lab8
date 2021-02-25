describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number');
    cy.get('#volume-number').clear().type('75');

    cy.get('#volume-slider').then(function($el) {
      expect($el).to.have.value(75);
    });
  });

  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider');
    cy.get('#volume-slider').invoke('val', 33).trigger('input');

    cy.get('#volume-number').then(function($el) {
      expect($el).to.have.value(33);
    });
  });

  it('Audio changes when slider changes', () => {
    cy.get('#volume-slider');
    cy.get('#volume-slider').invoke('val', 33).trigger('input');

    cy.get('#horn-sound').then(function($el) {
      expect($el).to.have.prop('volume', 0.33);
    });
  });

  //Bullet 1 
  it('Image source changes when slider changes', () => {
    cy.get('[id="radio-party-horn"]').check();

    cy.get('#sound-image').then(function($el) {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
    });
  });

  
  it('Sound source changes when slider changes', () => {
    cy.get('[id="radio-party-horn"]').check();

    cy.get('#horn-sound').then(function($el) {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
    });
  });

  
  //Bullet 2
  it('Volume Image change when increased to 67', () => {
    cy.get('#volume-slider');
    cy.get('#volume-slider').invoke('val', 67).trigger('input');

    cy.get('#volume-image').then(function($el) {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    });
  });

  it('Volume Image change when increased to 34', () => {
    cy.get('#volume-slider');
    cy.get('#volume-slider').invoke('val', 34).trigger('input');

    cy.get('#volume-image').then(function($el) {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });
  });

  it('Volume Image change when increased to 1', () => {
    cy.get('#volume-slider');
    cy.get('#volume-slider').invoke('val', 1).trigger('input');

    cy.get('#volume-image').then(function($el) {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });
  });

  it('Volume Image change when increased to 0', () => {
    cy.get('#volume-slider');
    cy.get('#volume-slider').invoke('val', 0).trigger('input');

    cy.get('#volume-image').then(function($el) {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
    });
  });

  
  //Bullet 3
  it('Honk Disabled when input is empty', () => {
    cy.get('#volume-number');
    cy.get('#volume-number').clear();

    expect(cy.get('#honk-btn').should('be.disabled'));
  });

  it('Honk Disabled when input is non-number', () => {
    cy.get('#volume-number');
    cy.get('#volume-number').clear().type('A');

    expect(cy.get('#honk-btn').should('be.disabled'));
  });

  
  //Bullet 4
  it('Error shown if invalid volume inputted', () => {
    cy.get('#volume-number');
    cy.get('#volume-number').clear().type('-25');
    cy.on(':invalid', (err, runnable) => {
      expect(err.message).to.include('Value must be greater than or equal to 0');
    });
  }); 
});
