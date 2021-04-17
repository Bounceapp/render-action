<p align="center">
  <a href="https://github.com/Bounceapp/rendert-action/actions"><img alt="typescript-action status" src="https://github.com/Bounceapp/render-action/workflows/build/badge.svg"></a>
</p>

# Render GitHub Action

Use this action to track a deployment on [Render](https://render.com)

## Action Inputs

| name         | description                                   |
| ------------ | --------------------------------------------- |
| `email`      | User email used to sign-in to Render's API    |
| `password`   | User password used to sign-in to Render's API |
| `service-id` | The id of the Render service to be tracked    |
| `token`      | GitHub token                                  |

## Example usage

```yaml
name: Render
on: [pull_request]:
jobs:
  deploy:
    name: Wait for Deploy
    runs-on: ubuntu-18.04
    steps:
      - name: Wait for Render Deployment
        uses: bounceapp/render-action@0.2.0
        with:
          email: ${{ secrets.RENDER_EMAIL }}
          password: ${{ secrets.RENDER_PASSWORD }}
          token: ${{ secrets.GITHUB_TOKEN }}
          service-id: srv-xxxxxxxxxxxxxxxxxxxx
```

## Contribute

### Publish to a distribution branch

Actions are run from GitHub repos so we will checkin the packed dist folder.

Then run [ncc](https://github.com/zeit/ncc) and push the results:

```bash
$ npm run all
$ git add dist
$ git commit -a -m "prod dependencies"
$ git push origin releases/v1
```

See the [versioning documentation](https://github.com/actions/toolkit/blob/master/docs/action-versioning.md)
