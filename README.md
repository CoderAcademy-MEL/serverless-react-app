An example of a React app deployed with a serverless API using Zeit Now.

The deployed app can be found at https://serverless-react.now.sh/

Some things to note:
- To start the app in development run `npm start`, you'll also need a `.env` file that includes a localhost mongo DB_URL
- To deploy the app you'll need a `now.json` that includes a mongo db atlas url in the env part of the json file