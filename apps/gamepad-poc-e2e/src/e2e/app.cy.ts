import { getDataCy } from '../support/app.po';

describe('gamepad-poc-e2e', () => {
  beforeEach(() => {
    cy.viewport(1024, 640);
    cy.visit('/');
  });

  it('should display Hello, World in the h1', () => {
    cy.get('h1').should('contain.text', 'Hello, World!');
  });

  it('should have 2 joysticks', () => {
    getDataCy('left-joystick');
    getDataCy('right-joystick');
  });

  it('should show null in the joystick info box', () => {
    getDataCy('left-joystick-info').should('contain.text', 'null');
  });

  it('should move the left joystick', () => {
    cy.get('[data-cy="left-joystick"] .front').trigger('mousedown');
    cy.get('[data-cy="left-joystick"] .front').trigger('mousemove', { which: 1, pageX: 0, pageY: -100 });
    cy.get('[data-cy="left-joystick"] .front').trigger('mouseup'); // End the drag by simulating mouse up  });
  });
});
