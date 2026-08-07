# ✴️ My personal website

## Developing

Once you've cloned this project and installed dependencies with `npm install`, start a development server:

```bash
npm run dev
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Deployment

Every push to `main`, including a merged pull request, runs
[`deploy.yml`](.github/workflows/deploy.yml). The workflow lints, tests, and builds the site before it
synchronizes `build/` to the production server with `rsync`. Checksums are used so only changed
content is transferred, and files that no longer exist in the build are removed from the server.

Create a `production` environment under **Settings → Environments** and configure these variables:

- `SSH_HOST`: SSH server hostname or IP address.
- `SSH_USER`: user that owns or can write to the deployment directory.
- `SSH_PORT`: SSH port (optional; defaults to `22`).
- `DEPLOY_PATH`: absolute remote directory served by the web server, without spaces.

Add these environment secrets:

- `SSH_PRIVATE_KEY`: private half of a dedicated deployment key. Install its public half in the
  server user's `~/.ssh/authorized_keys` file.
- `SSH_KNOWN_HOSTS`: verified `known_hosts` entry for the server. Generate it with
  `ssh-keyscan -p <port> <host>` from a trusted network and verify the fingerprint before saving it.

The deployment directory must already exist, the SSH user must be able to write to it, and `rsync`
must be installed on the server. Because the workflow mirrors the build with deletion enabled, use
a directory dedicated to this website.
