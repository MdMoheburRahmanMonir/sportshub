# ⚽ SportsHub (Assignment Project)

# Purpose

## This app for rent soprt

## A full-stack sports facility booking system built using Next.js, Node.js, Express.js, and MongoDB.

## This project allows users to browse sports facilities, filter them, and book available time slots.

# 🚀 Live Demo
# 👉 https://[mohebur-rahman.vercel.app](https://sportshub-nu.vercel.app/)



## Features
# Sports facilities booking system
# Sports space ranting system like facebook post. 
# Sports post delete edit facilities.
# booking facilities edit and delete system
# Using JWT to verify user to backend.
# BetterAuth login system.
# User login system with google or email & pass. 
# User Profile update system



# 🎯 Project Purpose

## This project was built as an assignment submission to demonstrate:


# What I Learned
## Next.js App Router (Server + Client Components)
## REST API integration
## MongoDB CRUD operations
## Authentication system (BetterAuth)
## Server Actions vs Client handling
## Deployment on Vercel

# Full-stack web development Dependencies 
## Authentication system
## Database operations with MongoDB
## Modern UI using Tailwind CSS
## ✨ Features
## 🔐 User authentication (BetterAuth)
## 🏟️ View all sports facilities
## 🔍 Filter facilities by type
## 📅 Booking system with time slots
## 👤 User dashboard (My Bookings)
## ➕ Add new facilities (admin/owner)
## 📱 Fully responsive design
## ⚡ Fast performance with Next.js App Router


# 🛠️ Frontend Tech Stack 
## Next.js
## React
## Tailwind CSS
## React Icons
## Framer Motion
## React Toastify
## Backend
## Node.js
## Express.js
## MongoDB
## BetterAuth

# Project Structure
## sportshub/
## ## │
## ├── app/                          # Next.js App Router (Frontend Routes)
## │   │
## │   ├── layout.js                 # Root layout
## │   ├── page.js                   # Home page
## │   │
## │   ├── allfacilities/           # Facilities listing page
## │   │   ├── page.jsx
## │   │   └── FilterSection.jsx
## │   │
## │   ├── facilities/
## │   │   ├── page.jsx             # optional listing page
## │   │   └── [id]/                # Dynamic route (single facility)
## │   │       └── page.jsx
## │   │
## │   ├── addfacilities/
## │   │   └── page.jsx             # Add new facility form
## │   │
## │   ├── mybookings/
## │   │   └── page.jsx             # User bookings page
## │   │
## │   ├── managemyfacilities/
## │   │   └── page.jsx             # Owner dashboard
## │   │
## │   ├── profile/
## │   │   └── page.jsx             # User profile
## │   │
## │   ├── login/
## │         └── page.jsx             # Login page