## Using the API

This API allows you to [briefly describe what your API does].

**Installation**

1. Install the necessary dependencies:

   ```bash
   npm install nightback-ia-integration 
   ```

**Usage**

1. Import the API:

   ```javascript
   import { IaConnection } from 'nightback-ia-integration;
   ```

2. How use:

   ```javascript
   // Example:
   
   async function main() {
   const config = await import('./config.json', { assert: { type: 'json' } });
      const ApiKey = config.ApiKey;
      IaConnection("gemini-2.0-flash", "explique a revolução francesa", ApiKey);
   }

**How contribute**
1. Clone this respository using
``` bash
$git clone danieldeazevedo/nightback-ia-integration ```

Modify and make some changes in code and create a pull request

