# teamtreehouse_q-as
small challenges from questions asked on teamtreehouse forum

I try to spend some time on a daily basis answering questions on the team treehouse forum. I find that it's a good not only to refresh
my memory on various concepts and projects but, also to trouble shoot code. On occasion there are ideas that someone has that they
can't quite figure out or just banter about. I have pretty much just answered those questions and moved on but, decided to start keeping 
a repository of those answers

1) Shuffle It Up (use the console to see the results no HTML) - The idea of this file was to have a group of users or people, and a group of products. The products would be 
randomly given to the people. However, when the products are randomly given out, each item must appear at least once in a users
list. There were suggestions of just going through the product list and randomly selecting a user to give the item to but, the problem
is then you could end up with uneven lists and, as each user was to end up with a set of 10 random items, I felt this was a less random
way of solving the problem.

To keep it truly random, I took the original shuffle function and rewrote the rest of the code. I created an array of arrays and sent it 
to a function to check if everything was actually in. To accomplish this, I concatenated the array, sorted the array in order and then
checked each item one at a time. If it isn't in the final array it gets pushed, else if it is we just move on. So when all the array 
is checked, we know if everything was in or not based on the length of the final array. This is because if all items aren't in, the final
array will be less than the products list. If that is the case, we get a new set of randomly shuffled items.

The issue with this approach is that the more products to give the users, the time taken to actually find a solution becomes longer 
and in some cases much longer. I tested for smaller lists up to 24 but, even moving to a list of 30 items takes a noticeable amount of 
time. 
