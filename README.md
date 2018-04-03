# T0rn

T0rn is a Social Engineering template I had created like 4 years ago. The aim of the template was to hide in plain-sight when hosted in free hosting platforms.

## Current Set UP

For demo purposes, I've cloned a Facebook login page, a Debian page and another random HTML page; The Debian page acts as the index file of the folder and the other two files I've saved them with `.jpg` extension to obfuscate from crawlers and also avoiding free web hosting accounts being locked.

So to trick a user, you have to craft a nice URL that  `Security_Check.php` can understand, (in this case I've created `Download_latest_Series_and_Movies.php` (which you can rename). The reason for this is to redirect the targeted user to a login page (in this case FB page) then dump the credentials in `error.txt` file using the `push.php` file then do a redirection to their legit Facebook account. 

Unwanted guest/crawlers/fuzzers will be redirect to the random HTML page and will never access the spoofed Facebook login page. So by hiding the Facebook login page with a `.jpg` extension instead of `HTM`, we hide the phishing content in plain-sight.

FYI :  **You are not limited to Facebook only! Clone any website you want and be creative ;) wink!*

## Example

Host on your Localhost webserver and try accessing the local web

1. http://localhost
2. http://localhost/Download_latest_Series_and_Movies.php
3. http://localhost/Download_latest_Series_and_Movies.php?code=Black_Panther

You can rename `Download_latest_Series_and_Movies.php` to whatever you want and edit the code in the file to whatever you want (should be a string though) as well.


**NB: For Pen-testing/Educational use only!**
