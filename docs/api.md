# REST API

## Get `api/`

Check if the user is logged in.

```
{
  isAuthenticated: Boolean
}
```

## Get `api/user` [Credentials needed]

Return relevant user data

```
{
  username: String,
  blogs (Array): {
    name: String,
    title: String,
    url: String,
    description: String
  }
}
```

## Get `api/user/:blogname` [Credentials needed]

Return blog data

```
{
  name: String,
  title: String,
  url: String,
  description: String,
  followerCount: Number
}
```

## Get `api/user/:blogname/followers` [Credentials needed]

Return all follower usernames

```
{
  followers: Array<String>
}
```

## Post `api/blogs` [Credentials needed]

Return blog data for up to 20 usernames

```
{
  blogs (Array): {
    name: String,
    title: String,
    url: String,
    description: String,
    isAdult: Boolean,
    isNSFW: Boolean,
    isFollowing: Boolean
  }
}
```
