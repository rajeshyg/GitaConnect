# SGS Gita Connect Database Schema Documentation

This document outlines the database schema design for the SGS Gita Connect web application, ensuring consistency between front-end models and MySQL database implementation.

## Tables and Relationships

### students
| Field Name     | Type          | Constraints       | Description                               |
|----------------|---------------|-------------------|-------------------------------------------|
| id             | VARCHAR(36)   | PK, NOT NULL      | UUID for student                          |
| first_name     | VARCHAR(50)   | NOT NULL          | Student's first name                      |
| last_name      | VARCHAR(50)   | NOT NULL          | Student's last name                       |
| email          | VARCHAR(100)  | NOT NULL, UNIQUE  | Student's email address                   |
| phone          | VARCHAR(20)   |                   | Student's phone number                    |
| date_of_birth  | DATE          |                   | Student's date of birth                   |
| grade          | VARCHAR(20)   | NOT NULL          | Current educational grade/year            |
| school         | VARCHAR(100)  | NOT NULL          | Current school/college                    |
| street         | VARCHAR(100)  |                   | Street address                            |
| city           | VARCHAR(50)   | NOT NULL          | City                                      |
| state          | VARCHAR(50)   | NOT NULL          | State/Province                            |
| zip_code       | VARCHAR(20)   | NOT NULL          | ZIP/Postal code                           |
| country        | VARCHAR(50)   | NOT NULL          | Country, default 'USA'                    |
| profile_picture| VARCHAR(255)  |                   | URL to profile picture                    |
| join_date      | DATETIME      | NOT NULL          | Date student joined                       |
| last_active    | DATETIME      | NOT NULL          | Last activity timestamp                   |
| is_active      | BOOLEAN       | NOT NULL          | Account status flag                       |

### student_interests
| Field Name     | Type          | Constraints       | Description                               |
|----------------|---------------|-------------------|-------------------------------------------|
| id             | INT           | PK, AUTO_INCREMENT| Unique identifier                         |
| student_id     | VARCHAR(36)   | FK, NOT NULL      | Reference to students.id                  |
| interest       | VARCHAR(100)  | NOT NULL          | Interest name                             |

### student_achievements
| Field Name     | Type          | Constraints       | Description                               |
|----------------|---------------|-------------------|-------------------------------------------|
| id             | INT           | PK, AUTO_INCREMENT| Unique identifier                         |
| student_id     | VARCHAR(36)   | FK, NOT NULL      | Reference to students.id                  |
| achievement    | VARCHAR(255)  | NOT NULL          | Achievement description                   |

### moderators
| Field Name     | Type          | Constraints       | Description                               |
|----------------|---------------|-------------------|-------------------------------------------|
| id             | VARCHAR(36)   | PK, NOT NULL      | UUID for moderator                        |
| first_name     | VARCHAR(50)   | NOT NULL          | Moderator's first name                    |
| last_name      | VARCHAR(50)   | NOT NULL          | Moderator's last name                     |
| email          | VARCHAR(100)  | NOT NULL, UNIQUE  | Moderator's email address                 |
| phone          | VARCHAR(20)   | NOT NULL          | Moderator's phone number                  |
| role           | ENUM          | NOT NULL          | Role: 'admin', 'content_moderator', 'general_moderator' |
| join_date      | DATETIME      | NOT NULL          | Date moderator joined                     |
| last_active    | DATETIME      | NOT NULL          | Last activity timestamp                   |
| is_active      | BOOLEAN       | NOT NULL          | Account status flag                       |

### moderator_permissions
| Field Name     | Type          | Constraints       | Description                               |
|----------------|---------------|-------------------|-------------------------------------------|
| id             | INT           | PK, AUTO_INCREMENT| Unique identifier                         |
| moderator_id   | VARCHAR(36)   | FK, NOT NULL      | Reference to moderators.id                |
| permission     | VARCHAR(50)   | NOT NULL          | Permission name                           |

### moderator_assigned_areas
| Field Name     | Type          | Constraints       | Description                               |
|----------------|---------------|-------------------|-------------------------------------------|
| id             | INT           | PK, AUTO_INCREMENT| Unique identifier                         |
| moderator_id   | VARCHAR(36)   | FK, NOT NULL      | Reference to moderators.id                |
| area           | VARCHAR(50)   | NOT NULL          | Area of responsibility                    |

### announcements
| Field Name     | Type          | Constraints       | Description                               |
|----------------|---------------|-------------------|-------------------------------------------|
| id             | VARCHAR(36)   | PK, NOT NULL      | UUID for announcement                     |
| title          | VARCHAR(100)  | NOT NULL          | Announcement title                        |
| content        | TEXT          | NOT NULL          | Announcement content                      |
| created_by     | VARCHAR(36)   | FK, NOT NULL      | Reference to moderators.id                |
| created_at     | DATETIME      | NOT NULL          | Creation timestamp                        |
| updated_at     | DATETIME      |                   | Last update timestamp                     |
| priority       | ENUM          | NOT NULL          | Priority: 'low', 'medium', 'high', 'urgent'|
| expiration_date| DATETIME      |                   | Expiration timestamp                      |
| is_active      | BOOLEAN       | NOT NULL          | Status flag                               |

### announcement_targets
| Field Name     | Type          | Constraints       | Description                               |
|----------------|---------------|-------------------|-------------------------------------------|
| id             | INT           | PK, AUTO_INCREMENT| Unique identifier                         |
| announcement_id| VARCHAR(36)   | FK, NOT NULL      | Reference to announcements.id             |
| target_type    | ENUM          | NOT NULL          | Type: 'all', 'students', 'moderators', 'specific_grades', 'specific_regions' |
| target_value   | VARCHAR(50)   |                   | Specific target value if applicable       |

