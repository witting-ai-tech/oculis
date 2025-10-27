# Witting Dashboard

A modern dashboard application built with Next.js, React, and Redux for managing cameras, users, roles, and detection zones

## Features

- **Camera Management**

  - Add, edit, and delete cameras
  - Configure camera 
  - Monitor camera status and sync state

- **User Management**

  - User authentication and authorization
  - Role-based access control
  - User activity tracking

- **Role Management**

  - Create and manage user roles
  - Set permissions and access levels
  - Assign roles to users

- **Detection Zones**

  - Create and manage detection zones
  - Configure zone types and alert levels
  - Link zones to cameras

- **Alert Center**
  - Real-time alert monitoring
  - Alert filtering and management
  - Alert history tracking

## Tech Stack

- **Frontend**

  - Next.js 14
  - React 18
  - Redux Toolkit
  - Tailwind CSS
  - Lucide Icons

- **State Management**
  - Redux for global state
  - React Query for server state
  - Context API for theme

## Project Structure

```
witting_dashboard/
├── app/
│   ├── components/           # Reusable UI components
│   ├── store/               # Redux store and slices
│   │   └── slices/          # Redux slices for different features
│   ├── camera-configuration/# Camera configuration pages
│   ├── users-and-roles/     # User and role management pages
│   ├── detection-zones/     # Detection zone management pages
│   └── alert-center/        # Alert management pages
├── public/                  # Static assets
└── styles/                  # Global styles
```

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- Docker (optional)

### Local Development

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/witting_dashboard.git
   cd witting_dashboard
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Docker Setup

1. Build the Docker image:

   ```bash
   docker build -t oculis-fe .
   ```

2. Run the container:

   ```bash
   docker run -p 3000:3000 oculis-fe
   ```

3. For EC2 :

   ```bash
   sudo docker run -d --name oculis-fe -p 80:80 --restart unless-stopped oculis-fe

   ```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_AUTH_CLIENT_ID=your_auth_client_id
```

## State Management

The application uses Redux for global state management with the following slices:

- **alertSlice**: Manages alert state and actions
- **cameraSlice**: Handles camera configuration and status
- **userSlice**: Manages user authentication and profile
- **roleSlice**: Handles role and permission management
- **detectionZoneSlice**: Manages detection zone configuration
- **dropdownSlice**: Controls dropdown menu states

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@witting.com or join our Slack channel.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Redux](https://react-redux.js.org/)
