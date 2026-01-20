# MVP Interface Plan for Real Estate SaaS

Based on the project requirements for a Real Estate SaaS MVP, we need to implement the following core modules: User Authentication, Property Management, and Client Inquiries.

## User Review Required

> [!IMPORTANT]
> The [User](file:///Users/zhangrui/Desktop/Projects/Real%20Estate%20SaaS/real-estate-backend/src/main/java/com/example/realestatebackend/entity/User.java#8-17) entity currently has `password` and `email` commented out. We will uncomment these to support authentication.

## Proposed Interfaces

### 1. Authentication Module (`AuthController`)
Basic authentication for agents/admins.

- **Register**: `POST /auth/register`
    - Input: `username`, `password`, `email`, `role` (optional)
- **Login**: `POST /auth/login`
    - Input: `username`, `password`
    - Output: JWT Token or Session ID

### 2. Property Module (`PropertyController`)
Core functionality to manage real estate listings.

- **Create Property**: `POST /properties`
    - Input: `title`, `description`, `price`, `address`, `type` (Rent/Sale), `area`, `bedrooms`, `bathrooms`
- **List Properties**: `GET /properties`
    - Input: `page`, `size`, `type` (filter), `minPrice`, `maxPrice`
- **Get Property Detail**: `GET /properties/{id}`
- **Update Property**: `PUT /properties/{id}`
- **Delete Property**: `DELETE /properties/{id}`

### 3. Inquiry Module (`InquiryController`)
Allow potential buyers/renters to contact regarding a property.

- **Submit Inquiry**: `POST /inquiries`
    - Input: `propertyId`, `name`, `email`, `phone`, `message`
- **List Inquiries**: `GET /inquiries` (Agent/Admin only)

## Database Changes
We will need to create the following entities if they don't exist:

### `Property` Entity
- `id` (Long, PK)
- `title` (String)
- `description` (Text)
- `price` (BigDecimal)
- `address` (String)
- `type` (Enum: SALE, RENT)
- `status` (Enum: AVAILABLE, SOLD)
- `agent_id` (Long, FK to User)

### `Inquiry` Entity
- `id` (Long, PK)
- `property_id` (Long, FK)
- `user_name` (String)
- `user_contact` (String)
- `message` (Text)
- `created_at` (DateTime)

## Verification Plan

### Manual Verification
1.  **Auth**: Use `curl` or Postman to register a new user and login to get a token.
2.  **Property Flow**:
    -   Create a property using the token.
    -   List properties to verify it appears.
    -   Update the price.
    -   Delete the property.
3.  **Inquiry Flow**:
    -   Submit an inquiry for a property ID.
    -   Verify the inquiry is saved in the database.
