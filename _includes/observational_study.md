## Naive Analysis

We can make it official by now, this is an observational study. Therefore, we define a treatment and control group. The treatment group will be the paths taken by the users that have a target article classified in Europe and the control group will be those paths whose target article is not classified in Europe, in other words, the rest of the world. 

Let's dive into the paths. When a player starts a game, a start and goal article will be automatically given and the goal is to reach the article. When achieved, this is what we will call a finished path. Now, which percentage of the paths are finished and also have a start or target article that belongs to Europe? Let’s find out if there is a difference between the other continents.

{% include plots/finished_path_percentage_per_article_continent_bar.html %}

Wow, that is a big difference! Almost all of the other continents have to sum up to get to the same number of paths that have a European start or target article. This makes a lot of sense, considering that Europe is the continent with the most articles.

While looking at the percentage of paths that are European and finished is quite interesting, we would also like to understand how people play and if they are more likely to be successful if the target article is from Europe. To study this, we computed a statistical t-test with the null hypothesis that the percentage of finished paths for Europe is the same as the rest of the continents.

We compute the statistical t-test between the two groups and… bingo! We get a p-value of 0.032 which is lower than 0.05. Therefore, if a path finishes in a European target article, it is more likely to be successful.

{% include plots/paths_count_naive_map.html %}

## Matching

… or is it? As we have seen throughout this course, we cannot just draw conclusions over the bulk of the data, we shall perform matching. On what? Out of common sense, categories may be a good choice, one could think that it is not fair to compare a path starting from Art and ending in Music with a path that starts from Religion and ends in Science. Also, if we want to study the success rate, it is not fair to compare paths that differ in their optimal solution (shortest path). This is why we match on:

* Category of the starting article
* Category of the target article
* Shortest path

Again we ask ourselves, is it enough? As this is a fairly large dataset, we want to make sure we balance the dataset further, so we decided to compute the propensity score on some observed covariates via logistic regression. These must not be related to the way players behave because that is actually what we want to analyze, so we come up with the following:

* Length of the starting article
* Length of the target article
* PageRank of the starting article
* PageRank of the target article

To perform the matching we need a similarity function between two nodes in the graph. Based on the exercises seen in the course, we compute it as:

<div>
    <img src="/assets/img/equation.svg" />
</div>

And we add weights equal to this similarity to the matching. In the end, the Directed Acyclic Graph (DAG) of our observational study looks like this:
<div>
    <img src="/assets/img/DAG.jpeg" />
</div>

Once we have defined our matching, we compute it and we check that all the confounders that we considered follow approximately the same distribution for the treating and control groups. In the following figure we will compare results before and after matching. Plots 1 and 2 correspond to the difference in the target's and start's category, plot 3 to the difference in the shortest path, plots 4 and 5 to the difference in the target's and start's PageRank and plots 6 and 7 to the difference in the target's and start's length. 

{% include tabs.html %}

Well... these are some strange results. First, why are the categories not the same, if we are matching on them? Our dataset contains several categories for each article, we don't mean subcategories, we mean a whole different branch of category. For example, the article "Children's Crusade" is categorized in History but also Religion, makes sense right?. We matched when articles shared at least one category and this is why we have slight variations. As we can see in plot 3, this doesn't happen because there is only one unique shortest path (shortest number of steps).

As of the last two pair of plots they correspond to the propensity score matching. We must recall that the propensity score of a data point represents its probability of receiving the treatment, so we don't expect an exact matching. We observe that in some cases the difference between the two matched groups becomes smaller.

## Observational Study

Finally, we can draw some conclusions. Let's see…

{% include plots/paths_count_observe_map.html %}

There is no significance?! As we always say, no results are results. After performing matching we were able to balance the dataset so the results obtained were more trustful, and they show no significance, even if before it appeared to be. This shows that what can be perceived in a well-named naive analysis is not a picture of reality but further analysis is needed.