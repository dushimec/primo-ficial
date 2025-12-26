# Primo Fiscal Partners Website

This is the official website for Primo Fiscal Partners, a financial services company.

## Environment Variables

The following environment variables need to be set up for the application to work properly:

### MongoDB Connection
- `MONGODB_URI`: MongoDB connection string
- `SKIP_DB_DURING_BUILD` (optional): set to `1` to prevent database access during build-time (useful when your DB is not accessible from the build environment or to avoid DNS SRV lookups during static generation)

Note: On Vercel, make sure `MONGODB_URI` is set in the project Environment variables for both Preview and Production (or set `SKIP_DB_DURING_BUILD=1` if you don't want builds to attempt DB connections).

### NextAuth Configuration
- `NEXTAUTH_URL`: The base URL of your website
- `NEXTAUTH_SECRET`: A secret key for NextAuth (at least 32 characters)

### Email Configuration
- `EMAIL_HOST`: SMTP server host (e.g., smtp.gmail.com)
- `EMAIL_PORT`: SMTP server port (e.g., 587)
- `EMAIL_SECURE`: Whether to use TLS (true/false)
- `EMAIL_USER`: Email username/address
- `EMAIL_PASSWORD`: Email password or app password
- `EMAIL_TO`: Admin email address to receive notifications

### Admin Setup
- `ADMIN_SETUP_KEY`: A secure key to allow initial admin user creation

## Getting Started

1. Clone the repository
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Create a `.env.local` file with the required environment variables
4. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Initial Admin Setup

To create the initial admin user, make a POST request to `/api/admin/setup` with the following:

Headers:
\`\`\`
x-setup-key: your-admin-setup-key
Content-Type: application/json
\`\`\`

Body:
\`\`\`json
{
  "name": "Admin User",
  "email": "admin@example.com",
  "password": "secure-password",
  "role": "admin"
}
\`\`\`

## Deployment

The easiest way to deploy this application is using the [Vercel Platform](https://vercel.com).

1. Push your code to a Git repository (GitHub, GitLab, BitBucket)
2. Import the project in Vercel
3. Add the required environment variables in the Vercel project settings
4. Ensure you are using an up-to-date, patched version of `next` before deploying (Vercel may block vulnerable releases). Run `npm install` after updating `package.json`.
5. Deploy
# primo-ficial