### announcement_attachments
| Field Name     | Type          | Constraints       | Description                               |
|----------------|---------------|-------------------|-------------------------------------------|
| id             | INT           | PK, AUTO_INCREMENT| Unique identifier                         |
| announcement_id| VARCHAR(36)   | FK, NOT NULL      | Reference to announcements.id             |
| attachment_url | VARCHAR(255)  | NOT NULL          | URL to attachment                         |

### opportunities
| Field Name         | Type          | Constraints       | Description                           |
|--------------------|---------------|-------------------|---------------------------------------|
| id                 | VARCHAR(36)   | PK, NOT NULL      | UUID for opportunity                  |
| title              | VARCHAR(100)  | NOT NULL          | Opportunity title                     |
| description        | TEXT          | NOT NULL          | Opportunity description               |
| type               | ENUM          | NOT NULL          | Type of opportunity                   |
| organization       | VARCHAR(100)  | NOT NULL          | Organization offering opportunity     |
| city               | VARCHAR(50)   |                   | City location                         |
| state              | VARCHAR(50)   |                   | State/Province location               |
| country            | VARCHAR(50)   |                   | Country location                      |
| is_remote          | BOOLEAN       | NOT NULL          | Whether opportunity is remote         |
| application_deadline| DATETIME     |                   | Application deadline                  |
| compensation       | VARCHAR(100)  |                   | Compensation details                  |
| contact_email      | VARCHAR(100)  | NOT NULL          | Contact email                         |
| contact_phone      | VARCHAR(20)   |                   | Contact phone                         |
| website_url        | VARCHAR(255)  |                   | Website URL                           |
| application_url    | VARCHAR(255)  |                   | Application URL                       |
| posted_by          | VARCHAR(36)   | FK, NOT NULL      | User who posted (student/moderator)   |
| posted_at          | DATETIME      | NOT NULL          | Posting timestamp                     |
| updated_at         | DATETIME      |                   | Last update timestamp                 |
| approval_status    | ENUM          | NOT NULL          | Status: 'pending', 'approved', 'rejected', 'archived' |
| approved_by        | VARCHAR(36)   | FK                | Reference to moderators.id            |
| approved_at        | DATETIME      |                   | Approval timestamp                    |
| is_active          | BOOLEAN       | NOT NULL          | Status flag                           |

### opportunity_requirements
| Field Name      | Type          | Constraints       | Description                            |
|-----------------|---------------|-------------------|----------------------------------------|
| id              | INT           | PK, AUTO_INCREMENT| Unique identifier                      |
| opportunity_id  | VARCHAR(36)   | FK, NOT NULL      | Reference to opportunities.id          |
| requirement     | VARCHAR(255)  | NOT NULL          | Requirement description                |

### opportunity_interested_students
| Field Name      | Type          | Constraints       | Description                            |
|-----------------|---------------|-------------------|----------------------------------------|
| id              | INT           | PK, AUTO_INCREMENT| Unique identifier                      |
| opportunity_id  | VARCHAR(36)   | FK, NOT NULL      | Reference to opportunities.id          |
| student_id      | VARCHAR(36)   | FK, NOT NULL      | Reference to students.id               |
| expressed_at    | DATETIME      | NOT NULL          | When interest was expressed            |

### messages
| Field Name     | Type          | Constraints       | Description                               |
|----------------|---------------|-------------------|-------------------------------------------|
| id             | VARCHAR(36)   | PK, NOT NULL      | UUID for message                          |
| sender_id      | VARCHAR(36)   | FK, NOT NULL      | User who sent the message                 |
| recipient_id   | VARCHAR(36)   | FK, NOT NULL      | User who received the message             |
| content        | TEXT          | NOT NULL          | Message content                           |
| sent_at        | DATETIME      | NOT NULL          | Sending timestamp                         |
| read_at        | DATETIME      |                   | Reading timestamp                         |
| is_read        | BOOLEAN       | NOT NULL          | Read status flag                          |

### message_attachments
| Field Name     | Type          | Constraints       | Description                               |
|----------------|---------------|-------------------|-------------------------------------------|
| id             | INT           | PK, AUTO_INCREMENT| Unique identifier                         |
| message_id     | VARCHAR(36)   | FK, NOT NULL      | Reference to messages.id                  |
| attachment_url | VARCHAR(255)  | NOT NULL          | URL to attachment                         |

## Indexing Strategy

- Primary keys on all id fields
- Foreign key indexes on all reference fields
- Indexes on frequently queried fields:
  - students: email, school, grade
  - moderators: email, role
  - opportunities: type, organization, approval_status, application_deadline
  - announcements: created_at, priority, is_active

## Constraints and Relationships

1. students ←→ student_interests (one-to-many)
2. students ←→ student_achievements (one-to-many)
3. moderators ←→ moderator_permissions (one-to-many)
4. moderators ←→ moderator_assigned_areas (one-to-many)
5. moderators ←→ announcements (one-to-many) via created_by
6. announcements ←→ announcement_targets (one-to-many)
7. announcements ←→ announcement_attachments (one-to-many)
8. opportunities ←→ opportunity_requirements (one-to-many)
9. opportunities ←→ opportunity_interested_students (one-to-many)
10. messages ←→ message_attachments (one-to-many)
