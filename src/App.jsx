import { useState } from "react";

import "./App.css";
import { Button } from "./components/ui/button";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/app-layout";
import Landing from "./pages/landing";
import OnBoarding from "./pages/onboarding";

import JobListing from "./pages/job-listing";
import JobPage from "./pages/job";
import PostJobs from "./pages/post-jobs";
import SavedJobs from "./pages/saved-jobs";
import MyJobs from "./pages/my-jobs";
import { ThemeProvider } from "./components/ui/theme-provider";
import ProtectedRoute from "./components/ui/protected-route";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Landing />,
        },
        {
          path: "/onboarding",
          element: (
            <ProtectedRoute>
              <OnBoarding />
            </ProtectedRoute>
          ),
        },
        {
          path: "/jobs",
          element: (
            <ProtectedRoute>
              <JobListing />
            </ProtectedRoute>
          ),
        },
        {
          path: "/job/:id",
          element: (
            <ProtectedRoute>
              <JobPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/post-job",
          element: (
            <ProtectedRoute>
              <PostJobs />
            </ProtectedRoute>
          ),
        },
        {
          path: "saved-jobs",

          element: (
            <ProtectedRoute>
              <SavedJobs />
            </ProtectedRoute>
          ),
        },
        {
          path: "/my-jobs",
          element: (
            <ProtectedRoute>
              <MyJobs />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
