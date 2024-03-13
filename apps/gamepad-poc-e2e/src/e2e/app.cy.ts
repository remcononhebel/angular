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

  it('should update left joystick debug information when joystick is moved', () => {
    getDataCy('left-joystick-info').should('contain.text', 'null');
    cy.get('[data-cy="left-joystick"] .back').click(80, 80, { force: false });
    getDataCy('left-joystick-info').should('not.contain.text', 'null');
  });

  it('should update right joystick debug information when joystick is moved', () => {
    getDataCy('right-joystick-info').should('contain.text', 'null');
    cy.get('[data-cy="right-joystick"] .back').click(80, 80, { force: false });
    getDataCy('right-joystick-info').should('not.contain.text', 'null');
  });
});
