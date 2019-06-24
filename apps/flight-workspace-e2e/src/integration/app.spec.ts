import { getGreeting } from '../support/app.po';

describe('flight-workspace', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to flight-workspace!');
  });
});
