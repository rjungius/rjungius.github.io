For our first objective we need to classify the articles geographically, more specifically in continents, we talked before about “geotagged” articles, this information is contained in the metadata of Wikipedia articles. Unfortunately, we don’t have access to this kind of metadata. For our classification, we first performed it manually based on the categories that actually gave geographical information but it was not enough, luckily our beloved friend ChatGPT came to the rescue, we politely asked to classify the articles of the dataset into Africa, Antarctica, Asia, Europe, Middle East, North America, Australia, South America and International given the names of the articles. A few assumptions were made here, note that Central America and Oceania are not considered, the reason behind this decision is to resemble as much as possible the way players think when they play. We also asked ChatGPT to classify into Middle East because it was one of the most popular categories in the dataset, however, the Middle East is not a continent so we decided to classify it as Asia. To wrap up our classification we merged ChatGPTs with ours and classified the discrepancies manually to ensure a better outcome, we also discarded all those articles classified as International.

At this point we are ready to go for a first naive analysis of the data. Does Wikispeedias excerpt have a bias towards Europe?

{% include plots/articles_count_per_continent_bar.html %}

{% include plots/articles_count_per_continent_pie.html %}

It seems it does, at least in terms of the number of articles, there are many more articles classified as Europe. What about the presence of geography in the categories?

{% include plots/articles_count_per_category_bar.html %}

{% include plots/articles_count_per_category_pie.html %}

We can also observe a majority of European representation in most of the categories. This makes sense, if Wikipedia has more articles geotagged in Europe and NA it is not surprising that Wikispeedia does as well… but, what about NA? Well, we should always bear in mind that Wikispeedia is an excerpt of Wikipedia that is specifically targeted around the UK National Curriculum and that we discarded all International classified articles (many of international contributions have been done by NA).