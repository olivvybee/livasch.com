---
title: Recover iTunes' Missing "Create MP3 Version"
date: 2011-08-16T12:49:00Z
tags: [Tutorials, OS X]
---

Around the time version 10 was released, the option in iTunes to "Create MP3
Version" seemingly disappeared for a lot of people. It turns out, it hasn't been
removed from iTunes, but there's a setting you need to change to get it back.

<!-- more -->

If you've never changed any settings in iTunes, it's likely the option you'll
see if you right-click a track is "Create AAC Version". AAC is a great
alternative to MP3, since it generally gives better quality, but it's useless
for burning MP3 CDs, since you can't burn an AAC track to an MP3 disc. If you
try to burn a disc using iTunes and select "MP3 CD" you'll get this message:

![Error dialog in iTunes with a list of filenames. Each one says "Only files that are already in MP3 format can be burned to an MP3 CD.](/img/2011-08-Can't_Burn.png)

What you need to do is convert those files to MP3 format. However, in order to
do that, you need to get back the "Create MP3 Version" option. Here's how:

1. Open the iTunes Preferences and then open the General tab of the preferences.

   ![The General tab in the iTunes preferences window.](/img/2011-08-General_Preferences.png)

2. Near the bottom is an option which starts "When you insert a CD:". To the
   right of that is a button labelled "Import Settings..." - click that, and
   another window will open.

   ![The Import Settings window in iTunes. At the top is a dropdown labelled "Import Using", with the "MP3 Encoder" option selected.](/img/2011-08-Import_Settings.png)

3. At the top is a drop down labelled "Import Using:". Change that drop down to
   the "MP3 Encoder" option. Click OK on both windows and you're all set to
   convert tracks to MP3.

4. To convert a track to MP3 format, right-click it and choose "Create MP3
   Version". iTunes will create a second copy of the track in MP3 format.

Once all the tracks you want to burn are in MP3 format, you'll be able to burn
an MP3 disc just fine.
