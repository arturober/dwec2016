##Unit 3 (Angular), part 5

These are the instructions for each project/file in this section.

###angular-products/
Same as part 4 (no changes in database or services). It's now integrated with **ng-bootstrap** and when you try to leave
the Product's Edit component, if the form is dirty, it will show a Boostrap modal window to ask if you want to leave.

Don't forget to configure your web server's url in **src/app/app.constants.ts**.

###angular-material/
Example of integration with **@angular/material** plugin.

##angular-maps/
Example of integration with **angular2-google-maps** plugin. Go to app.module.ts and configure your GMaps API key:

```javascript
AgmCoreModule.forRoot({
    apiKey: 'Your API key'
})
``` 

###angular-login/
This project contains an example of a register and login system using Facebook, Google and the app's own system.
The token is sent automatically using **angular2-jwt** AuthHttp's service.

Go to **src/app/app.constants.ts** and configure your Google's ID for your project here.
You can create a project here: https://console.developers.google.com/. You must create a Google OAuth client ID (Create credentials). 
Don't forget to activate the **Google+ API**. Also add http://localhost:4200 to the list of authorized JavaScript origins.

In the same file configure your Facebook ID. You can create one at https://developers.facebook.com/. Don't forget to include http://localhost:4200.

Also configure your web server's url there:

```javascript
export const SERVER_URL = "http://192.168.65.128/angular-login";
export const GOOGLE_CLIENT_ID = "YOUR GOOGLE OAUTH2 ID";
export const FACEBOOK_ID = "YOUR FACEBOOK APP ID";
```

###angular-login.zip 
Contains web services for the angular-login project (unzip in your **web server's** folder). 

Go to **app/config/services.php** (at the end of the file) and insert your facebook App ID and APP secret. 
And also the API version. You can configure them (creating a project) at https://developers.facebook.com/ (must be the same project in the server and client).

```php
$di->setShared("facebook", function() {
    return new Facebook\Facebook([
        'app_id' => 'YOUR FACEBOOK APP ID',
        'app_secret' => 'YOUR FACEBOOK APP SECRET',
        'default_graph_version' => 'v2.8',
    ]);
});
```

###angular_login.sql 
Contains the database for the angular-login project
