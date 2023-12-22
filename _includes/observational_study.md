## Naive Analysis

We can make it official by now, this is an observational study. Therefore, we define a treatment and control group. The treatment group will be the paths taken by the users that have a target article classified in Europe and the control group will be those paths whose target article is not classified in Europe, in other words, the rest of the world. 

Let's dive into the paths. When a player starts a game, a start and goal article will be automatically given…

{% include plots/finished_path_percentage_per_article_continent_bar.html %}

Of course, we still observe a majority of representation of Europe. However, we are interested in how people play, after all, start and finish articles are not related to players, they just get them. If we observe the paths taken by users we see the following

Now we have something worth studying. In this first naive analysis, it seems that players do not tend to navigate through articles classified in Europe and do not seem to achieve better results either if the target article is also classified in Europe. 

But, is there a significant difference in the success rate? We compute a statistical t-test between the two groups and… bingo! There is a difference.

{% include plots/paths_count_naive_map.html %}

## Matching

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

And we add weights equal to this similarity to the matching. In the end, the directed acyclic graph of our observational study looks like this.
<div>
    <img src="/assets/img/DAG.jpeg" />
</div>

In addition to the confounders considered in this analysis, there may be more factors that we are not controlling and may bias our analysis. One of these factors could be the participant as not all people who play Wikispeedia have the same knowledge about all categories. 
By not controlling this confounder, we could have two different participants with different knowledge, one in the treatment group and one in the control group. In this case, we would be controlling all the confounders mentioned before but the result will be biased as one of the participants would do better not because of the continent of the target article but because of its knowledge about that specific category.

{% include tabs.html %}

Another confounder that can bias our analysis is the date on which each path was played. The world changes very quickly and people are often more aware of events that happened recently. This is why a participant who played the game in 2008 can play very differently than one who played in 2012 as their focus is on different events. Our dataset contained date information, the problem is that from 2008 to 2011 only the completed paths were included, so our analysis would either be too biased or too incomplete. Therefore, we decided to not include it in the matching.

## Observational Study

Finally we can really draw some conclusions. Let's see…

{% include plots/paths_count_observe_map.html %}

There is no significance?! As we always say, no results are results. After performing matching we were able to balance the dataset so the results obtained were more trustful, and they show no significance, even if before it appeared to be. This shows that what can be perceived in a well named naive analysis is not a picture of reality but further analysis is needed.