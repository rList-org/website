---
title: Show the file tree - GET /tree
---

## Description

Show the file tree of the drive.

Path: `/tree`

Method: `GET`

This api does not receive any query parameters.

This api does not require any authentication.

returns `DirWithoutLink` object

content-type: `application/json`

## Types

### DirWithoutLink

```typescript
interface DirWithoutLink {
  name: string;
  size: number;
  last_modified: Date;
  subdirectories: DirWithoutLink[];
  files: FileWithoutLink[];
}
```

### FileWithoutLink

```typescript
interface FileWithoutLink {
  name: string;
  size: number;
  last_modified: Date;
}
```