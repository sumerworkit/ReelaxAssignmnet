# Reelax Figma Assignment

A responsive React JS implementation of the Reelax checkout and billing screen from the provided Figma design.

## Live Demo

Netlify link: https://reelaxassignment.netlify.app/

## Overview

This project recreates the checkout UI shown in the Reelax Figma assignment. The screen includes a top navigation bar, billing information form, order summary card, wallet balance section, coupon selection UI, and payment call-to-action.

The implementation focuses on:

- Pixel-focused layout based on the Figma reference
- Clean component-based React structure
- Responsive behavior for desktop, tablet, and mobile screens
- Reusable UI components for buttons, form fields, wallet card, and coupons
- Production-ready Vite build setup

## Tech Stack

- React JS
- Vite
- CSS
- Lucide React icons
- Netlify for deployment

## Features

- Responsive checkout page
- Billing information form
- Order summary panel
- Startup plan pricing card
- Wallet balance section
- Coupon input and coupon selection
- Proceed to payment button
- Mobile-friendly stacked layout

## Project Structure

```txt
reelax-assignment/
├── public/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   └── FormField.jsx
│   │   ├── checkout/
│   │   │   ├── BillingForm.jsx
│   │   │   ├── CouponOption.jsx
│   │   │   ├── OrderSummary.jsx
│   │   │   └── WalletCard.jsx
│   │   └── layout/
│   │       └── Header.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── netlify.toml
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

Clone the repository:

```bash
git clone <your-github-repository-url>
cd REELAX-ASSIGNMENT
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```txt
http://localhost:5173/
```

## Build for Production

```bash
npm run build
```

The production files will be generated inside the `dist` folder.

## Netlify Deployment

Use these settings on Netlify:

```txt
Build command: npm run build
Publish directory: dist
```

If the project is inside a folder named `REELAX-ASSIGNMENT` in the GitHub repository, set:

```txt
Base directory: REELAX-ASSIGNMENT
```

The project also includes a `netlify.toml` file for Netlify configuration.

## Assignment Requirements Covered

- React JS implementation
- Component-based programming
- Responsive layout
- Clean folder structure
- Production build support
- Netlify deployment support

## Author

Created for the Reelax React JS Figma assignment.
