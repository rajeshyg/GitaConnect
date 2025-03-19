/**
 * Data models schema definitions for the SGS Gita Connect app
 */

// Student schema
export const StudentSchema = {
  id: { type: 'string', required: true }, // Unique identifier
  firstName: { type: 'string', required: true },
  lastName: { type: 'string', required: true },
  email: { type: 'string', required: true, format: 'email' },
  phone: { type: 'string', required: false },
  dateOfBirth: { type: 'string', format: 'date', required: false },
  grade: { type: 'string', required: true }, // Current educational grade/year
  school: { type: 'string', required: true }, // Current school/college
  address: {
    type: 'object',
    properties: {
      street: { type: 'string' },
      city: { type: 'string', required: true },
      state: { type: 'string', required: true },
      zipCode: { type: 'string', required: true },
      country: { type: 'string', required: true, default: 'USA' }
    }
  },
  profilePicture: { type: 'string', format: 'url', required: false },
  interests: { type: 'array', items: { type: 'string' } },
  achievements: { type: 'array', items: { type: 'string' } },
  joinDate: { type: 'string', format: 'date-time' },
  lastActive: { type: 'string', format: 'date-time' },
  isActive: { type: 'boolean', default: true }
};

// Moderator schema
export const ModeratorSchema = {
  id: { type: 'string', required: true },
  firstName: { type: 'string', required: true },
  lastName: { type: 'string', required: true },
  email: { type: 'string', required: true, format: 'email' },
  phone: { type: 'string', required: true },
  role: { type: 'string', enum: ['admin', 'content_moderator', 'general_moderator'], required: true },
  permissions: { type: 'array', items: { type: 'string' } },
  assignedAreas: { type: 'array', items: { type: 'string' } }, // Areas of responsibility
  joinDate: { type: 'string', format: 'date-time' },
  lastActive: { type: 'string', format: 'date-time' },
  isActive: { type: 'boolean', default: true }
};

// Announcement schema
export const AnnouncementSchema = {
  id: { type: 'string', required: true },
  title: { type: 'string', required: true },
  content: { type: 'string', required: true },
  createdBy: { type: 'string', required: true }, // Moderator ID
  createdAt: { type: 'string', format: 'date-time', required: true },
  updatedAt: { type: 'string', format: 'date-time' },
  targetAudience: { 
    type: 'array',
    items: { 
      type: 'string', 
      enum: ['all', 'students', 'moderators', 'specific_grades', 'specific_regions']
    } 
  },
  specificTargets: { type: 'array', items: { type: 'string' } }, // IDs or values of specific targets
  priority: { type: 'string', enum: ['low', 'medium', 'high', 'urgent'], default: 'medium' },
  attachments: { type: 'array', items: { type: 'string', format: 'url' } },
  expirationDate: { type: 'string', format: 'date-time' },
  isActive: { type: 'boolean', default: true }
};

// Opportunity schema
export const OpportunitySchema = {
  id: { type: 'string', required: true },
  title: { type: 'string', required: true },
  description: { type: 'string', required: true },
  type: { 
    type: 'string', 
    enum: ['scholarship', 'internship', 'job', 'volunteering', 'research', 'college_admission', 'other'],
    required: true 
  },
  organization: { type: 'string', required: true },
  location: {
    type: 'object',
    properties: {
      city: { type: 'string' },
      state: { type: 'string' },
      country: { type: 'string' },
      remote: { type: 'boolean', default: false }
    }
  },
  applicationDeadline: { type: 'string', format: 'date-time' },
  requirements: { type: 'array', items: { type: 'string' } },
  compensation: { type: 'string', required: false },
  contactEmail: { type: 'string', format: 'email', required: true },
  contactPhone: { type: 'string', required: false },
  websiteUrl: { type: 'string', format: 'url', required: false },
  applicationUrl: { type: 'string', format: 'url', required: false },
  postedBy: { type: 'string', required: true }, // User ID of who posted
  postedAt: { type: 'string', format: 'date-time', required: true },
  updatedAt: { type: 'string', format: 'date-time' },
  approvalStatus: { 
    type: 'string', 
    enum: ['pending', 'approved', 'rejected', 'archived'],
    default: 'pending'
  },
  approvedBy: { type: 'string' }, // Moderator ID
  approvedAt: { type: 'string', format: 'date-time' },
  isActive: { type: 'boolean', default: true },
  interestedStudents: { type: 'array', items: { type: 'string' } } // Array of student IDs
};

// Message schema
export const MessageSchema = {
  id: { type: 'string', required: true },
  sender: { type: 'string', required: true }, // User ID of sender
  recipient: { type: 'string', required: true }, // User ID of recipient
  content: { type: 'string', required: true },
  sentAt: { type: 'string', format: 'date-time', required: true },
  readAt: { type: 'string', format: 'date-time' },
  isRead: { type: 'boolean', default: false },
  attachments: { type: 'array', items: { type: 'string', format: 'url' } }
};
