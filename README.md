# Setup

1. To install dependencies and make the app ready for development/build, run `npm install`.
2. The application relies on the OpenWeather API, which requires an API key. The app will look for this in a `.env` file in the project root, with the key defined as `VITE_OPEN_WEATHER_API_KEY=<key goes here>`. An API key can be obtained for free from [the OpenWeather website](https://home.openweathermap.org/users/sign_up).
3. Run the application with `npm run dev`, or build for production with `npm run build`. **PLEASE NOTE** that the API key will be exposed as plain text in the built files.
