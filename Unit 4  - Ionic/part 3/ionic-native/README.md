## Ionic app with native plugin examples

Run **npm install**. Before continuing we'll need to configure some constants and values.

Inside **src/app/constants.ts** you must configure these values (or their respective plugins won't work)

```typescript
// Key created for GMaps API (web version)
export const GMAPS_API_KEY="xxxxxxxxxxxxxx";
// ID generated when creating a new ad block in AdMob (interstitial)
export const ADMOB_INTERSTITIAL_ID="ca-app-pub-xxxxxxxxxx/yyyyyyyyy";
// CLIENT ID generated for Google Auth credentials (Web version)
export const GPLUS_WEB_CLIENT_ID="xxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com";
```

Then, go to the file **config.xml** and configure these values:

Google auth Client ID (Android version, reversed).

```xml
<plugin name="cordova-plugin-googleplus" spec="~5.1.1">
    <variable name="REVERSED_CLIENT_ID" value="com.googleusercontent.apps.xxxxxxxxxxxxxxxxxxxxxx" />
</plugin>
```

Facebook generated APP_ID.

```xml
<plugin name="cordova-plugin-facebook4" spec="~1.7.4">
    <variable name="APP_ID" value="xxxxxxxxxxxxxxx" />
    <variable name="APP_NAME" value="ionic-native" />
</plugin>
```

Finally run **ionic serve** (to compile) and **cordova prepare** to install plugins.