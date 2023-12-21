For our first objective we need to classify the articles geographically, we talked before about “geotagged” articles, this information is contained in the metadata of Wikipedia articles. Unfortunately, we don’t have access to this kind of metadata. For our classification, we first performed it manually based on the categories that actually gave geographical information but it was not enough, luckily our beloved friend ChatGPT came to the rescue, we politely asked to classify the articles of the dataset into Africa, Antarctica, Asia, Europe, North America, Australia, South America and International giving it the names of the articles. A few assumptions were made here, note that Central America and Oceania are not considered, the reason behind this decision is to resemble as much as possible the way players think when they play.  To wrap up our classification we merged ChatGPTs with ours and classified the discrepancies manually to ensure a better outcome, we also discarded all those articles classified as International. 

At this point we are ready to go for a first naive analysis of the data. Does Wikispeedias excerpt have a bias towards Europe?

{% include plots/articles_count_per_continent_bar.html %}

{% include plots/articles_count_per_continent_pie.html %}

It seems it does, at least in terms of the number of articles, there are many more articles classified as Europe. What about the presence of geography in the categories?


{% include plots/articles_count_per_category_bar.html %}

{% include plots/articles_count_per_category_pie.html %}

We can also observe a majority of European representation in most of the categories. This makes sense, if Wikipedia has more articles geotagged in Europe and NA it is not surprising that Wikispeedia does as well… but, what about NA? Well, we should always have in mind that the Wikispeedia is an excerpt of Wikipedia specifically targeted around the UK National Curriculum and that we discarded all International classified articles.

Now, let's dive into the paths. When a player starts a game, a start and goal article will be automatically given…

{% include plots/count_start_by_continet_bar.html %}

{% include plots/count_target_by_continet_bar.html %}

Of course, we still observe a majority of representation of Europe. However, we are interested in how people play, after all, start and finish articles are not related to players, they just get them. If we observe the paths taken by users we see the following

Add some plots here

Now we have something worth studying. In this first naive analysis, it seems that players do not tend to navigate through articles classified in Europe and do not seem to achieve better results either if the target article is also classified in Europe.