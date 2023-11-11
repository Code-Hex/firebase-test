# This repository is testing purpose for [@hono/firebase-auth](https://github.com/honojs/middleware)


```sh
# resolve package dependencies
$ pnpm i

# start 
$ pnpm run start-firebase-emulator

# make test account
$ curl -X POST -H "Content-Type: application/json" \
     --data '{"email":"test@example.com", "password":"password", "returnSecureToken":true}' \
     "http://localhost:9099/identitytoolkit.googleapis.com/v1/accounts:signUp?key=fake-api-key"

# startup a cloudflare worker on your localhost as localhost:8787
$ pnpm run wrangler dev

# check behavior
$ FIREBASE_TOKEN=$(curl -s -X POST -H "Content-Type: application/json" \
    --data '{"email":"test@example.com", "password":"password", "returnSecureToken":true}' \
    "http://localhost:9099/identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=fake-api-key" | jq .idToken -r) && \
    curl -H "Authorization: Bearer $FIREBASE_TOKEN" http://localhost:8787/test
```

## Author

[@codehex](https://x.com/codehex)