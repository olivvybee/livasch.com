---
title: 'iOS Development: Remove Old Notifications From Notification Center'
date: 2012-02-29T17:00:00Z
---

There are many things I dislike. One of them is stale notifications clogging up
Notification Center on my iPhone and iPad. When I open an app from a
notification, I expect that notification to be cleared from the list, but sadly
a lot of apps don't do this.

I did some research and found out it's incredibly simple to clear out your app's
notifications in Notification Center.

If your application uses badges, you should be able to clear out entries in
Notification Center by setting your badge to zero:

```objectivec
[[UIApplication sharedApplication] setApplicationIconBadgeNumber:0];
```

Or if your badge is already set to zero, you can set it to non-zero, then back
to zero straight away and that should work.

```objectivec
[[UIApplication sharedApplication] setApplicationIconBadgeNumber:1];
[[UIApplication sharedApplication] setApplicationIconBadgeNumber:0];
```

If that doesn't work, you can try setting the list of scheduled local
notifications to itself; this keeps any scheduled notifications intact, but also
removes old ones from Notification Center.

```objectivec
UIApplication* application = [UIApplication sharedApplication];
NSArray* scheduledNotifications = [NSArray arrayWithArray:application.scheduledLocalNotifications];
application.scheduledLocalNotifications = scheduledNotifications;
```

I can't guarantee that this will continue to work forever; as of writing this,
it works with iOS 5.
