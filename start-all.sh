#!/bin/bash

# Khởi động ứng dụng Tauri
npm run run tauri dev &

# Khởi động PocketBase
cd backend-pb-demo && ./pocketbase serve