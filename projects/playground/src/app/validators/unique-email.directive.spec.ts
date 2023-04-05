import { UniqueEmailValidator } from './unique-email-validator.directive';

describe('UniqueEmailDirective', () => {
  it('should create an instance', () => {
    const directive = new UniqueEmailValidator();
    expect(directive).toBeTruthy();
  });
});
