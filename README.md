# Next.js 15 App - Intermittent Counter Reset Issue

This repository demonstrates an intermittent counter reset problem in a Next.js 15 application. The counter in the About page is supposed to reset to 0 when the page is remounted, but this behavior is inconsistent.

## Problem Description

The `About` page uses `useEffect` hook to update a counter every second.  While it generally works as expected, sometimes when navigating away and returning to the `About` page, the counter continues from where it left off instead of restarting at 0. This erratic behavior makes the application unreliable.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to the `/about` page.
5. Observe the counter incrementing.
6. Navigate to the `/` page.
7. Navigate back to `/about`.
8. Observe whether the counter restarts from 0 or continues from where it left off (inconsistent behavior).

## Solution

The solution involves ensuring proper cleanup in the `useEffect` hook and potentially using a state management solution for better consistency across navigation.