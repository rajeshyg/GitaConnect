/**
 * Validation utility functions for data models
 */

/**
 * Validates data against a schema
 * @param {Object} data - Data to validate
 * @param {Object} schema - Schema to validate against
 * @returns {Object} Validation result with isValid and errors
 */
export const validateData = (data, schema) => {
  const errors = {};
  let isValid = true;

  // Loop through schema properties
  Object.entries(schema).forEach(([field, rules]) => {
    const value = data[field];
    
    // Check required fields
    if (rules.required && (value === undefined || value === null || value === '')) {
      errors[field] = `${field} is required`;
      isValid = false;
      return;
    }

    // Skip validation for undefined optional fields
    if (value === undefined || value === null) {
      return;
    }

    // Type validation
    switch (rules.type) {
      case 'string':
        if (typeof value !== 'string') {
          errors[field] = `${field} must be a string`;
          isValid = false;
        } else if (rules.format) {
          // Format validation
          switch (rules.format) {
            case 'email':
              if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                errors[field] = `${field} must be a valid email address`;
                isValid = false;
              }
              break;
            case 'url':
              try {
                new URL(value);
              } catch (e) {
                errors[field] = `${field} must be a valid URL`;
                isValid = false;
              }
              break;
            case 'date':
              if (isNaN(Date.parse(value))) {
                errors[field] = `${field} must be a valid date`;
                isValid = false;
              }
              break;
            case 'date-time':
              if (isNaN(Date.parse(value))) {
                errors[field] = `${field} must be a valid date and time`;
                isValid = false;
              }
              break;
            default:
              break;
          }
        }
        break;

      case 'number':
        if (typeof value !== 'number' || isNaN(value)) {
          errors[field] = `${field} must be a number`;
          isValid = false;
        }
        break;

      case 'boolean':
        if (typeof value !== 'boolean') {
          errors[field] = `${field} must be a boolean`;
          isValid = false;
        }
        break;

      case 'array':
        if (!Array.isArray(value)) {
          errors[field] = `${field} must be an array`;
          isValid = false;
        } else if (rules.items && value.length > 0) {
          // Validate array items if specified
          const itemErrors = [];
          value.forEach((item, index) => {
            if (rules.items.type === 'string' && typeof item !== 'string') {
              itemErrors.push(`Item ${index + 1} must be a string`);
            } else if (rules.items.type === 'number' && (typeof item !== 'number' || isNaN(item))) {
              itemErrors.push(`Item ${index + 1} must be a number`);
            } else if (rules.items.enum && !rules.items.enum.includes(item)) {
              itemErrors.push(`Item ${index + 1} must be one of: ${rules.items.enum.join(', ')}`);
            }
          });
          
          if (itemErrors.length > 0) {
            errors[field] = itemErrors;
            isValid = false;
          }
        }
        break;

      case 'object':
        if (typeof value !== 'object' || Array.isArray(value) || value === null) {
          errors[field] = `${field} must be an object`;
          isValid = false;
        } else if (rules.properties) {
          // Recursively validate nested objects
          const nestedResult = validateData(value, rules.properties);
          if (!nestedResult.isValid) {
            errors[field] = nestedResult.errors;
            isValid = false;
          }
        }
        break;

      default:
        break;
    }

    // Enum validation
    if (rules.enum && !rules.enum.includes(value)) {
      errors[field] = `${field} must be one of: ${rules.enum.join(', ')}`;
      isValid = false;
    }
  });

  return { isValid, errors };
};

/**
 * Creates a validator function for a specific schema
 * @param {Object} schema - Schema to create validator for
 * @returns {Function} Validator function
 */
export const createValidator = (schema) => {
  return (data) => validateData(data, schema);
};
