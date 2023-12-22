For our first objective, we need to classify the articles geographically, more specifically in continents. We talked before about “geotagged” articles, this information is contained in the metadata of Wikipedia articles. Unfortunately, we don’t have access to this kind of metadata. For our classification, we first automatically classified those items that in our dataset were already classified within a continent, such as countries, some geographical areas, British monarchs, or presidents of the United States. However, these articles only represented about 15% of our dataset and we wanted to classify them all since some categories such as people can be strongly related to a continent.

Luckily our beloved friend ChatGPT came to the rescue, we politely asked to classify all the articles by their name giving it only the options that were already included in our dataset for the geographic data. These options were: Africa, Antarctica, Asia, Europe, the Middle East, North America, Australia, and South America. What is more, we also gave it the category “International” as an option for those articles that were not strongly related to one single continent. As we were not considering Central America, ChatGPT considered those countries as North America while our dataset considered them as South America. In this case, we kept the dataset classification. As can be seen, the Middle East is a category because it was also a category in the initial dataset. In this case, we decided to relabel all the articles labeled as Middle East as Asia. To wrap up our classification we merged ChatGPTs with ours, classified the discrepancies manually to ensure a better outcome and we also discarded all those articles classified as International.

At this point, we are ready to go for a first naive analysis of the data. Does Wikispeedia’s excerpt have a bias towards Europe?

{% include plots/articles_count_per_continent_pie.html %}

It seems it does, at least in terms of the number of articles, there are many more articles classified as Europe. What about the distribution of the continents among the different categories?

{% include plots/articles_count_per_category_bar.html %}

{% include plots/articles_count_per_category_pie.html %}

We can also observe a majority of European representation in most of the categories. This makes sense, if Wikipedia has more articles geotagged in Europe and North America (NA) it is not surprising that Wikispeedia does as well… but, what about NA? Well, we should always bear in mind that Wikispeedia is an excerpt of Wikipedia that is specifically targeted around the UK National Curriculum and that we discarded all International classified articles (many of international contributions have been done by NA).