---
title: Get Site Profile - GET /profile
---

## Description

Get the site profile.

Path: `/profile`

Method: `GET`

This api does not receive any query parameters.

This api does not require any authentication.

returns `SiteProfile` object

content-type: `application/json`

## Types

### SiteProfile

```typescript
interface SiteProfile {
  site_name: string;
  site_description: string;
  site_keywords: string[];
}
```