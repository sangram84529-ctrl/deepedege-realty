# DeepEdge Realty

DeepEdge Realty is a premium, responsive real-estate platform built with Next.js, TypeScript, Tailwind CSS and Supabase. It includes public property discovery, live database listings, property detail galleries, enquiry capture, Supabase Auth-protected administration, property CRUD, image storage, projects, SEO basics and free-deployment configuration.

## Stack
- Next.js 15 + TypeScript
- Tailwind CSS
- Supabase Database, Auth and Storage
- GitHub + Cloudflare deployment target

## Local setup
1. Install Node.js 20+.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local`.
4. Add your Supabase URL and anon/publishable key.
5. Run `supabase/migrations/001_initial.sql` in Supabase SQL Editor.
6. Create an email/password user in Supabase Auth.
7. Copy that user's UUID and run the commented admin profile INSERT at the bottom of the SQL file.
8. Run `npm run dev`.

## Admin
Open `/admin/login`. Only an authenticated user whose `profiles.role` is `admin` can access admin routes. Credentials are never hardcoded.

## Property images
The SQL creates the public `property-images` bucket. Admins can upload multiple images, choose a primary image and delete images from the property editor.

## Projects
Admins can publish projects from `/admin/projects`; published projects appear on `/projects` and have dynamic detail pages.

## Contact configuration
Set `NEXT_PUBLIC_PHONE`, `NEXT_PUBLIC_WHATSAPP` and `NEXT_PUBLIC_EMAIL` in `.env.local`. Replace the placeholder defaults before launch.

## Sample data
The homepage fallback cards are explicitly labelled demo listings. They are not represented as live database properties. Add verified listings through the admin area.

## Deployment
Push to GitHub and connect the repository to a compatible Cloudflare Pages/Next.js deployment. Configure the same public environment variables in the deployment settings. Supabase remains the database, Auth and Storage provider.

## Production checklist
- Use a real business phone/WhatsApp/email.
- Create your own Supabase admin user.
- Run the SQL migration.
- Test property creation, image upload, enquiry submission and admin login.
- Add verified listings only.
- Keep secret/service-role keys server-side and never commit `.env.local`.
