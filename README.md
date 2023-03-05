# Setup

1. To install dependencies and make the app ready for development/build, run `npm install`.
2. The application relies on the OpenWeather API, which requires an API key. The app will look for this in a `.env` file in the project root, with the key defined as `VITE_OPEN_WEATHER_API_KEY=<key goes here>`. An API key can be obtained for free from [the OpenWeather website](https://home.openweathermap.org/users/sign_up).
3. Run the application with `npm run dev`, or build for production with `npm run build`. **PLEASE NOTE** that the API key will be exposed as plain text in the built files.

# Testing

There are som rudimentary unit tests included. Run them with `npm run test`.

# Process

Normally, when starting out with something like this, I would have started building the basic structure of the UI. In this case, I ended up starting with the API to familiarize myself with it. This was mainly because I have been working on a UI library for so long (at my current job) that I was afraid I had become rusty using APIs.

The API turned out to be pretty simple (though the documentation wasn't the best), but in any case I started implementing the local API. I chose tanstack-query for handling requests, as that gives me loading and error states, plus caching and other useful features.

After implementing types and methods for the API, I created some basic components for showing te information shown in the sketches. I started out with some basic structure, but minimal styles.

It was at this point that I realized that what _had_ gotten rusty was my experience working without a design/system and component library. After some mucking about I decided to use Tailwind CSS, as it is perfect for rapid visual prototyping. Still, I ended up with pretty minimal styling.

I chose to implement routing using React Router, as I have used it extensively in earlier projects. The routing is pretty basic, and is one of the points I would have liked to work a bit more on before submitting.

# Areas for improvement

Turns out four hours isn't a lot of time (even when you stretch it out a bit). Thus, therre are many things I would have liked to have made better.

First off, the handling of loading states and errors is very rudimentary. Especially considering all the options at my disposal through the tools I chose. Some more granular state for the loading, and more informative error messages, would have been nice.

I did not have the time to implement user settings, but I made sure to set up a framework for it in the form of a UserData context with saved locations and unit preferences. Implementing the settings menu in the header would have been an obvious next step.

Speaking of the header, I completely forgot to make the header text update. I also realize that my data fetching is maybe a bit too decentralized for this. Given more time, I would probably have refactored a bit and made better use of the loader-API in React Router for distributing the data in a better way. I've used this API a bit though Remix, and I like the approach a lot.

Testing is also an area where I didn't get as much done as I wanted. There aren't really that many singular functions to unit test, but there could definitely have been some more. What _is_ lacking are better integration tests. I'm currently not testing the pages or the display components at all (except for the InfoItem component), which isn't great. I just didn't have the time in the end to set up mocking. I haven't used Vite + Vitest that much, so I spent more time than I would have liked figuring stuff out.

Apart from all the technical stuff, the visuals could also use som more love. Some transitions/animations might be the first step to make the app feel better in use, but the entire design could use a reimagining!
