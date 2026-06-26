# Modern Password Generator

A cross-platform (iOS, Android, web) password generator built with [Expo](https://expo.dev) and [expo-router](https://docs.expo.dev/router/introduction/). Generate strong passwords with configurable length and character sets, see a live strength score, and copy to the clipboard.

## Get started

1. Install dependencies

   ```bash
   yarn install
   ```

2. Start the app

   ```bash
   yarn start
   ```

   Then open it in the [Expo Go](https://expo.dev/go) app, an [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/), an [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/), or the web with `yarn web`.

## Scripts

| Command        | Description                          |
| -------------- | ------------------------------------ |
| `yarn start`   | Start the Expo dev server            |
| `yarn ios`     | Build and run on iOS                 |
| `yarn android` | Build and run on Android             |
| `yarn web`     | Run in the browser                   |
| `yarn test`    | Run the Jest test suite (watch mode) |
| `yarn lint`    | Run Expo lint                        |

## Project structure

```
src/
  app/         # expo-router routes (file-based routing)
  components/  # UI components
  hooks/       # password generation, scoring, clipboard, theming
  lib/         # core password generation logic (+ tests)
  constants/   # theme tokens
```

## License

See [LICENSE](./LICENSE).
