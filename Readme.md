## how to use this

### 1. install dependency
```sh
npm i
```

### 2. copy the key.json to root folder
key.json is retrieved when logging to https://console.cloud.google.com and need to enable domain wide for impersonating it.
im git ignoring it for security reason, you can request it to me directly.

### 3. running and testing
```sh
npm run dev
```

```sh
curl -x GET http://localhost:3000/send-email
```

[result](exampleresult.png)