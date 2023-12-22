We can make it official by now, this is an observational study. Therefore, we define a treatment and control group. The treatment group will be the paths taken by the users that have a target article classified in Europe and the control group will be those paths whose target article is not classified in Europe, in other words, the rest of the world. 

Let's dive into the paths. When a player starts a game, a start and goal article will be automatically given…

[ADD GRAPHS]

Of course, we still observe a majority of representation of Europe. However, we are interested in how people play, after all, start and finish articles are not related to players, they just get them. If we observe the paths taken by users we see the following

[ADD GRAPHS]

Now we have something worth studying. In this first naive analysis, it seems that players do not tend to navigate through articles classified in Europe and do not seem to achieve better results either if the target article is also classified in Europe. 

But, is there a significant difference in the success rate? We compute a statistical t-test between the two groups and… bingo! There is a difference.

[PLOT RESULT T-TEST]

… or is it? As we have seen throughout this course, we cannot just draw conclusions over the bulk of the data, we shall perform matching. On what? Out of common sense, categories may be a good choice, one could think that it is not fair to compare a path starting from Art and ending in Music with a path that starts from Religion and ends in Science. Also, if we want to study the success rate, it is not fair either to compare paths that differ in their optimal solution (shortest path). This is why we match on:

* Category of the starting article
* Category of the target article
* Shortest path

Again we ask ourselves, is it enough? As this is a fairly large dataset, we want to make sure we balance the dataset further, so we decide to compute the propensity score on some observed covariates via logistic regression. These must not be related with the way players behave because that is actually what we want to analyze, so we come up with the following: 

* Length of the starting article
* Length of the target article
* PageRank of the starting article
* PageRank of the target article

To perform the matching we need a similarity function between two nodes in the graph. Based on the exercises seen in the course, we compute it as:

<math>similarity(x,y) = 1 - |propensity_score(x) - propensity_score(y)|</math>

And we add weights equal to this similarity to the matching.
