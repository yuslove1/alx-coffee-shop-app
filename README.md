# alx-coffee-shop-app

This repository contains my implementation of the Coffee Shop App, a mobile application designed by Nam Design (@namdesign) on Figma. This project was part of a mobile development challenge focused on translating UI designs into a functional React Native application.

## Project Overview

The goal of this project was to build a fully functional mobile app based on the provided Figma design.  This involved setting up an Expo project with TypeScript and NativeWindCSS, extracting UI assets, implementing all screens according to the design, and documenting the development process and challenges.

## Technologies Used

* **React Native:**  The core framework for building the mobile application.
* **Expo:**  Used for simplifying the development process and providing access to native device features.
* **TypeScript:**  Implemented for static typing and improved code maintainability.
* **NativeWindCSS:**  Used for styling the application, leveraging the utility-first approach of Tailwind CSS within the React Native environment.

## Design

The app's design was created by Nam Design (@namdesign) and is available on Figma.  The design provided a comprehensive visual guide for the application's layout, components, and styling.

## Development Process and Challenges

Building this application provided valuable insights into React Native development and presented several learning opportunities.

* **Tailwind CSS and React Native:**  While integrating Tailwind CSS with React Native using NativeWindCSS was generally smooth, I discovered that some Tailwind utilities, such as grid, are not fully supported in React Native.  This required finding alternative approaches for achieving the desired layout.
* **Font Integration:**  One of the most significant challenges was integrating custom fonts.  While the fonts displayed correctly when running the app in a web browser, they did not render properly on mobile devices. This issue required further investigation and troubleshooting to ensure consistent font rendering across platforms.
* **Dynamic Routing with Expo:**  Setting up dynamic routing within the Expo environment presented a learning curve.  While Expo's directory structure resembles that of Next.js, adapting to the specific routing mechanisms within Expo required some adjustments.  However, this experience provided valuable exposure to navigation patterns in React Native.
* **Translating React Concepts to React Native:**  Applying my existing React knowledge to React Native generally facilitated the development process.  However, there were nuances and platform-specific considerations that required adaptation and learning.

## Project Setup

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/yuslove/alx-coffee-shop-app.git`
2. Navigate to the project directory: `cd alx-coffee-shop-app`
3. Install dependencies: `npm install`
4. Start the development server: `npm expo start`

## Future Improvements

* **Resolve Font Rendering Issue:**  Prioritize resolving the font rendering issue on mobile devices to ensure consistent visual presentation across platforms.
* **Other scree Implement:** Fully implement of other screens within the app.
* **Refine Styling:**  Further refine the styling to perfectly match the Figma design.
* **Add Functionality:**  Implement the core functionality of the coffee shop app, such as ordering, payment, and user authentication.