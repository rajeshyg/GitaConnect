import { validateData, createValidator } from '../validation';
import { StudentSchema } from '../../models/schema';

describe('Validation Utility', () => {
  describe('validateData', () => {
    const simpleSchema = {
      name: { type: 'string', required: true },
      email: { type: 'string', format: 'email', required: true },
      age: { type: 'number', required: false },
      isActive: { type: 'boolean', default: true },
      tags: { type: 'array', items: { type: 'string' } },
      role: { type: 'string', enum: ['admin', 'user', 'guest'] }
    };

    test('validates required fields', () => {
      const data = { email: 'test@example.com' };
      const result = validateData(data, simpleSchema);
      
      expect(result.isValid).toBe(false);
      expect(result.errors.name).toBeDefined();
    });

    test('validates email format', () => {
      const data = { name: 'Test User', email: 'invalid-email' };
      const result = validateData(data, simpleSchema);
      
      expect(result.isValid).toBe(false);
      expect(result.errors.email).toBeDefined();
    });

    test('validates enum values', () => {
      const data = { 
        name: 'Test User', 
        email: 'test@example.com',
        role: 'superadmin' 
      };
      const result = validateData(data, simpleSchema);
      
      expect(result.isValid).toBe(false);
      expect(result.errors.role).toBeDefined();
    });

    test('validates valid data correctly', () => {
      const data = { 
        name: 'Test User', 
        email: 'test@example.com',
        age: 25,
        isActive: true,
        tags: ['tag1', 'tag2'],
        role: 'admin'
      };
      const result = validateData(data, simpleSchema);
      
      expect(result.isValid).toBe(true);
      expect(result.errors).toEqual({});
    });
  });

  describe('createValidator', () => {
    test('creates a validator function for a schema', () => {
      const validator = createValidator(StudentSchema);
      
      // Should fail validation (missing required fields)
      const invalidStudent = {
        firstName: 'John'
      };
      
      const invalidResult = validator(invalidStudent);
      expect(invalidResult.isValid).toBe(false);
      
      // Should pass validation
      const validStudent = {
        id: 'S123456',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        grade: '12',
        school: 'Springfield High School',
        address: {
          city: 'Springfield',
          state: 'IL',
          zipCode: '62704',
          country: 'USA'
        }
      };
      
      const validResult = validator(validStudent);
      expect(validResult.isValid).toBe(true);
    });
  });
});
