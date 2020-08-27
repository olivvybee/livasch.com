---
title: Keep iTunes OCD at Bay with MetaZ
date: 2013-04-11T23:17:00Z
tags: [Tutorials, OS X]
---

If you're anything like me, you like your iTunes library to look neat and tidy,
and to contain all the information it's supposed to, even if your content didn't
come from the iTunes Store.

For instance, in iTunes 11, the Description field for movies and TV shows became
much more prominent. So prominent, in fact, that it purposefully points out that
the description is missing if you haven't added one.

![A list of three episodes of How I Met Your Mother. Under each episode is text that reads "No Description Available".](/img/2013-04-No_Description_Available.png)

Short of describing movies and episodes of TV shows yourself in 256 characters,
there's no way to consistently add the Description in. That is, unless you use
[MetaZ](http://griff.github.io/metaz/). <!-- more -->

MetaZ is a new implementation of MetaX, a tagging program which stopped getting
updated a while back. It allows you to load in any video file and update its MP4
metadata, which iTunes can then read and display.

![Screenshot of MetaZ's main interface. The main section has a form that has the same metadata fields as iTunes.](/img/2013/04/11/MetaZ_Main_Window.png)

Using MetaZ, metadata fields that aren't editable in iTunes can be edited and
saved. For example, the Date field cannot be set in the Get Info panel in
iTunes, but shows up when set:

![A list of three episodes of Doctor Who. Under each episode is text displaying the date the episode was released.](/img/2013-04-Episode_Dates.png)

You might be thinking, "Great, now there's _even more_ data I need to find so
that my iTunes metadata is complete!", and you'd be right. However, I haven't
mentioned the best feature of MetaZ.

After importing a video file, MetaZ will automatically search
[Tag Chimp](http://www.tagchimp.com), [TMDb](http://www.themoviedb.org) and
[The TVDb](http://thetvdb.com) to find the appropriate data for that file,
including description, date and more.

Simply select a file in the right-hand pane, then once MetaZ has finished
searching, choose a metadata source in the left-hand pane. The middle pane will
then update with the data from your chosen source. Select the checkbox next to
each item you wish to save. You can also manually make changes in the text
fields if you want.

![The main section of MetaZ with the form filled in with data about an episode of How I Met Your Mother.](/img/2013-04-MetaZ_Loaded_Metadata.png)

When you are finished editing, click **Write** in the toolbar and the metadata
will be saved into the file. Once MetaZ has finished writing, iTunes should be
updated automatically with the new data. I've shown the process here with a TV
show episode, but the same applies for movies as well.
